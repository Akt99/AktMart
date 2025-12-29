import Product from "../models/product.model.js";
import mongoose from "mongoose";    

export const getProducts= async (req, res) => {
    try{
        const products = await Product.find({});
        res.status(200).json({success:true, data: products});
    }catch(error){
        console.error("Error fetching products:", error.message);
        res.status(500).json({success:false, message: "server error"});
    }
}
export const createProduct = async (req, res) => {
  const { name, price, image } = req.body;

  if (!name || !price || !image) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  if (price <= 0) {
    return res.status(400).json({
      success: false,
      message: "Price must be greater than 0",
    });
  }

  try {
    const product = await Product.create({ name, price, image });
    res.status(201).json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, image } = req.body;

  if (!name || !price || !image) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  if (price <= 0) {
    return res.status(400).json({
      success: false,
      message: "Price must be greater than 0",
    });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, price, image },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      data: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const deleteProduct= async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({success:false, message: "Invalid product ID"});
    }
    try{
         await Product.findByIdAndDelete(id);
            res.status(200).json({success:true, message: "Product deleted successfully"});
    }catch(error){
        console.error("Error deleting product:", error.message);
        res.status(500).json({success:false, message: "Server error"});
    }
}