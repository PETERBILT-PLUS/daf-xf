import mongoose from "mongoose";

const ProductItem = new mongoose.Schema({
    name: String,
    url: String
});

const Product = mongoose.model("Product", ProductItem);
export default Product;