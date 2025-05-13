const { name } = require("ejs");

exports.getBuyerPage = (req, res) => {
  res.render("buyerPage", { CSS: "/buyerPage.css", title: "Buyer" });
};

exports.getBuyerRegistrationPage = (req, res) => {
  res.render("buyerRegisterForm", {
    CSS: "/buyerRegistrationForm.css",
    title: "Buyer Registration",
  });
};

exports.postBuyerRegistrationPage = (req, res) => {
  res.render("buyerLandingPage", {
    user: req.body.name,
    CSS: "/buyerLandingPage.css",
    title: "Buyer Landing Page",
  });
};
