var mysql = require('mysql');
var express = require('express');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});

// Set up connection to database.
var connection = mysql.createConnection({
    host: 'mysql-mrvincent13.alwaysdata.net',
    user: '204815',
    password: 'Azertyuiop123!',
    database: 'mrvincent13_bd_ter',
});


connection.connect(function (err) {

    if (err == null) {
        console.log("'im connected");
    }
    else {
        console.log("i'm not connected");
    }

});

//get scénario de chaque perso
app.get("/Scenario", (req, res) => {
    console.log("/Scenario");
    let joueur = req.query.id_scenario
    console.log("joueur :" + joueur);
    connection.query('Select * from SITUATION where id_scenario = "scenario_'+joueur+'"', function (err, ligne, fields) {
    if (err) throw err
    else {

        var resultat = new Array();
        ligne.forEach((element,index,ligne) => {

            if (element.id_choix1) {
                //on as trouvé le choix 1
                connection.query('Select * from CHOIX where id_scenario ="scenario_'+joueur+'" and id_choix="' + element.id_choix1 + '"', function (err, rows, fields) {
                    if (err) throw err
                    else {
                        var json = { text_choix1: rows[0].text_choix, text_resultat1: rows[0].text_resultat, id_situation1: rows[0].id_next_situation };
                        element = jsonConcat(element, json);
                        if (element.id_choix2) {

                            connection.query('Select * from CHOIX where id_scenario ="scenario_'+joueur+'"and id_choix="' + element.id_choix2 + '"', function (err, rows, fields) {
                                if (err) throw err
                                else {
                                    var json = { text_choix2: rows[0].text_choix, text_resultat2: rows[0].text_resultat, id_situation2: rows[0].id_next_situation };
                                    element = jsonConcat(element, json);
                    
                                    connection.query('Select * from CHOIX where id_scenario ="scenario_'+joueur+'"and id_choix="' + element.id_choix3 + '"', function (err, rows, fields) {

                                         if (err) throw err
                                            else {
                                                if(rows[0])
                                                {
                                                var json = { text_choix3: rows[0].text_choix, text_resultat3: rows[0].text_resultat, id_situation3: rows[0].id_next_situation };
                                                element = jsonConcat(element, json);
                                                }
                                                resultat.push(element);
                                                if(index==ligne.length-1)
                                                {
                                                 res.end(JSON.stringify(resultat));
                                                }
                                            }
                                        })
     

                                }
                            })
                        }

                    }

                })

            }

        });
           
        

     

    }

})
});

app.post("/InsertionUser",(req,res) =>{

    var user = req.body;
    // Do a MySQL query.
    console.log(user);
    connection.query('INSERT INTO UTILISATEUR SET ?', user, function(err, result) {
      if(err) throw err
      else
      {
        res.end(""+result.insertId);
      }
    });

})
 
app.post("/InsertionResultat",(req,res)=>
{
    var resultat = req.body;
    // Do a MySQL query.
    console.log(resultat);
    
    connection.query('INSERT INTO RESULTAT SET ?', resultat, function(err, result) {
      if(err) throw err
      else
      {
        res.end("success");
      }
    });
    
})

app.listen(8888);

function jsonConcat(o1, o2) {
    for (var key in o2) {
        o1[key] = o2[key];
    }
    return o1;
}


