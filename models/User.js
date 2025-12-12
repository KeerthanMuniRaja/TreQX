const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        lowercase : true
    },
    password : {
        type : String,
        required : true,
        minlength : 6,
    },
    role : {
        type : String,
        enum : ['user', 'admin'],  //only add user or admin 
        default : 'user'
    }

},{timestamps : true});

module.exports = mongoose.model('User', userSchema);
