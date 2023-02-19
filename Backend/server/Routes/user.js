const express = require("express");

const router = express.Router();

// Controller function
const { signupUser, loginUser } = require("../Controllers/userController");

// Login route
router.post("/login", loginUser);

// Signup route
router.post("/signup", signupUser);

module.exports = router;
