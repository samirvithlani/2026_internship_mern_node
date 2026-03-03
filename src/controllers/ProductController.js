//db model
const productSchema = require("../models/ProductModel");

//api
const getAllProducts = async (req, res) => {
  //db query
  const allProducts = await productSchema.find();
  res.json({
    message: "all products",
    data: allProducts,
  });
};
const getProductById = async (req, res) => {
  //req.params.id
  //const foundProduct = await productSchema.find({_id:req.params.id}) //[]
  const foundProduct = await productSchema.findById(req.params.id); //{}
  if (foundProduct) {
    res.json({
      message: "product found",
      data: foundProduct,
    });
  } else {
    res.json({
      message: "product not found",
    });
  }
};

const addProduct = async (req, res) => {
  //console.log("body...",req.body)
  const savedProduct = await productSchema.create(req.body);
  res.status(201).json({
    message: "product saved",
    data: savedProduct,
  });
};

const deleteProduct = async (req, res) => {
  //delete from products where id = ?
  //db.products.removeOne({_id:?})
  //productSchema.removeOne({_id:req.params.id})
  //productSchema.findByIdAndDelete(req.params.id)

  const deletedProductObj = await productSchema.findByIdAndDelete(
    req.params.id,
  );
  if (deletedProductObj) {
    res.status(200).json({
      message: "product deleted",
      data: deletedProductObj,
    });
  } else {
    res.status(200).json({
      message: "product not found to delete",
    });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  deleteProduct,
};
