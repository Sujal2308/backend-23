exports.getSellerPage = (req, res) => {
  res.render("sellerpage", { CSS: "/sellerPage.css", title: "sellerPage" });
};

exports.getSellerRegisterPage = (req, res) => {
  res.render("sellerRegisterForm", {
    CSS: "/sellerRegisterPage.css",
    title: "sellerRegisterPage",
  });
};

exports.postSellerLandingPage = (req, res) => {
  res.render("sellerLandingPage", {
    CSS: "/sellerLandingPage.css",
    title: "sellerLandingPage",
    businessName: req.body.businessName,
  });
};
