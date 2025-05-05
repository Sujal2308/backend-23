require("dotenv").config();
const express = require("express");
const dbConnection = require("./database/db");
const bookRoutes = require("./routes/book-routes");

const app = express();
const PORT = process.env.PORT || 8085;

// database connection
dbConnection();

// middleware
app.use(express.json());

//routes here
app.use("/api/books", bookRoutes);

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(PORT, () => {
  console.log("Server is running on", PORT);
});
