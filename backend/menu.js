let mangoose = require('mangoose');
const menuSchema = new mangoose.Schema({
username : String, 
parentAdmin : String,
itemName: String,
price : String
});