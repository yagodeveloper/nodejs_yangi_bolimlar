const SearchGet = require("../controllers/SearchGet");

const router = require("express").Router();

router.get("/",SearchGet)


module.exports = {
    router,
    path:"/search",
}