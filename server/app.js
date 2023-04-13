const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const  path  = require('path')

const app = express()


// initialize middlewares
app.use(cors())
app.use(express.json())
app.use(morgan(process.env.MORGAN_MODE));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public'), {dotfiles: true}))