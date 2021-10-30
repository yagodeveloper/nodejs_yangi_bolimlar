const { ProfileGET } = require("../controllers/UserController")

const router = require("express").Router()

router.get("/:username",ProfileGET)



module.exports = {
    path:"/",
    router,
}