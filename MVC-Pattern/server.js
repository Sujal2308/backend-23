const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;
const rootDir = require("./utils/path");
const homeController = require("./controllers/homeController");
const buyerRouter = require("./routes/buyerRoute");
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(rootDir, "public")));

app.get("/", homeController.getHomePage);

app.use(express.urlencoded({ extended: true }));
app.use("/buyer", buyerRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
