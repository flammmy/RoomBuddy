const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  image: String,
  username:String
});

module.exports = mongoose.model('gallery', gallerySchema);