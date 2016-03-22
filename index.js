var express  = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var log = require('./logger');
var app = express();

// configuration

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(morgan({stream: log.stream}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, X-Requested-With");
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    next();
});

// routes

require('./routes/routes.js')(app);

// listen

var port = process.env.PORT || 3000;
app.listen(port);
log.info("App listening on port " + port);
