const mongoose = require("mongoose");

const pinSchema = new mongoose.Schema({
    plan: String,
    pin: String,
    amount: String,
    date: { type: Date, default: Date.now },
    use_date: { type: Date },
    status: String,
    username: String,
    transfer_to: String,
    transfer_date: { type: Date }
});

module.exports = mongoose.model('Pin', pinSchema);
