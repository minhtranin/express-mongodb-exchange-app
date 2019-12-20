'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')

const schema = new Schema({
    name:{
        type:String,
        required: true,

    },
    display_name:{
        type:String,
   
    },
    description:{
        type:String,
   
    }
},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})
schema.plugin(uniqueValidator)
const PermissionGroup = mongoose.model('permission_groups',schema)
module.exports = PermissionGroup