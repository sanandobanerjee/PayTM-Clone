const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/paytm')

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        unique: true,
        minLength:1,
        maxLength: 50
    },
    password : {
        type: String,
        required: true,
        minLength:8
    },

    firstName :{
        type: String,
        required: true,
        trim:true,
        maxLength: 50
    },  
    lastName :{
        type: String,
        required: true,
        trim:true,
        maxLength: 50
    }
});

const accountSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    balance:{
        type:Number,
        required:true
    }
});


const Account= mongoose.model('Account', accountSchema);
const User= mongoose.model('User', userSchema);

module.exports = {
    User,
    Account
};