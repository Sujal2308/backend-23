const express = require("express");
const userForm = require("./forms");
const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log("Middleware1 is called: ", req.url);
  next();
});

// Remove or modify this middleware as it's blocking all routes
// app.use((req, res, next) => {
//   console.log("Middleware2 is called: ", req.url);
//   res.send("Hello World!");  // This is blocking all routes
//   next();
// });

app.use("/about", function (req, res, next) {
  console.log("About page middleware is called");
  next();
});

app.get("/", (req, res) => {
  console.log(req.url, req.method);
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  console.log(req.url, req.method);
  res.send("<h1>About Page</h1>");
});

app.get("/contact", userForm);

// Parse incoming request bodies in a middleware before your route handlers, available under the req.body property.
app.use(express.urlencoded({ extended: false }));
app.post("/contact", (req, res) => {
  console.log(req.body);
  console.log(req.body.username);
  res.send("Contact Page");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
