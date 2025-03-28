let modulefnc = require("./module1.js");
console.log(modulefnc.add(1, 2));
try {
  console.log(modulefnc.div(10, 0));
} catch (e) {
  console.log(e.message);
}


//! default parameters of the module wrapper function
// console.log("file name ",__filename)
// console.log("directory name ",__dirname)