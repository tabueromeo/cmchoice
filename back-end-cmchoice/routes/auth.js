const express = require("express");
const authRoutes = express.Router();

let AuthControls = require('../controllers/auth.controller');

authRoutes.route("/api/v1/auth/login").post(AuthControls.login)
authRoutes.route("/api/v1/auth/register").post(AuthControls.register)
authRoutes.route("/api/v1/auth").get(AuthControls.refresh)

module.exports = authRoutes;

