const express = require("express");
const router = express.Router();
const {
  getAllBooks,
  getAllBooksById,
  addNewBook,
  updateById,
  deleteBook,
} = require("../controllers/book-controller");


router.get("/get", getAllBooks);
router.get("/get/:id", getAllBooksById);
router.post("/add", addNewBook);
router.put("/update/:id", updateById);
router.delete("/delete/:id", deleteBook);

module.exports = router;
