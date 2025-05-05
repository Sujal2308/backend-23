const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "title can't be empty"],
    maxLength: [100, "book title can't exceed more than 100 characters"],
    trim: true,
  },
  author: {
    type: String,
    required: [true, "author name can't be empty"],
    maxLength: [100, "book title can't exceed more than 100 characters"],
    trim: true,
  },
  year: {
    type: Number,
    required: [true, "year of publication is required"],
    min: [1000, "year must be in 1000's"],
    max: [new Date().getFullYear(), "year can't be in future"],
  },
});

module.exports = mongoose.model("Book", bookSchema);
