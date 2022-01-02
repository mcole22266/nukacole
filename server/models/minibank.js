const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    name: String,
    owner: String,
    created_date: Date,
    activity: Array,
})

module.exports = mongoose.model('Account', AccountSchema);
