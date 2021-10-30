const Express = require("express")
const morgan = require("morgan")
const helmet = require("helmet")
const glob = require("glob")
const Path = require("path")
const {PORT} = require("./config")
const app  = Express();

app.listen(PORT, ()=>{console.log("Server Ready")})

app.set("view engine","ejs")
app.set("views",Path.join(__dirname,"src","views"))



app.use(morgan("tiny"));
app.use(helmet())
app.use(Express.json())
app.use(Express.urlencoded({extended:true}))


glob("**/*Route.js",(err,files)=>{
    if(!err){
        files.forEach((file)=>{
            let routePath = Path.join(__dirname,file)
            const Route = require(routePath)
            if(Route.path && Route.router){
                app.use(Route.path,Route.router)
            }
        })
    }
})