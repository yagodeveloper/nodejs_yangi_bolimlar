const Path = require("path")
const fs = require("fs/promises")
const JWT = require("jsonwebtoken")

module.exports= async (req,res)=>{
    try{
        const {email,password} = req.body;
        let dbPath = Path.join(__dirname,"..","modules","db.json")
        if(!email&&!password){ throw new Error("email va parol xato")}
            let db = await fs.readFile(dbPath,"utf-8")
            db = await JSON.parse(db)
            let user = db.users.find(
                (user)=>user.email===email.toLowerCase()
            )
            if(!user){
                let newUser ={
                    email:email.toLowerCase(),
                    password:password,
                    token:JWT.sign({ email },"SECRET_WORD")
                }
                db.users.push(newUser)
                await fs.writeFile(dbPath,JSON.stringify(db))
            } else{
                if(user.password!==password){
                    throw new Error("Parol xato")
                }
            }
             db = await fs.readFile(dbPath,"utf-8");
            db = await JSON.parse(db)
            user = db.users.find((user)=>user.email===email.toLowerCase())
            let token = user.token
            res.status(200).json({
                ok:true,
                token,
            })
       
    }catch(e){
        res.status(400).json({
            ok:false,
            message:e+""
        })
    }
}