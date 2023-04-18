const Joi = require("joi");

const userSignUpSchema = Joi.object().keys({
	name: Joi.string().min(3).max(50).required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(5).required(),
	repeatpassword: Joi.ref("passowrd"),
});

const userSignInSchema = Joi.object().keys({
	email: Joi.string().email().required(),
	password: Joi.string().min(5).required(),
});

module.exports = { userSignUpSchema, userSignInSchema };
