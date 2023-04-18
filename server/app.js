const express = require("express");
const AppError = require("./errors/AppError");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const ErrorsGateway = require("./errors/ErrorsGateway");
const chatRouter = require("./routers/chatRouter");
const userRouter = require("./routers/userRouter");

// append .env vars to envirement variables
dotenv.config("./.env");
const env = process.env.NODE_ENV;

// select settings for choosen mode
const {
	corsOptions,
	name,
	app: { port, debug, logger_format },
} = require("./config/settings")(env);

// create instance from express
const app = express();

// add some vars to express app
app.set("port", port);
app.set("debug", debug);
app.set("env", name);

// initialize middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan(process.env.MORGAN_MODE));
app.use(express.urlencoded({ extended: true }));
app.use(
	express.static(path.join(__dirname, "./public"), { dotfiles: "ignore" })
);

// start resources
app.use("/api/v1/chat", chatRouter);
app.use("/api/v1/user", userRouter);

// start deafult route
app.use("*", (req, res, next) => {
	next(new AppError.NotFound(`resource requested ${req.baseUrl} not found.`));
});

// start error Gateway
app.use(ErrorsGateway);

// export the app

module.exports = app;
