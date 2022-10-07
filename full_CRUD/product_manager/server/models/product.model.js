//import mongoose
const mongoose = require("mongoose");
//create the database table(collection)
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minLength: [3, "Title has minimum length requirement of 3"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [1, "Price must be 1 dollar or more"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minLength: [10, "Description has minimum length requirement of 3"]
    }
})
//Register our new collection(schema)
const Product = mongoose.model("Product", ProductSchema)
//Export to others
module.exports = Product;