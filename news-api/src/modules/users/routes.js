const express = require('express');
const router = express.Router();
const req = require('./controlles.js');

router.route('/signup')
  .post((...args) => req.postData(...args));

module.exports = router;