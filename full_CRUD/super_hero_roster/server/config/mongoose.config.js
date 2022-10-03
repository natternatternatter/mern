//import (require) mongoose
const mongoose = require("mongoose");
//create variable name for database
const database = "superheros2022"
//connect to mongoose - - - mongoose.connect(``,{})
mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`database connection established: ${database}`))
    .catch((err) => console.log("Error establishing connection: ", err));