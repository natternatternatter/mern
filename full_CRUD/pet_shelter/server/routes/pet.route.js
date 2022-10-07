//import controller
const petController = require("../controllers/pet.controller")
//define routes
module.exports = app => {
    //Create a new hero app.post
    app.post("/api/pet/new", petController.createPet);
    // Display (read) all heros app.get
    app.get("/api/pets", petController.findAllPets);
    //display (read) one hero app.get
    app.get("/api/pet/:id", petController.displayPet);
    //update a hero app.put
    app.put("/api/pet/update/:id", petController.updatePet);
    //delete(destroy) a hero app.delete
    app.delete("/api/pet/delete/:id", petController.deletePet);
}