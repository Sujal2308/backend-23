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

const users = []; // declaring an array in global scope to store the users otherwise it will be empty after each request
userRoute.post("/login/home", (req, res) => {
  //! sending data to /login/home page
  const { username, gender, image } = req.body;

  if (!users.some((user) => user.username === req.body.username)) {
    users.push({ username, gender, image });
  }

  // res.redirect("/"); //* redirecting to / page
  // res.send(`<h1> Hello ${req.body.username.toUpperCase()} </h1>`);
  res.render("LoginUsers", { userData: users });
});

module.exports = userRoute;
