'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')

const schema = new Schema({
    customer_id:{
        type:Object,
        required: true
    },
    country:{
        type:String,


    },
    image:{
        type:String,
   
    },
    province:{
        type:String,

    },
    address:{
        type:String,

    },
    wishlist:{
        type:String,
        
    },
    rate:{
        type:Number,
        min:0,
        max:5
    },
    two_factor_auth:{
        type:Number,
        default:2
    },
},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})
schema.plugin(uniqueValidator);
const CustomerMessage = mongoose.model('customer_messages',schema)
module.exports = CustomerMessage