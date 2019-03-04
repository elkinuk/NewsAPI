const express = require('express');
const indexRouter = express.Router();
const newsRouter = require('./news/routes.js');
const usersRouter = require('./users/routes.js');

indexRouter.use('/news', newsRouter)
indexRouter.use('/users', usersRouter);

indexRouter.all('*', (req, res) => { res.send('Hello, it is News-API'); });

module.exports.indexRouter = indexRouter;
