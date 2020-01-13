var express = require('express');
var app = express();
var path = require('path');


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/script.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/script.js'));
});

app.listen(3000);