//! exporting the homeController
//! it will render the homePage.ejs
exports.getHomePage = (req, res) => {
  res.render("homePage", { CSS: "/homePage.css", title: "Home" });
};
