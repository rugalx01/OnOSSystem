//  Author . Arthur Hsu , 2016/0303
//  Copyright (c) 2016年 Arthur Hsu. All rights reserved.
//  Mail arthur.rugalx.shiu@gmail.com

// Load use Module
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
require('string.format');

//File System
var fs = require("fs");

// use for check brower type
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// get test url 127.0.0.1:3000/listUsers
app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "./Core/Data/users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

//First Test API  test url 127.0.0.1:3000/api/v0
app.use('/api/v0', function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});

//First Test API  test url 127.0.0.1:3000/api/v1
var FirstTestAPI = require('./Core/Api/FirstTestAPI');
app.use('/api/v1', FirstTestAPI );

// default is 127.0.0.1
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('listening on %s:%s', host, port);
});

