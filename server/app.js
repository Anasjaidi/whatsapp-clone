const express = require("express");
const AppError = require('http-errors')
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");

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
app.set("port", port)
app.set("debug", debug)
app.set("env", name)

// initialize middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan(process.env.MORGAN_MODE));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./public"), { dotfiles: true }));


// start deafult route
app.use('*', (req, res, next) => {
  next(new AppError.NotFound(`resource requested ${req.baseUrl} not found.`))
})

// start error Gateway
app.use()