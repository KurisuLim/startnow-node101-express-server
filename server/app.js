// import files and packages up here
// create your express server below
var express = require('express');
var app = express();
var data = require('../server/data.json');

app.use(express.static('public'));



app.get('/',function(req,res){
    res.status(200);
    res.send('Hello Wolrd');
})

app.get('/data',function(req,res){
    res.status(200);
    res.json(data);
})




// finally export the express application
module.exports = app;
