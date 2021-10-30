const { MongoClient } = require("mongodb")
const { MONGO_URL } = require("./config")
const {v4} = require("uuid")
const cors = require("cors")


let client = new MongoClient(MONGO_URL)

// async function mongoInit(){
//     await client.connect();

//     let db = client.db("Magazin");

//     let collections = await db.collections()
//     let collection = await db.collection("users");

//     // collection.insertOne({name:"samandar"},(err,res)=>{
//     //     if(!err){
//     //         console.log(res)
//     //     }
//     // })

//     let found = await collection.find({name:"samandar"}).toArray()
//     console.log(found)
// }

async function mongoInit(){
    await client.connect();

    let db = client.db("Magazin");

    
    
    let collection =  db.collection("users");
    return collection

    
}



const express = require("express")
const { response } = require("express")
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    "Access-Control-Allow-Orign":"*"
}))

app.listen(8080,()=>console.log(true))

app.post("/user", async(req,res)=>{
    let users = await mongoInit()

    const { username,password } = req.body;

    if(username&&password){
        users.findOne({username},(err,response)=>{
            if(response === null){
                users.insertOne({
                    id:v4(),
                    username:username.toLowerCase(),
                    password,
                })
            }
        })
    }
})