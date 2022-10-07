//Method names to be used

const Product = require("../models/product.model");

//createHero
module.exports.createProduct = (req, res) => {
    console.log(req.body);
    Product.create(req.body)
        .then((newProduct) => { res.json({ results: newProduct }) })
        .catch((err) => { res.json({ err: err }) })
}
//findAllHeros
module.exports.getAllProducts = (request, response) => {
    console.log(request.body);
    Product.find()
        // make a bucket called products, put the json response holding the 
        //products into the bucket called products
        .then((allProducts) => { response.json({ results: allProducts }) })
        .catch(error => response.json(error))
}

//displayHero
module.exports.getSingleProduct = (request, response) => {
    console.log(request.body);
    Product.findOne({ _id: request.params.id })
        .then(product => response.json({ results: product }))
        .catch(error => response.json(error))
}

//updateHero
module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
        .then(updatedPerson => response.json(updatedPerson))
        .catch(error => response.json(error))
}

//deleteHero
module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id })
        .then((deleteConfirmation) => response.json(deleteConfirmation))
        .catch(error => response.json(error))
}