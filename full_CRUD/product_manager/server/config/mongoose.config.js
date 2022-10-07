//import (require) mongoose
const mongoose = require("mongoose");
//create variable name for database
const database = "product_manager_db";
//connect to mongoose - - - mongoose.connect(``,{})
mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Database connection established: ", database))
    .catch((err) => console.log("Error establishing connection ", err));
