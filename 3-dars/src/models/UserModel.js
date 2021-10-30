const mongoose = require("mongoose")
const { v4}=require("uuid")

const UserScheme = new mongoose.Schema({
    id:{
        type:String,
        unique:true,
        required:true
    },
    full_name:{
        type:String,
        required:true,
        min:5,
        max:50
    },
    username:{
        type:String,
        unique:true,
        required:true,
        min:3,
        max:25
    },
    email  :{
        type:String,
        unique:true,
        required:true
    },
    avatar  :{
        type:String,
        
    },
    password  :{
        type:String,
        required:true
    },
})

const users = mongoose.model("users",UserScheme)
module.exports = users;