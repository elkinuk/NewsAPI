const express = require('express');
const router = express.Router();
const req = require('./controlles.js');

const passport = require('passport');

router.route('/')
  .get((...args) => req.getAllData(...args))
  .post(passport.authorize('basic'), (...args) => req.postData(...args));

router.route('/:id')
  .get((...args) => req.getDataByID(...args))
  .put(passport.authorize('basic'), (...args) => req.putDataByID(...args))
  .delete(passport.authorize('basic'), (...args) => req.delDataByID(...args));

module.exports = router