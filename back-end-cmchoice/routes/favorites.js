const express = require("express");

// favoriteRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /favorite.
const favoriteRoutes = express.Router();
 
// import the favorite controller
let favoriteControls = require('../controllers/favorite.controller');

// import the authentification middleware
const authMiddleWare = require('../middleWare/authMiddleWare')

// use authMiddleWare for all commandRoutes
// favoriteRoutes.use(authMiddleWare)
 
// This section will help you get a list of all the favorites.
favoriteRoutes.route("/api/v1/favorites").get(authMiddleWare, favoriteControls.all);

// This section will help you create a favorites.
favoriteRoutes.route("/api/v1/favorites").post(authMiddleWare, favoriteControls.createFavoriteList);
 
// This section will help you get a single favorite by id
favoriteRoutes.route("/api/v1/favorites/:id").get(authMiddleWare, favoriteControls.getFavoriteList);
 
// This section will help you update a favorite by id.
favoriteRoutes.route("/api/v1/favorites/:id").put(authMiddleWare, favoriteControls.updateFavoriteList);
 
// This section will help you delete a favorite
favoriteRoutes.route("/api/v1/favorites/:id").delete(authMiddleWare, favoriteControls.deleteFavoriteList);
 
module.exports = favoriteRoutes;