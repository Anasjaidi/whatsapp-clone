const express = require("express");
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

// add some vars to express app
app.set("port", port)
app.set("debug", debug)
app.set("env", name)

// create instance from express
const app = express();

// initialize middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan(process.env.MORGAN_MODE));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./public"), { dotfiles: true }));
