const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("database connected successfully");
  } catch (e) {
    console.log("connection failed", e);
    process.exit(1);
  }
};

module.exports = dbConnection;
