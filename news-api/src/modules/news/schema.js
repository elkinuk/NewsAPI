const mongoose = require('mongoose');

const news = new mongoose.Schema({
  title: String,
  author: String,
  content: String
});

module.exports = news;
