const express = require("express");

const ErrorsWrapper = require("../errors/ErrorsWrapper");
const Validator = require("../helpers/JoiValidator");
const {
	userSignUpSchema,
	userSignInSchema,
} = require("../validation/authSchema");
const userController = require("../controllers/userController");

const router = express.Router();

router
	.route("/signup")
	.post((Validator(userSignUpSchema)), userController.signup);
router
	.route("/signin")
	.post((Validator(userSignInSchema)), userController.signin);

// router.route('/:chatId').get().post().delete().update()

module.exports = router;
