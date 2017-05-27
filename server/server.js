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
  console.log('aa');
  pool.query('SELECT * FROM admins WHERE email = '+USR+' ', function(err, rows){
    if(err){ return; console.log(err)}
      if(rows.length > 0){
        console.log('asas');
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
   var name = req.body.name;
   var slogan = req.body.slogan;
   console.log(name+' '+slogan);

   pool.query('INSERT INTO businesses SET ?', req.body, function(err, ok) {
     if (err) {console.log(err); return;}
       console.log(ok);
   })


})

app.get('/search', (req, res)=>{
  var product = req.body.productSearched;
  
})


http.listen(process.env.PORT, ()=>{
  console.log('App listening at : 0.0.0.0:'+process.env.PORT);
});