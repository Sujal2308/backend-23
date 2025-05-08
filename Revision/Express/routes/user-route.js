const express = require("express");
const userRoute = express.Router(); //* this is the router object
const path = require("path");

userRoute.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/UserPage.html"));
});
userRoute.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/UserLogin.html"));
});

module.exports = userRoute;
