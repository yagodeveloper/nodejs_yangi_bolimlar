const users = require("../models/UserModel")

module.exports = class UserController{
    static async ProfileGET(res,req){
        const { username } = req.params
        let user = await users.findOne({
            username:username,
        })

        if(!user){
            res.redirect("/");
            return
        }
        res.render("profile",{
            user,
        })
    }

    
}