const express = require("express");
const adminRoute = express.Router();
const path = require("path");
const rootDir = require("../utils/path");

// Middleware for admin rout  es

adminRoute.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "AdminPage.html"));
});
adminRoute.get("/login", (req, res) => {
  // res.sendFile(path.join(__dirname, "../", "views", "AdminLogin.html"));
  res.sendFile(path.join(rootDir, "views", "AdminLogin.html"));
});

module.exports = adminRoute;
