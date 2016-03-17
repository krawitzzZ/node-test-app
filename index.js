var express  = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var log = require('./logger');
var app = express();

// configuration

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(morgan('dev'));

// routes

require('./routes/routes.js')(app);

// listen (start app)

var port = process.env.PORT || 3000;
app.listen(port);
log.info("App listening on port " + port);
