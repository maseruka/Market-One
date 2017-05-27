require('dotenv').config({path: __dirname+'/env_config.js'});

var express = require("express");
var app = express();
var http = require("http").createServer(app);
var bodyParser = require('body-parser');
var mysql = require("mysql");
var functions = require("./custom_modules/reusable_functions.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var placest = {
    origin: {
        lat: 0.381511, 
        lng: 32.568406
    },
    destination: {
        lat: 0.360151,
        lng: 32.562285
    }
}

functions.getDistance(placest, (distance)=>{
    console.log(distance)
});

app.get('/', (req, res)=>{
  res.send('Works.');
});

app.get('/search', (req, res)=>{
  var product = req.body.productSearched;
  
})


http.listen(process.env.PORT, ()=>{
  console.log('App listening at : 0.0.0.0:'+process.env.PORT);
});