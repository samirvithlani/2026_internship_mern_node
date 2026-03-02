const mongoose = require("mongoose")
const Schema = mongoose.Schema

const productSchema = new Schema({

    productName:{
        type:String
    },
    productPrice:{
        type:Number
    }
})
module.exports = mongoose.model("products",productSchema)