const mongoose = require("mongoose")
const Schema = mongoose.Schema

const productSchema = new Schema({

    productName:{
        type:String
    },
    productPrice:{
        type:Number
    },
    productColors:[{
        type:String
    }],
    productSize:{
        enum:["S","M","XL","L"],
        type:String
    }
})
module.exports = mongoose.model("products",productSchema)