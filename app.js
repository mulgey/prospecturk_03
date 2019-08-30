// let's use express
const express = require('express');
const app = express();

/* let's use mongoose and connect it
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/prospecturkRenal', { useNewUrlParser: true });
const db = mongoose.connection;


// mongoose error stuff
db.on('error', console.error.bind(console, 'connection error:'));
*/

// parse incoming requests
const bodyParser = require('body-parser');
app.use(bodyParser.json()); //json kullanılmış(?)
app.use(bodyParser.urlencoded({ extended: false }));

// Kurabiye çalışmalarımız için middleware
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// serve static files from /public
app.use(express.static(__dirname + '/public'));

// view engine setup
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

// include routes
var routes = require('./routes/index');
app.use('/', routes);

// morgen lütfen
const logger = require('morgan');
app.use(logger("dev")); // bu sayede terminalimizde bol bol "HTTPVerb + URL + statusCode" bilgisi alacağız

/* catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('File Not Found');
    err.status = 404;
    next(err);
  });

*/
  
// error handler
// define as the last app.use callback
/*
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
*/
  
// listen on port 3000
app.listen(process.env.PORT || 3000, () => {
    console.log('Express in kulağı 3000 de, dinliyor');
});