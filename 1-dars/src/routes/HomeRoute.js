const HomeGet = require("../controllers/HomeGet");

const router = require("express").Router();

router.get("/",HomeGet)


module.exports = {
    router,
    path:"/",
}