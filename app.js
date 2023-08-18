require ('dotenv').config()
const express = require('express')
const app = express()

const connect_to_db = require('./db.js')

app.use(express.json())

const Register_router = require('./routes/routes.js')
app.use('/' , Register_router )

connect_to_db()

module.exports = app
