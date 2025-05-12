const express = require("express");
const userRouter = require("./routes/user-route");
const adminRouter = require("./routes/admin-route");
const demoRouter = require("./routes/demo");
const path = require("path");
const rootDir = require("./utils/path");
const app = express();
app.set("view engine", "ejs"); //ejs
app.set("views", "views");
const port = 3000;

app.use((req, res, next) => {
  console.log("Middleware1 is called: ", req.url);
  next();
});
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "Home.html"));
});

app.use(express.static(path.join(rootDir, "public")));

app.use("/user", userRouter);
app.use("/admin", adminRouter);

app.use((req, res) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404Page.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
