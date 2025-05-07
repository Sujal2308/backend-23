const express = require("express");
const app = express(); //! express is a function that returns an object
const port = 3000;

//! GET request
app.get("/", (req, res) => {
  console.log(req.url, req.method);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
