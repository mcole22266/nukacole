const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    password: String,
    name: String,
    created_date: Date,
})

module.exports = mongoose.model('User', UserSchema);
