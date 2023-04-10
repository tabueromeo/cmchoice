const express = require("express");

// productRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /product.
const productRoutes = express.Router();
 
// import the product controller
let productControls = require('../controllers/product.controller');
 
// This section will help you get a list of all the products.
productRoutes.route("/product").get(productControls.all);
 
// This section will help you get a single product by id
productRoutes.route("/product/:id").get(productControls.getProduct);
 
// This section will help you update a product by id.
productRoutes.route("/product/update/:id").put(productControls.updateProduct);
 
// This section will help you delete a product
productRoutes.route("/product/delete/:id").delete(productControls.deleteProduct);
 
module.exports = productRoutes;