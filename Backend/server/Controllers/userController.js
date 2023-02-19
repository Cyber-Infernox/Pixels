const User = require("../Models/dbUser");

// Login user
const loginUser = async (req, res) => {
  res.json({ mssg: "Login user" });
};

// Signup user
const signupUser = async (req, res) => {
  res.json({ mssg: "Signup user" });
};

module.exports = { signupUser, loginUser };
