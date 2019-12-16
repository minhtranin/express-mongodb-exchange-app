'use strict'
const env = require('dotenv').config()
const mongoose = require('mongoose')


// mongoose.connect('mongodb://localhost/gcom',{
//     useNewUrlParser:true,
//     useUnifiedTopology :true
// })
mongoose.connect(`mongodb://${process.env.db_user}:${process.env.db_pass}@127.0.0.1:27017/${process.env.db_name}`,
    {useNewUrlParser: true,
     useUnifiedTopology: true ,
     useCreateIndex: true,
    })
module.exports = {
    env,
    mongoose
}