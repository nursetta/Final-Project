var express = require("express");
var app = express();
app.use(express.static('public'));

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var db = require('./models/');
	
app.get('/', function(req, res){
    res.send('Hello World'); 
});

app.get('/api/borrower', function(req, res){
   db.Borrower.find(function(err, borrower){
        if (err){
            return console.log("index error: " + err);
        }
        res.json(borrower);
    });
});

app.post('/api/borrower', function (req, res) {
	var borrower = new db.Borrower(req.body);
	console.log(borrower);
	console.log(req.body);
	console.log();
		borrower.save(function(err) {
	         if (err){
	            return console.log("post error: " + err);
	        }
	});
});

app.get('/api/borrower/:id', function (req, res) {
	db.Borrower.findOne({_id: req.params.id }, function(err, data) {
		if (err){
			return console.log("index error: " + err);
		}
			res.json(data);
	});
});


//PUT Method 
app.put('/api/borrower/:id', function (req, res) {
	var borrowerId = req.params.id;
	var update = req.body;
		db.Borrower.findOneAndUpdate({_id: borrowerId}, update, function(err, borrower){
		if (err) { return console.log("update error: " + err); }
		res.json(borrower);
	});
});


app.listen(process.env.PORT || 3000, function () {
	console.log('Express server is up and running on http://localhost:3000/');
});