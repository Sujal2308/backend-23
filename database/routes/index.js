var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/",(req,res)=>{
  res.render("index")
})
router.get("/contacts",(req,res)=>{
  res.send("<h1>hello contacts</h1>")
})



module.exports = router;
