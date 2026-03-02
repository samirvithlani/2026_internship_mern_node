//db model
const productSchema = require("../models/ProductModel")

//api
const getAllProducts = async(req,res)=>{

    //db query
    const allProducts = await productSchema.find()
    res.json({
        message:"all products",
        data:allProducts
    })

}
module.exports = {
    getAllProducts
}