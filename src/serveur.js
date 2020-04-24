
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

    if(err==null)
    {
        console.log("'im connected");
    }
    else
    {
        console.log("i'm not connected");
    }
    
});

 //get scénario de chaque perso
 app.get("/Scenario", (req, res) => {
    console.log("/Scenario");
    let joueur=req.query.id_scenario
    console.log("joueur :"+joueur);
    connection.query('Select * from SITUATION where id_scenario = "scenario_'+joueur+'"',function (err,rows,fields) {
        if(err) throw err
        else
        {
        console.log(""+rows)
        res.end(JSON.stringify(rows));
        }
        
    })
});



app.listen(8888);



