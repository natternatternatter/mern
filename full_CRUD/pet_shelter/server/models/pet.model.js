//import mongoose
const mongoose = require("mongoose");
//create the database table(collection)
const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minLength: [3, "Name must be at least 3 characters long."],
    },
    type: {
        type: String,
        required: [true, "Rating is required"],
        minLength: [3, "Type must be at least 3 characters long"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minLength: [3, "Description has minimum length requirement of 3"]
    },
    skill1: {
        type: String,
        required: [false]
    },
    skill2: {
        type: String,
        required: [false]
    },
    skill3: {
        type: String,
        required: [false]
    },
    likes: {
        type: Number,
        default: 0
    }
});
//Register our new collection(schema)
const Pet = mongoose.model("Pet", PetSchema);
//Export to others
module.exports = Pet;