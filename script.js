var express = require('express');
var app = express();
var path = require('path');


//viewed at local:8080
app.get('/',function(req, res) {
    res.sendFile(path.join(__dirname,'public/index.html'));
});

app.use('/',express.static(path.join(__dirname, 'public')));

app.listen(8080);
console.log("SERVER STARTED: " + Date.now().toString());