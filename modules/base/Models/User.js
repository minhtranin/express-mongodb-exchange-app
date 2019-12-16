'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')

const schema = new Schema({
    password:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    firstname:{
        type:String,
        required: true
    },
    lastname:{
        type:String,
        required: true
    },
    phone:{
        type:String,
        required: true,
        unique: true
    },
    image:{
        type:String,
        required: true
    },
    country:{
        type:String,
        required: true
    },
    province:{
        type:String,
        required: true
    },
    address:{
        type:String,
        required: true
    },
    token:{
        type:String,
        required: true,
        unique: true
    },
   
},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})
schema.plugin(uniqueValidator);
const user = mongoose.model('users',schema)
module.exports = user