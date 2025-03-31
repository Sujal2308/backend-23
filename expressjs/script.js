const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello this is the Home page");
});
app.get("/about", (req, res) => {
  res.send("Hello this is the About page");
});
app.get("/contact", (req, res) => {
  res.send("Hello this is the Contact page");
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log("Server is running at port ", PORT);
});
