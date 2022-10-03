//import mongoose
const mongoose = require("mongoose");
//create the database table(collection)
const HeroSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minLength: [2, "Name must be 2 characters long."],
    },
    rating: {
        type: Number,
        required: [true, "Rating is required"],
        min: [1, "Pick a number from 1-10"],
        max: [10, "Pick a number from 1-10"]
    },
    img: {
        type: String,
        required: [true, "Image URL is required"]
    }
});
//Register our new collection(schema)
const Hero = mongoose.model("Hero", HeroSchema);
//Export to others
module.exports = Hero;