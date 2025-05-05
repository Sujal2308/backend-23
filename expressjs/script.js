const express = require("express");

const app = express();
app.set("view engine", "ejs");

app.use(express.static("./public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ userName: "sujal" });
});

let usersData = [
  { userName: "sujal", age: 20 },
  { username: "anil", age: 60 },
  { userName: "aryan", age: 30 },
];
app.get("/users", (req, res) => {
  res.json(usersData);
});

app.get("/users/:age", (req, res) => {
  let data = usersData.find((e) => e.age == req.params.age);
  if (data) {
    res.json(data);
  } else {
    res.send("no data found");
  }
});

app.post("/new", (req, res) => {
  const newUser = {
    userName: "Aman",
    age: 21,
  };
  usersData.push(newUser);
  res.json(newUser);
});

//! PUT
app.put("/users/:id", (req, res) => {
  const updateUser = usersData.find((user) => user.age == req.params.id);
  if (updateUser) {
    updateUser.userName = req.body.userName || updateUser.userName;
    res.status(200).json({
      message: "User is successfully update with is",
      userName: updateUser.userName,
    });
  } else {
    res.status(404).json({
      message: `User with age ${req.params.id} not found`,
    });
  }
});

//! DELETE
app.delete("/users/age/:id", (req, res) => {
  const findIndexofUser = usersData.findIndex(
    (user) => user.age == req.params.id
  );
  if (findIndexofUser !== -1) {
    const deletedBook = usersData.splice(findIndexofUser, 1);
    res.status(200).json({
      message: `User with age ${req.params.id} deleted successfully`,
      data: deletedBook,
    });
  } else {
    res.status(404).json({
      message: `User with age ${req.params.id} not found`,
    });
  }
});

//! Dynamic Routing
app.get("/about/:name", (req, res) => {
  res.render("about", {
    user: req.params.name.toUpperCase(),
    id: Math.floor(Math.random() * 10),
  });
});
app.get("/contact", (req, res) => {
  res.render("contact");
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log("Server is running at port ", PORT);
});
