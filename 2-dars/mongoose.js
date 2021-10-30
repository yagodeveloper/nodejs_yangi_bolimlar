const mongoose = require("mongoose")
const { Scheme } = require("mongoose")
const { v4 } = require("uuid")
const { MONGO_URL } = require("./config")


const client = mongoose.connect(MONGO_URL)

let UserScheme = new Scheme({
     
    username:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        unique:true,
        required:true
    }
})

const Users = mongoose.model("member", UserScheme)

(async ()=>{
    let user = new Users({
        id:v4(),
        username:"yago",
        password:"password"
    })
    user.save()
})()