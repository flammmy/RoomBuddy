const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  rno: String,
  price: Number,
  image: String,
  type: String,
  status: String,
  roomType: String,
  description: String,
  username : String,
  email: String,
});

module.exports = mongoose.model("room", roomSchema);
