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
  console.log("Middleware2 is called: ", req.url);
  next();
});

//! First GET request
app.get("/", (req, res) => {
  console.log(req.url, req.method);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
