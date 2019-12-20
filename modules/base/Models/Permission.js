'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')

const schema = new Schema({
    permission_group_id:{
        type:Object,
        required: true,

    },
    name:{
        type:String,


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
const Permission = mongoose.model('permissions',schema)
module.exports = Permission