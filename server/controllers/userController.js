const auth = require("../auth/auth");
const ErrorsWrapper = require("../errors/ErrorsWrapper");

const signup = ErrorsWrapper(async (req, res, next) => {
	const { name, email, password, imagePath } = req.body;

	const { token, newUser } = await auth.signup({
		name,
		email,
		password,
		imagePath,
	});
	res.status(200).json({
		status: "success",
		token,
		data: newUser,
	});
});

const signin = ErrorsWrapper(async (req, res, next) => {
	const { email, password } = req.body;

	const token = await auth.signin({ email, password });
	res.status(200).json({
		status: "success",
		token,
	});
});

const userController = { signin, signup };
module.exports = userController;
