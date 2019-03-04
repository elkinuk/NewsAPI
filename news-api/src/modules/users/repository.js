const schema = require('./schema.js');
const mongoose = require('mongoose');

module.exports = mongoose.model('users', schema);
