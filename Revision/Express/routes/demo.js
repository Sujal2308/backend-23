const rootDir = require("../utils/path");
const path = require("path");
const demoRoute = require("express").Router();

demoRoute.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "demo.html"));
});

demoRoute.post("/users", (req, res) => {
  res.render("demo", { userName: req.body.user, gender: req.body.gender });
});

module.exports = demoRoute;
