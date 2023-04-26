const express = require("express");

// categoryRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /category.
const categoryRoutes = express.Router();

// import the authentification middleware
const authMiddleWare = require('../middleWare/authMiddleWare')
 
// import the category controller
let CategoryControls = require('../controllers/category.controller');
 
// This section will help you get a list of all the categorys.
categoryRoutes.route("/api/v1/categories").get(CategoryControls.all);

// This section will help you create a categorys.
categoryRoutes.route("/api/v1/categories").post(authMiddleWare, CategoryControls.createCategory);
 
// This section will help you get a single category by id
categoryRoutes.route("/api/v1/categories/:id").get(CategoryControls.getCategory);
 
// This section will help you update a category by id.
categoryRoutes.route("/api/v1/categories/:id").put(authMiddleWare, CategoryControls.updateCategory);
 
// This section will help you delete a category
categoryRoutes.route("/api/v1/categories/:id").delete(authMiddleWare, CategoryControls.deleteCategory);
 
module.exports = categoryRoutes;