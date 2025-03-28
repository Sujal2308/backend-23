// Importing the 'path' module to work with file and directory paths
const path = require("path");
// Importing the 'fs' module to work with the file system
let fs = require("fs");

// Getting the directory name of the current file
const folder = path.dirname(__filename);
// Defining the path for the demo.txt file
const file = path.join(folder, "demo.txt");
// Defining the path for a new folder named 'demo'
const newFolder = path.join(folder, "demo");

// Checking if the demo.txt file does not exist
if (!fs.existsSync(file)) {
  // Creating demo.txt file with initial content if it doesn't exist
  fs.writeFileSync(file, "hello world");
}

// Checking if the 'demo' folder does not exist
if (!fs.existsSync(newFolder)) {
  // Creating the 'demo' folder if it doesn't exist
  fs.mkdirSync(newFolder);
}

// Reading the content of demo.txt file synchronously
const readContent = fs.readFileSync(file, "utf8");

// Appending a new line to the demo.txt file
fs.appendFileSync(file, "\n This is sujal bhugul");

// Defining the path for an asynchronous file named 'asyncFile.txt'
const asyncFile = path.join(folder, "asyncFile.txt");
// Writing to asyncFile asynchronously
fs.writeFile(asyncFile, "Hello from async file", (err) => {
  if (err) throw err; // Throwing an error if the file creation fails
  console.log("file is created"); // Logging success message
});

// Reading the content of asyncFile asynchronously
fs.readFile(asyncFile, "utf8", (err, data) => {
  if (err) throw err; // Throwing an error if reading fails
  console.log("The content is: ", data); // Logging the content of asyncFile
});

// Appending a new line to asyncFile asynchronously
fs.appendFile(asyncFile, "\nNew Line is created", (err) => {
  if (err) throw err; // Throwing an error if appending fails
  // Reading the updated content of asyncFile asynchronously
  fs.readFile(asyncFile, "utf8", (err, updatedContent) => {
    if (err) throw err; // Throwing an error if reading fails
    console.log("updated content: ", updatedContent); // Logging the updated content
  });
});
