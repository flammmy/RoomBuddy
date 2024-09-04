const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    orderid: { type: Number, default: 240001 },
    username: { type: String, default: '', index: true },  // Added index for efficient querying
    first_name: { type: String, default: '' },
    last_name: { type: String, default: '' },
    email: { type: String, default: '' },
    password: { type: String, default: '' },
    status: { type: Number, default: 0 },
    authority: { type: String, default: '' },
    reference_username: { type: String, default: '' },
    parent_admin: { type: String, default: '' },
    Blocked: { type: Number, default: 0 },
    GST: { type: String, default: '' },
    GSTIN: { type: String, default: '' },
    org_name: { type: String, default: '' },
    address: { type: String, default: '' },
    address_2: { type: String, default: '' },
    state: { type: String, default: '' },
    location: { type: String, default: '' },
    phone_number: { type: String, default: '' },
    date: { type: Date, default: Date.now },
    life_time_sale: { type: Number, default: 0 }
});

module.exports = mongoose.model('Users', userSchema);
