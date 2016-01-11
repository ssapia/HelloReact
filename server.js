// server.js
// by https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 8081;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var comments = [
    {"author": "Pete Hunt", "text": "This is one comment"},
    {"author": "Jordan Walke", "text": "This is *another* comment"},
    {"author": "Salvador Sapia", "text": "Hello World"}
];


// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/comments/', function(req, res) {
    res.json(comments);   
});

router.post('/comments/', function(req, res) {
    var comment = req.body;
    comments = comments.concat([comment]);
});



// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
//console.log('Magic happens on port ' + port);
