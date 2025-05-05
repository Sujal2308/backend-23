const Books = require("../models/books");

const getAllBooks = async (req, res) => {
  try {
    const getAllBooks = await Books.find();
    res.status(200).json({
      success: true,
      message: "All Books are fetched successfully",
      data: getAllBooks,
    });
  } catch (e) {
    console.log(e);
  }
};
const getAllBooksById = async (req, res) => {
  try {
    const bookId = req.params.id;
    const findBookById = await Books.findById(bookId);
    if (!findBookById) {
      res.status(404).json({
        success: false,
        message: "Book is not found",
      });
    }
    res.status(208).json({
      success: true,
      message: "Book is found",
      data: findBookById,
    });
  } catch (e) {
    console.log(e);
  }
};

const addNewBook = async (req, res) => {
  try {
    const newBookData = req.body;
    const newBookAdded = await Books.create(newBookData);
    if (newBookAdded) {
      res.status(201).json({
        success: true,
        message: "New Book is added successfully",
        data: newBookAdded,
      });
    }
  } catch (e) {
    console.log(e);
  }
};

const updateById = async (req, res) => {
  const data = req.body;
  const bookId = req.params.id;
  const updateBookById = await Books.findByIdAndUpdate(bookId, data, {
    new: true,
  });
  if (!updateBookById) {
    res.status(404).json({
      success: false,
      message: "Book is not found",
    });
  }
  res.status(200).json({
    success: true,
    message: "Book is updated successfully",
    data: updateBookById,
  });
};

const deleteBook = async (req, res) => {
  const bookId = req.params.id;
  const deleteBookById = await Books.findByIdAndDelete(bookId);
  if (!deleteBookById) {
    res.status(404).json({
      success: false,
      message: "Book is not found",
    });
  }
  res.status(200).json({
    success: true,
    message: "Book is deleted successfully",
    data: deleteBookById,
  });
};

module.exports = {
  getAllBooks,
  getAllBooksById,
  addNewBook,
  updateById,
  deleteBook,
};
