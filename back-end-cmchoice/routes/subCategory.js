const express = require("express");

// subCategoryRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /subCategory.
const subCategoryRoutes = express.Router();
 
// import the subCategory controller
let SubCategoryControls = require('../controllers/subCategory.controller');

// import the authentification middleware
const authMiddleWare = require('../middleWare/authMiddleWare')
 
// This section will help you get a list of all the subCategorys.
subCategoryRoutes.route("/subCategory").get(SubCategoryControls.all);

// This section will help you create a subCategorys.
subCategoryRoutes.route("/subCategory/create").post(authMiddleWare, SubCategoryControls.createSubCategory);
 
// This section will help you get a single subCategory by id
subCategoryRoutes.route("/subCategory/:id").get(SubCategoryControls.getSubCategory);
 
// This section will help you update a subCategory by id.
subCategoryRoutes.route("/subCategory/update/:id").put(authMiddleWare, SubCategoryControls.updateSubCategory);
 
// This section will help you delete a subCategory
subCategoryRoutes.route("/subCategory/delete/:id").delete(authMiddleWare, SubCategoryControls.deleteSubCategory);
 
module.exports = subCategoryRoutes;