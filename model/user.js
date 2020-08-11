const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username : {
        type : String,
        required : true,
        min : 3,
        trim : true
    },
    email :{
        type :String,
        required : true,
        trim : true
    },
    password :{
        type : String,
        required : true,
        trim : true
    },
    date :{
        type: Date,
        default: Date.now
    }   
})

const User = mongoose.model('User' , userSchema);

module.exports = User