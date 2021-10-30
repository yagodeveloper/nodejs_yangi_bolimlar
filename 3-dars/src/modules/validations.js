const Joi = require("joi")


module.exports = class Validations{
    static SignUpValidation(data){
        return new Joi.object({
            full_name:Joi.string().min(5).max(50).required(),
            email:Joi.string().required(),
            user_name:Joi.string().min(3).max(25).required(),
            password:Joi.string().min(6).required(),
        }).validateAsync(data)
    }
    static LoginValidation(data){
        return new Joi.object({
            email:Joi.string().required(),
            password:Joi.string().min(6).required(),
        }).validateAsync(data)
    }
}