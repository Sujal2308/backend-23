const express = require("express");
const adminRoute = express.Router();
const path = require("path");

// Middleware for admin rout  es

adminRoute.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "AdminPage.html"));
});
adminRoute.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "AdminLogin.html"));
});

module.exports = adminRoute;
