const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config()


//server
const app = express()
const port = process.env.PORT
app.listen(port, ()=> {
    console.log(`Server Conected in ${port}`);
})

//db
require('./db')

// middleware
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


//router
app.use('/', require('./routes/preguntas'))
app.use('/', require('./routes/user.routes'))
app.use('/', require('./routes/auth.routes'))