const express = require("express");

// productRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /product.
const productRoutes = express.Router();
 
// import the product controller
let productControls = require('../controllers/product.controller');

// import the authentification middleware
const authMiddleWare = require('../middleWare/authMiddleWare')
 
// This section will help you get a list of all the products.
productRoutes.route("/api/v1/products").get(productControls.all);

// This section will help you create a categorys.
productRoutes.route("/api/v1/products").post(authMiddleWare, productControls.create)
 
// This section will help you get a single product by id
productRoutes.route("/api/v1/products/:id").get(productControls.getProduct);
 
// This section will help you update a product by id.
productRoutes.route("/api/v1/products/:id").put(authMiddleWare, productControls.updateProduct);
 
// This section will help you delete a product
productRoutes.route("/api/v1/products/:id").delete(authMiddleWare, productControls.deleteProduct);
 
module.exports = productRoutes;