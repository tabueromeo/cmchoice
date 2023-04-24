const express = require("express");

// userRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /user.
const userRoutes = express.Router();
 
// import the user controller
let UserControls = require('../controllers/user.controller');

// import the authentification middleware
const authMiddleWare = require('../middleWare/authMiddleWare')
 
// This section will help you get a list of all the users.
userRoutes.route("/users").get(authMiddleWare, UserControls.all);
 
// This section will help you get a single user by id
userRoutes.route("/user/:id").get(UserControls.getUser);
 
// This section will help you update a user by id.
userRoutes.route("/user/update/:id").put(authMiddleWare, UserControls.updateUser);
 
// This section will help you delete a user
userRoutes.route("/user/delete/:id").delete(authMiddleWare, UserControls.deleteUser);
 
module.exports = userRoutes;