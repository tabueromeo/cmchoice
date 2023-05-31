const express = require("express");

// shoppingCartRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /shoppingCart.
const shoppingCartRoutes = express.Router();
 
// import the shoppingCart controller
let shoppingCartControls = require('../controllers/shoppingCart.controller');

// import the authentification middleware
const authMiddleWare = require('../middleWare/authMiddleWare')
 
// This section will help you get a list of all the shoppingCarts.
shoppingCartRoutes.route("/api/v1/shoppingcarts").get(authMiddleWare, shoppingCartControls.all);

// This section will help you create a shoppingCarts.
shoppingCartRoutes.route("/api/v1/shoppingcarts").post(authMiddleWare, shoppingCartControls.createCart);
 
// This section will help you get a single shoppingCart by id
shoppingCartRoutes.route("/api/v1/shoppingcarts/:id").get(authMiddleWare, shoppingCartControls.getShoppingCart);
 
// This section will help you update a shoppingCart by id.
shoppingCartRoutes.route("/api/v1/shoppingcarts/:id").put(authMiddleWare, shoppingCartControls.updateShoppingCart);
 
// This section will help you delete a shoppingCart
shoppingCartRoutes.route("/api/v1/shoppingcarts/:id").delete(authMiddleWare, shoppingCartControls.deleteShoppingCart);
 
module.exports = shoppingCartRoutes;