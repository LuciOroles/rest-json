var express = require('express');
var app = express();
var PORT = process.env.PORT || 3001;
var jsonfile = require('jsonfile');
var bodyParser = require('body-parser');


var file ="./tmp/data.json";


app.use(bodyParser.json());

app.get("/", function(req, res) {
	var banana = {x : 100, y : 101};
    res.json(banana);
});

 app.listen(PORT, function() {
        console.log("express listening on port " + PORT + "!");
    });
