const express = require('express');
const app = express();

const morgan = require('morgan');
const fs = require('fs');
const createError = require('http-errors');

const routers = require('./../modules');
const passport = require('passport');

require('./passport/strategies/basic.js');

app.set('views', './src/views');
app.set('view engine', 'jade');

if(app.get('env') === 'production') {
  const accessLogStream = fs.createWriteStream(__dirname + '/logs/' + 'access.log', {flags: 'a'});
  app.use(morgan('combined', {stream: accessLogStream}));
} else app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', routers.indexRouter);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.status = err.status || 500;

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;