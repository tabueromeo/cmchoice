const express = require("express");

// commandRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /command.
const commandRoutes = express.Router();
 
// import the command controller
let commandControls = require('../controllers/command.controller');

// import the authentification middleware
const authMiddleWare = require('../middleWare/authMiddleWare')

// use authMiddleWare for all commandRoutes
// commandRoutes.use(authMiddleWare)

// This section will help you create a categorys.
commandRoutes.route("/api/v1/commands").post(authMiddleWare, commandControls.createCommand);
 
// This section will help you get a list of all the commands.
commandRoutes.route("/api/v1/commands").get(authMiddleWare, commandControls.all);
 
// This section will help you get a single command by id
commandRoutes.route("/api/v1/commands/:id").get(authMiddleWare, commandControls.getCommand);
 
// This section will help you update a command by id.
commandRoutes.route("/api/v1/commands/:id").put(authMiddleWare, commandControls.updateCommand);
 
// This section will help you delete a command
commandRoutes.route("/api/v1/commands/:id").delete(authMiddleWare, commandControls.deleteCommand);
 
module.exports = commandRoutes;