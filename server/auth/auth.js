const userDAO = require("../repositories/userDAO");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const AppError = require("../errors/AppError");
const { promisify } = require("util");
const { log } = require("console");

class Auth {
	constructor() {
		this.userDAO = userDAO;
	}

	async signup(user) {
		const newUser = await this.userDAO.addUser(user);

		const token = await this.generateToken(
			user.uid,
			process.env.JWT_SECRET_KEY,
			process.env.JWT_EXPIRES_IN
		);

		return { newUser, token };
	}

	async signin(credentails) {
		const user = await this.userDAO.findUserByMail(credentails.email);

		if (!user || !this.compare(credentails.password, user.password)) {
			throw new AppError.Unauthorized("invalid email, or password.");
		}

		const token = await this.generateToken(
			user.uid,
			process.env.JWT_SECRET_KEY,
			process.env.JWT_EXPIRES_IN
		);

		return token;
	}

	verifyToken(token, SECRET_KEY) {
		return jwt.verify(token, SECRET_KEY);
	}

	async protectRoute(req, res, next) {
		let token = req.headers.authorization;

		if (!token || !token.startsWith("Bearer") || token.split(" ").length != 2) {
			return next(AppError.Unauthorized("no token provided"));
		} else {
			token = token.split(" ")[1];
		}

		const decoded = await promisify(jwt.verify)(
			token,
			process.env.JWT_SECRET_KEY
		);

		const user = await userDAO.findUserByUid(decoded.id);

		if (!user) {
			return next(AppError.Unauthorized("no user found."));
		}

		if (user.passwordChangeAt) {
			if (parseInt(user.passwordChangeAt.getTime() / 1000, 10) > decoded.iat)
				return next(
					new AppError(
						401,
						"password changes after the token was issued please, re signin."
					)
				);
		}

		req.user = user;

		next();
	}

	async hash(payload, salt) {
		return await bcrypt.hash(payload, salt);
	}

	async compare(candidate, member) {
		return await bcrypt.compare(candidate, member);
	}

	async generateToken(payload, SECRET_KEY, EXPIRE_IN) {
		return jwt.sign({ id: payload }, SECRET_KEY, { expiresIn: EXPIRE_IN });
	}
}

const auth = new Auth();

module.exports = auth;
