const express = require("express");
const app = express(); //! express is a function that returns an object
const port = 3000;

//! middleware
//? it is a function that is called before the request is processed
//! order matters : the order in which you define the middlewares are called in same order as they are defined
//* next is a function that is called when the middleware is done processing the request

app.use((req, res, next) => {
  console.log("Middleware1 is called: ", req.url);
  next();
});

app.use((req, res, next) => {
  //! run for all the requests
  console.log("Middleware2 is called: ", req.url);
  res.send("Hello World!");
  next();
});

app.use("/about", function (req, res, next) {
  //! if the url request is not /about then this middleware will not be called
  console.log("About page middleware is called");
  next();
});

//! First GET request
//! Creating routes
app.get("/", (req, res) => {
  console.log(req.url, req.method);
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  console.log(req.url, req.method);
  res.send("<h1>About Page</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
