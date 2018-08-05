var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;
var product = require('./routes/product');
var sephora = require('./routes/sephora');
var user = require('./routes/user');
var app = express();

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

app.use(function (req, res, next) {
   res.header('Access-Control-Allow-Origin', '*'); // * => allow all origins
   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,OPTIONS,DELETE');
   res.header('Access-Control-Allow-Headers', 'Content-Type, X-Auth-Token, Accept'); // add remove headers according to your needs
   next()
 })

mongoose.connect('mongodb://localhost/makeup', { useMongoClient: true, promiseLibrary: require('bluebird') })
   .then(() => console.log('connection successful'))
   .catch((err) => console.error(err));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'false' }));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/products', express.static(path.join(__dirname, 'dist')));
app.use('/product', product);
app.use('/sephora', sephora);
app.use('/user', user);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
   var err = new Error('Not Found');
   err.status = 404;
   next(err);
});

// error handler
app.use(function (err, req, res, next) {
   // set locals, only providing error in development
   res.locals.message = err.message;
   res.locals.error = req.app.get('env') === 'development' ? err : {};

   // render the error page
   res.status(err.status || 500);
   res.json({
      message: err.message,
      error: err
   });
});

module.exports = app;
