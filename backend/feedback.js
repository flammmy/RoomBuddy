let mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    contact:Number,
    feedback:String,
    username: String
});

module.exports = mongoose.model('feedback',userSchema);
