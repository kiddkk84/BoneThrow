const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const UserSchema = new Schema({
    linkedin: {
        type: String,
        required: false,
    },
    twitter: {
        type: String,
        required: false,
    },
    facebook: {
        type: String,
        required: false,
    },
    youtube: {
        type: String,
        required: false,
    },
    handle: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true 
    }, 
    password: {
        type: String,
        required: true 
    },
    date: {
        type: Date,
        default: Date.now 
    },
    age: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true,
        default: "825 Battery St"
    },
    latlong: {
        type: String,
        required: false,
        default: ""
    }
    
});

const User = mongoose.model('users', UserSchema); 
module.exports = User;