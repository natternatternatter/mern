//import controller
const productController = require("../controllers/product.controller.js")
//define routes
module.exports = app => {
	//Create a new hero app.post
	app.post("/api/product/new", productController.createProduct);

	//Display (read) all heros app.get
	app.get("/api/products", productController.getAllProducts);
	//display (read) one hero app.get
	app.get("/api/product/:id", productController.getSingleProduct)
	//update a hero app.put
	app.put("/api/product/update/:id", productController.updateProduct)
	//delete(destroy) a hero app.delete
	app.delete("/api/product/delete/:id", productController.deleteProduct)
}