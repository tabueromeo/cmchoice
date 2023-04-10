const express = require("express");

// shoppingCartRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /shoppingCart.
const shoppingCartRoutes = express.Router();
 
// import the shoppingCart controller
let shoppingCartControls = require('../controllers/shoppingCart.controller');
 
// This section will help you get a list of all the shoppingCarts.
shoppingCartRoutes.route("/shoppingCart").get(shoppingCartControls.all);

// This section will help you create a shoppingCarts.
shoppingCartRoutes.route("/shoppingcart/create").post(shoppingCartControls.createCart);
 
// This section will help you get a single shoppingCart by id
shoppingCartRoutes.route("/shoppingCart/:id").get(shoppingCartControls.getShoppingCart);
 
// This section will help you update a shoppingCart by id.
// shoppingCartRoutes.route("/shoppingCart/update/:id").put(shoppingCartControls.updateShoppingCart);
 
// This section will help you delete a shoppingCart
// shoppingCartRoutes.route("/shoppingCart/delete/:id").delete(shoppingCartControls.deleteShoppingCart);
 
module.exports = shoppingCartRoutes;