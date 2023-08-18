const mongoose = require('mongoose');

// User Registration

const userSchema = new mongoose.Schema({
    name:{

        type:String,
        required:[true , 'Name is required'],
        trim:true,
        maxLength:[20 , 'Length should not exceed 20 character']

    }, 

    email:{
        type:String,
        required:[true , 'E-mail is required'],
        unique:true
    },

    password:{
        type:String,
        required:[true , 'Password is required'],
        unique:true
    },
})

module.exports = mongoose.model('user' , userSchema)