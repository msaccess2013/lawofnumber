'use strict';
process.env.NODE_ENV = process.NODE_ENV || 'development'
var express = require('./config/express')



//var app = express()

//app.get('/', function(req, res){
    //res.status(200).send("Hello from GDG Pearaphong")
    //res.status(200).sendFile(__dirname + '/views/index.html')
    
//})

var server = express().listen(process.env.PORT || '8080', function(){
    console.log('App listening on Port %s', server.address().port)
    console.log('Press Ctrl+C to quit')
})