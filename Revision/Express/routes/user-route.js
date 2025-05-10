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
userRoute.post("/login/home", (req, res) => {
  //! sending data to /login/home page
  console.log(req.body);
  // res.redirect("/"); //* redirecting to / page
  res.send(`<h1> Hello ${req.body.username.toUpperCase()} </h1>`);
});

module.exports = userRoute;
