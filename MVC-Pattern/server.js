const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;
const fs = require("fs");
const rootDir = require("./utils/path");
const { title } = require("process");
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(rootDir, "public")));

//! get request
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "form.html"));
});

const USERS = [];
//! post request
app.post("/user", (req, res) => {
  //   fs.writeFile(
  //     path.join(__dirname, "users.json"),
  //     JSON.stringify(req.body),
  //     (err) => {
  //       if (err) throw err;
  //       console.log("Data written to file");
  //     }
  //   );

  const userName = req.body.name.toLowerCase();
  if (!USERS.some((users) => users.name.toLowerCase() === userName)) {
    USERS.push(req.body);
  }
  res.render("user", { userData: USERS, title: "Users" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
