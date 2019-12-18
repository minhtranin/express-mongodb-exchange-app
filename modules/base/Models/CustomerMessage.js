'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')

const schema = new Schema({
    customer_id:{
        type:Object,
        required: true
    },
    to_customer:{
        type:Object,
        required: true,

    },
    content:{
        type:String,
   
    },
    image:{
        type:String,

    },
    file:{
        type:String,

    },
    location:{
        type:String,
        
    },
},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})
schema.plugin(uniqueValidator);
const CustomerMessage = mongoose.model('customer_messages',schema)
module.exports = CustomerMessage