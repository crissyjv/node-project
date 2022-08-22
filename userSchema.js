const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    typeOfUser : {

        type : String,
       // required : true
    },
    userId : {

        type : Number,
        //required : true

    },

    username : {

        type : String,
        //required : true
    },

    password : {

        type : String,
        //required: true
    }


})
const userModel = mongoose.model("user",userSchema);
module.exports = userModel;