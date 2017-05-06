var express = require('express');
var app = express();

app.use(express.static('http'));

var server = app.listen(7002, function () {
    var host = server.address().address ;
    var port = server.address().port;
    console.log("Simple web server running on http://%s:%s", host, port)
});

var iframeServer = app.listen(7001, function () {
    var host = iframeServer.address().address ;
    var port = iframeServer.address().port;
    console.log("IFrame web server running on http://%s:%s", host, port)
});