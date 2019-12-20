'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')

const schema = new Schema({
    name:{
        type:String,

    },
    description:{
        type:String,


    },
    display_name:{
        type:String,
   
    }
},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})
schema.plugin(uniqueValidator);
const Role = mongoose.model('roles',schema)
module.exports = Role