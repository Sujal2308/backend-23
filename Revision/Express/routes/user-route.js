const express = require("express");
const userRoute = express.Router(); //* this is the router object

userRoute.get("/", (req, res) => {
  res.send(`<h1>User Page</h1> </br>
    <a href="/user/login">Login</a>`);
});
userRoute.get("/login", (req, res) => {
  res.send("<h1>User Login Page</h1>");
});

module.exports = userRoute;
