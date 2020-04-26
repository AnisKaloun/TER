
var mysql = require('mysql');
var express = require('express');
var app = express();

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
        //console.log(""+JSON.stringify(rows));
        //res.end(JSON.stringify(rows));
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
                                    // console.log(element);
                    
                                    connection.query('Select * from CHOIX where id_scenario ="scenario_'+joueur+'"and id_choix="' + element.id_choix3 + '"', function (err, rows, fields) {
                                            console.log(this.sql);
                                            if (err) throw err
                                            else {
                                                if(rows[0])
                                                {
                                                var json = { text_choix3: rows[0].text_choix, text_resultat3: rows[0].text_resultat, id_situation3: rows[0].id_next_situation };
                                                element = jsonConcat(element, json);
                                               // console.log(element)
                                                }
                                                resultat.push(element);
                                                //console.log(resultat);
                                                if(index==ligne.length-1)
                                                {
                                               // console.log(resultat);  
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


app.listen(8888);

function jsonConcat(o1, o2) {
    for (var key in o2) {
        o1[key] = o2[key];
    }
    return o1;
}


