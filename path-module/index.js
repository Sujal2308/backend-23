// Importing the 'path' module to work with file and directory paths
const path = require("path");

// Logging the absolute directory name of the current file
console.log("Directory Name (Absolute path) ", path.dirname(__filename));

// Logging the base name (file name) of the current file
console.log("File Name ", path.basename(__filename));

// Logging the file extension of the current file
console.log("Extension: ", path.extname(__filename));

// Joining a series of path segments into a single path
console.log("Joined Path: ", path.join("/user/project1/path-module"));

// Resolving a given path to an absolute path
console.log("Resolved path: ", path.resolve("/users/project2/node-project")); //! provides absolute path

