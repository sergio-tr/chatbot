"use strict";

require('dotenv').config();
var https = require('https');
var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});
app.use(express["static"](path.join(__dirname, '../')));
var options = {
  key: fs.readFileSync(path.join(__dirname, '../certificates/localhost-key.pem')),
  cert: fs.readFileSync(path.join(__dirname, '../certificates/localhost.pem'))
};
var port = process.env.PORT || 9090;
https.createServer(options, app).listen(port, function () {
  console.log("Server is running at https://localhost:".concat(port));
});