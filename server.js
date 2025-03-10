var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')
var history = require('connect-history-api-fallback');

var app = express()
app.use(history())
app.use(serveStatic(path.join(__dirname, 'build')))

//var port = process.env.PORT || 5000
//app.listen(port)
app.listen(process.env.PORT || 3000);
