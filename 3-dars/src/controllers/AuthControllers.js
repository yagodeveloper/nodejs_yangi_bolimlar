const users = require("../models/UserModel")
const {  SignUpValidation,LoginValidation } = require("../modules/validations")
const {v4} = require("uuid")
const {generateHash} = require("../modules/bcript")
const {generateToken} = require("../modules/jwt")

module.exports = class UserControllers{
    static loginGET(req,res){
        res.render("login")
    }
    static SignUpGET(req,res){
        res.render("signup")
    } 


    static async SignUpPOST(req,res){
        try{
            const{full_name,user_name,email,password}= await SignUpValidation(req.body)

            let hash = await generateHash(password)
            let user = await users.create({
                id:v4(),
                full_name,
                email,
                user_name,
                password:hash,
            })

            let token = generateToken({
                ...user,
                password:undefined,
            })

            res.cookie("token",token).redirect("/")
        }catch(e){
            res.render("signup",{
                error:"sizni malumotlaringiz talabga javob bermadi"
            })
        }

    }

    static async LoginPOST(req,res){
            try{
            const{email,password}= await LoginValidation(req.body)


            let user = await users.findOne({
                email,
            })
            if(!user){
                throw new Error("bunday User bazada mavjud emas")
            }

            let isPasswordTrue = await compareHash(password,user.password)
            if(!isPasswordTrue){
                throw new Error("parolni xato kiritdingiz")
            }
            let token = generateToken({
                ...user,
                password:undefined,
            })

            }catch(e){
                res.render("login",{
                    error:e+""
                })
            }
    }
}