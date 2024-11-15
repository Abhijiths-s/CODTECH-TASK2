const express = require("express");
const authController = require("../controllers/authController");
const authMiddleware=require("../middleware/authMiddleware");

const router = express.Router();

// Registration route
router.post("/register", authController.register);

// Login route
router.post("/login", authController.login);

module.exports = router;
