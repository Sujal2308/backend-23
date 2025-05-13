const express = require("express");
const BuyerRouter = express.Router();
//! importing the local module
const BuyerController = require("../controllers/buyerController");

BuyerRouter.get("/", BuyerController.getBuyerPage);

BuyerRouter.get("/register", BuyerController.getBuyerRegistrationPage);

BuyerRouter.post("/landingpage", BuyerController.postBuyerRegistrationPage);

module.exports = BuyerRouter;
