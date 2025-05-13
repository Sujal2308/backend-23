const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;
const rootDir = require("./utils/path");
const homeController = require("./controllers/homeController");
const buyerRouter = require("./routes/buyerRoute");
const sellerRouter = require("./routes/sellerRoute");
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(rootDir, "public")));

//! home page
app.get("/", homeController.getHomePage);

app.use(express.urlencoded({ extended: true }));
app.use("/buyer", buyerRouter);
app.use("/seller", sellerRouter);

//!404 page
app.use((req, res) => {
  res.status(404).render("404Page", { CSS: "/404Page.css", title: "404 Page" });
});

//! listening to the port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
