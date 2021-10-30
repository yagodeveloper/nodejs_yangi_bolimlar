const fs = require("fs")
const morgan = require("morgan")
const express = require("express")
const path = require("path")
const CookieParser = require("cookie-parser")

const mongo = require("./src/modules/mongoose")
const { PORT } = require("./config")

const app = express()

app.listen(PORT, () => {
    console.log("server ishladi")
})

async function server() {
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(CookieParser())
    app.use("public", express.static(path.join(__dirname, "src", "public")))

    app.set("view engine", "ejs")
    app.set("view", path.join(__dirname, "src", "views"))

    fs.readdir(path.join(__dirname, "src", "routes"),( err, files)=> {
        if(!err) {
            files.forEach((file) => {
                let routePath = path.join(__dirname, "src", "routes", file)
                const Route = require(routePath)
                if (Route.path && Route.router) 
                    app.use(Route.path, Route.router)
            })
        }
    })
    

await mongo()
}
server()