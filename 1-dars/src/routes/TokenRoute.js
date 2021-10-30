const TokenPost = require("../controllers/TokenPost");
const AuthMiddleWare = require("../middleware/AuthMiddleWare");

const router = require("express").Router();

router.post("/",AuthMiddleWare,TokenPost)


module.exports = {
    router,
    path:"/token",
}