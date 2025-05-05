var express = require("express");
var router = express.Router();
let mongoose = require("mongoose");

// the below code returns a promise
mongoose
  .connect(
    "mongodb+srv://sujalbhugul85:1111wwww@cluster0.8qfs84o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("database connected successfully"))
  .catch((e) => console.log(e));

//! the mongoose code is asynchronous in nature so use async await

const userSchema = new mongoose.Schema({
  userName: String,
  contact: Number,
  DOB: Date,
  marriedStatus: Boolean,
  Skills: [String],
});

const user = mongoose.model("usermodel", userSchema);

async function runQueryExample() {
  try {
    // const newUser = await user.create({
    //   userName: "Sujal Bhugul",
    //   contact: 9322733771,
    //   DOB: "08/23/2004",
    //   marriedStatus: true,
    //   Skills: ["coding", "badminton", "travelling"],
    // });

    // const newUser2 = new user({
    //   userName: "Anil Bhugul",
    //   contact: 9975111200,
    //   DOB: "08/23/1990",
    //   marriedStatus: true,
    //   Skills: ["coding", "reading", "travelling"],
    // });
    // await newUser2.save();
    // console.log("new user created", newUser2);

    // const getallUsers = await user.find({})
    // console.log(getallUsers)

    // const getUsers = await user.find({userName : "Anil Bhugul"})
    // console.log(getUsers)

    // const getSingleUser = await user.findOne({marriedStatus : true})
    // console.log(getSingleUser)

    // const selectedFields = await user.find().select('userName DOB') //! includes id
    //const selectedFields = await user.find().select('userName DOB -_id') //!remove id
    // console.log(selectedFields)

    // const countUser = await user.countDocuments({marriedStatus : true});
    // console.log("Married users are: ",countUser);

    // const skipUsers = await user.find().skip(1); //!skip one user 
    // console.log(skipUsers)

    const deletedUser = await user.findByIdAndDelete('67f80c6bb751a1f0fecc4206')
    console.log(deletedUser)

    console.log(await user.find({}))

  } catch (e) {
    console.log("error", e);
  } finally {
    await mongoose.connection.close();
  }
}

runQueryExample();
  // const selectedFields = await user.find().select('userName DOB') 
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
