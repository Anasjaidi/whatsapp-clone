const ErrorsWrapper = require("../errors/ErrorsWrapper");
const joi = require("joi");
const AppError = require("../errors/AppError");

const Validator = (schema) => {
	return ErrorsWrapper(async (req, res, next) => {
		const { error } = schema.validate(req.body);

		if (error) {
			next(new AppError(400, error.details[0].message));
		}

    next()
	});
};

module.exports = Validator;
