var express = require('express');
var app = express();
var PORT = process.env.PORT || 3021;
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);
var bodyParser = require('body-parser');



app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/contactlist', function(req, res) {
    db.contactlist.find(function(err, docs) {
        res.json(docs);
    });
});

app.get('/contactlist/:id', function(req, res) {
    var id = req.params.id;
    console.log('search for  id ' + id);
    db.contactlist.findOne({ _id: mongojs.ObjectId(id) }, function(err, doc) {
        res.json(doc);
    });
});

app.put('/contactlist/:id', function(req, res) {
    var id = req.params.id;
    console.log('search for  id ' + req.body.name);
    db.contactlist.findAndModify({
        query: { _id: mongojs.ObjectId(id) },
        update: { $set: { name: req.body.name, email: req.body.email, number: req.body.number } },
        new: true
    }, function(err, doc) {
        res.json(doc);
    });
});

app.post('/contactlist', function(req, res) {
    console.log(req.body);
    db.contactlist.insert(req.body, function(err, doc) {
        res.json(doc);
    });

});


app.delete('/contactlist/:id', function(req, res) {
    var id = req.params.id;
    console.log('delete id ' + id);
    db.contactlist.remove({ _id: mongojs.ObjectId(id) }, function(err, doc) {

        res.json(doc);

    });
});
app.listen(PORT);



console.log('server started on PORT: ' + PORT);
