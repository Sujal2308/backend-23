const express = require("express");
const sellerRouter = express.Router();
const sellerController = require("../controllers/sellerController");

sellerRouter.get("/", sellerController.getSellerPage);

sellerRouter.get("/register", sellerController.getSellerRegisterPage);

sellerRouter.post("/landingpage", sellerController.postSellerLandingPage);

module.exports = sellerRouter;
