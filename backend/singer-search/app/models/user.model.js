const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email : String,
    name : String,
    password : String,
    gender : String,
    age : Number,
    phone : Number,
    bio : String,
    city : String
});

module.exports = mongoose.model('User', UserSchema);