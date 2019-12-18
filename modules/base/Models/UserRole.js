'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')

const schema = new Schema({
    user_id:{
        type:String,
        required: true
    },
    role_id:{
        type:String,
        required: true,
        unique: true
    }
},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})
schema.plugin(uniqueValidator);
const UserRole = mongoose.model('user_role',schema)
module.exports = UserRole