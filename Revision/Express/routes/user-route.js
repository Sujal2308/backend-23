const express = require("express");
const userRoute = express.Router(); //* this is the router object
const path = require("path");
const rootDir = require("../utils/path");

userRoute.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "UserPage.html"));
});
userRoute.get("/login", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "UserLogin.html"));
});

module.exports = userRoute;
