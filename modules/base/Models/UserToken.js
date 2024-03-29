'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')

const schema = new Schema({
    user_id:{
        type:Object,
        required: true
    },
    access_token:{
        type:String,
        required: true,

    },
    expired_at:{
        type:Date,
   
    }
},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})
schema.plugin(uniqueValidator);
const UserToken = mongoose.model('user_tokens',schema)
module.exports = UserToken