require('dotenv').config({path: __dirname+'/env_config.js'});

var express = require("express");
var app = express();
var http = require("http").createServer(app);
var bodyParser = require('body-parser');
var mysql = require("mysql");
var pool  =  mysql.createPool({
    connectionLimit : 10,
    host     : process.env.MYSQL_URL,
    user     : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASS,
    database : process.env.MYSQL_DB,
    debug    :  false
});  


var functions = require("./custom_modules/reusable_functions.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
  res.send('Works '+USR);
});

app.post('/login', (req, res)=>{
  pool.query('SELECT * FROM admins WHERE email = '+req.body.email+' ', function(err, rows){
    if(err){ return; console.log(err)}
      if(rows.length > 0){
        res.send('Available');
    }else{
      pool.query('INSERT INTO admins SET ?'+req.body, function(err, res) {
        console.log(err);
        console.log(JSON.stringify(res));
      });
    }
  })
});

app.post('/createBizz', (req, res)=>{
   pool.query('INSERT INTO businesses SET ?', req.body, function(err, ok) {
     if (err) {console.log(err); return;}
       console.log(ok);
   })
});

app.post('/addLocation', (req, res)=>{
  console.log('Ffe Tuliko')
  pool.query('INSERT INTO geo_location SET ?',req.body, function(err, ok) {
     if (err) {console.log(err); return;}
          res.send('done');      
  })
});

app.post('/product', (req, res)=>{
  pool.query('INSERT INTO products SET ?',req.body, function(err, ok) {
      if (err) {console.log(err); return;}
      res.send('done');
  })
});

app.get('/suggestions', (req, res)=>{
  
});

 app.get('/Search', (req, res)=>{
  console.log('Search');
     var business = [
         {
          name: 'Kinkizi Traders',
          image: 'default.jpg',
          distance: '10m'
         }
     ]
     res.send(business);
 })


http.listen(process.env.PORT, ()=>{
  console.log('App listening at : 0.0.0.0:'+process.env.PORT);
});