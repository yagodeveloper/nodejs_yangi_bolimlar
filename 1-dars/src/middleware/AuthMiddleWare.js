const Path = require("path")
const Fs = require("fs/promises")

module.exports = async (req, res, next)=>{
    let { token } = req.query;
    if(!token){
        res.status(403).json({
            ok:false,
            message:"Access Token not Found"
        });
        return;
    }

    let dbPath = Path.join(__dirname,"..","modules","db.json")
    let db = await Fs.readFile(dbPath,"utf-8")
    db = await JSON.parse(db)
    let user = db.users.find((user)=>user.token===token)
    if(!user){
        res.status(403).json({
            ok:false,
            message:"Access Token is Invaled"
        });
        return; 
    }
    next();
}