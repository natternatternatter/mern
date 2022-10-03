//import controller
const heroController = require("../controllers/hero.controller")
//define routes
module.exports = app => {
    //Create a new hero app.post
    app.post("/api/hero/new", heroController.createHero);
    //Display (read) all heros app.get
    app.get("/api/heros", heroController.findAllHeros);
    //display (read) one hero app.get
    app.get("/api/hero/:id", heroController.displayHero);
    //update a hero app.put
    app.put("/api/hero/update/:id", heroController.updateHero);
    //delete(destroy) a hero app.delete
    app.delete("/api/hero/delete/:id", heroController.deleteHero);
}

