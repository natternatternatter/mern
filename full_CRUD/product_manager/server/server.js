//import express
const express = require("express");

//create an instance of express
const app = express();

//select our port
const port = 8000;

//import mongoose
const mongoose = require("mongoose");

//use express and return json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//import cors
const cors = require("cors");
app.use(cors());
//connect to mongoose.config
require("./config/mongoose.config");
//import routes and include (app) for express
const productManagerApp = require("./routes/product.route");
productManagerApp(app);
//listen for connections on specified port
app.listen(port, () => console.log(`listenting on port ${port}`))