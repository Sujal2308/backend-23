const express = require("express");
const BuyerRouter = express.Router();
const BuyerController = require("../controllers/buyerController");

BuyerRouter.get("/", BuyerController.getBuyerPage);

BuyerRouter.get("/register", BuyerController.getBuyerRegistrationPage);

BuyerRouter.post("/register", BuyerController.postBuyerRegistrationPage);

module.exports = BuyerRouter;
