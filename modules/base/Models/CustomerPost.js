'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')

const schema = new Schema({
    customer_id:{
        type:Object,
        required: true
    },
    images:{
        type:String,
        required: true,

    },
    title:{
        type:String,
        required: true,
    },
    description:{
        type:String
    },
    price:{
        type:String,
        required: true,
    },
    category_id:{
        type:Object,
        required: true,
    },
    feature_id:{
        type:Object,
        
    },
    condition_id:{
        type:Object,
        
    },
    exchange:{
        type:Number,
        default:2
    },
    location:{
        type:Object,
        required: true,
    },
    facebook:{
        type:Number,
        default:2
    },
    type_post:{
        type:Number,
        default:2
    },
    sort:{
        type:Number,
        
    }
},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})
schema.plugin(uniqueValidator);
const CustomerPost = mongoose.model('customer_messages',schema)
module.exports = CustomerPost