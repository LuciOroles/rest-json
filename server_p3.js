var express = require('express');
var app = express();
var PORT = process.env.PORT || 3021;
var jsonfile = require('jsonfile');
var file ="./tmp/data.json";
var bodyParser = require('body-parser');
var http = require('http');
var cors = require('cors');

app.set('port', PORT);
app.use(express.static(__dirname + "/p3"));
app.use(cors());
app.use(bodyParser.json());


app.get('/pagenr', function(req, res) {
    console.log("pagenr was fired");
    var obj_test = jsonfile.readFileSync(file);
    	console.log( typeof obj_test );
    res.json(obj_test);
});


app.put('/pagenr/:page', function(req, res) {
    console.log("putting data");
    
    var t = {
    	page :req.params.page
    };


    jsonfile.writeFile(file, t, function(err) {
		console.error(err);
	});


    res.json(t);

});

http.createServer(app).listen(PORT);
//app.listen(PORT);
	console.log('server started on PORT: ' + PORT);