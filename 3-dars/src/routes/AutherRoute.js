const { SignUpGET, loginGET, SignUpPOST, LoginPOST } = require("../controllers/AuthControllers")

const router = require("express").Router()

router.get("/login",loginGET)
router.get("/signup",SignUpGET)

router.post("/login",LoginPOST)
router.post("/signup",SignUpPOST)

module.exports = {
    path:"/users",
    router,
}