const mongoose = require('mongoose');
require('dotenv').config()

const db = process.env.DB
// const db = process.env.DB_PRODUCTION
mongoose.connect(db, {
    useCreateIndex: true,
    useUnifiedTopology:true,
    useNewUrlParser: true,
    useFindAndModify: false
}, ()=> {
    console.log('db conected successfully');
})