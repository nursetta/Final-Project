
var express = require("express");
var app = express();
app.use(express.static('public'));
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var db = require('./models/');

// Configuring Passport
var passport = require('passport');
var expressSession = require('express-session');
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());
var LocalStrategy = require('passport-local').Strategy;

// app.get('/', function(req, res){
//     res.send('Hello World'); 
// });

app.get('/api/borrower', function(req, res){
   db.Borrower.find({}, function(err, borrower){
        if (err){
            return console.log("index error: " + err);
        }
        res.json(borrower);
    });
});

app.get('/api/borrower/:id', function (req, res) {
    db.Borrower.findOne({_id: req.params.id }, function(err, data) {
        if (err){
            return console.log("index error: " + err);
        }
            console.log(req.user);
            res.json(data);
    });
});

//PUT Method 
app.put('/api/borrower/:id', function (req, res) {
    var borrowerId = req.params.id;
    var update = req.body;
        db.Borrower.findOneAndUpdate({_id: borrowerId}, update, function(err, borrower){
        if (err) { 
        	res.json({message: "error"});
            }
        res.json(borrower);
		});
});

app.post('/api/borrower', function (req, res) {
    var borrower = new db.Borrower(req.body);
    var password = req.body.password;
    var password_confirmation = req.body.password_confirmation;
    if (password !== password_confirmation) {
        res.json({message: "Passwords don't match"});
        return;
    }
    db.Borrower.findOne({username: req.body.username}, function (err, result) {
        console.log(result);
        if (err) {
            console.log('err');
        }
        if (result) {
            console.log('user already exists');
            res.json({message: "user already exists"});
        }
        else {
            db.Borrower.hashPassword(password, function (err, hash) {
                if (err) {
                    console.log('err');
                }
                borrower.password = hash;
                borrower.save(borrower, function (err, borrower) {
                    if (err) {
                        return console.log("post error: " + err);
                    }
                    res.json(borrower);
                });
            });
        }
    });
});
passport.serializeUser( function(borrower, done) {
  console.log(borrower);
  var sessionBorrower = { _id: borrower._id  };
  console.log("session borrower is: "+ sessionBorrower._id);
  done(null, sessionBorrower);
});
passport.deserializeUser(function(id, done) {
    db.Borrower.findById(id, function(err, borrower) {
        console.log('deserializing user:', borrower);
        done(err, borrower);
    });
});
app.post('/login', function login(req,res,next) {
        passport.authenticate('local', {failureFlash: true,  },
              function(err, borrower, info) {
                if(err) {return next(err);}
                if(!borrower){return res.json({url: '/#/login', message: info.message});}
                req.logIn(borrower,function(err) { //need to explicitly call req.login here, so that serializing happens: http://stackoverflow.com/questions/36525187/passport-serializeuser-is-not-called-with-this-authenticate-callback
                    console.log(borrower);
                    if (err) {return next(err);}
                    return res.json({url: '/#/borrower/' + borrower._id});
                });
              })(req,res,next);
    });
passport.use(new LocalStrategy(
  function(username, password, done) {
    db.Borrower.findOne({username: username}, function (err, borrower) {
      console.log("this is the " + borrower);
      if (err) { 
        return done(err); 
      }
      if (!borrower) { 
        return done(null, false,{message:'Provided username does not exist in our records!'}); 
      }
      borrower.validatePassword(password, function(err, result) {
        console.log(password);
        console.log(result);
        if(err || !result){
            return done(null,false,{message:'Incorrect password'});
        }else {
            return done(null, borrower);
        
        }
      });
    });
  }
));


app.listen(process.env.PORT || 3000, function () {
    console.log('Express server is up and running on http://localhost:3000/');
});