const express = require("express");
const authRoutes = express.Router();

let AuthControls = require('../controllers/auth.controller');

authRoutes.route("/auth/login").post(AuthControls.login)
authRoutes.route("/auth/register").post(AuthControls.register)
authRoutes.route("/auth").get(AuthControls.refresh)

module.exports = authRoutes;

