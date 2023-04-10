const express = require("express");

// categoryRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /category.
const categoryRoutes = express.Router();
 
// import the category controller
let CategoryControls = require('../controllers/category.controller');
 
// This section will help you get a list of all the categorys.
categoryRoutes.route("/category").get(CategoryControls.all);

// This section will help you create a categorys.
categoryRoutes.route("/category/create").post(CategoryControls.createCategory);
 
// This section will help you get a single category by id
categoryRoutes.route("/category/:id").get(CategoryControls.getCategory);
 
// This section will help you update a category by id.
categoryRoutes.route("/category/update/:id").put(CategoryControls.updateCategory);
 
// This section will help you delete a category
categoryRoutes.route("/category/delete/:id").delete(CategoryControls.deleteCategory);
 
module.exports = categoryRoutes;