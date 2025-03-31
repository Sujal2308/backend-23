const express = require("express");

const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

//! Dynamic Routing
app.get("/about/:name", (req, res) => {
  res.render("about", {
    user: req.params.name.toUpperCase(),
    id: Math.floor(Math.random() * 10),
  });
});
app.get("/contact", (req, res) => {
  res.render("contact");
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log("Server is running at port ", PORT);
});
