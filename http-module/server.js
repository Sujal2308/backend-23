// Importing the 'http' module to create an HTTP server
const http = require("http");

// Creating an HTTP server that listens for requests
const server = http.createServer((req, res) => {
  // Checking if the request URL is the root path
  if (req.url === "/") {
    // Setting the response header to indicate HTML content
    res.setHeader("Content-Type", "text/html");
    // Writing the Home Page content to the response
    res.write("<h1> This is the Home Page </h1>");
    res.end(); // Ending the response
  }
  // Checking if the request URL is for the About page
  else if (req.url === "/about") {
    // Setting the response header to indicate plain text content
    res.setHeader("Content-Type", "text/plain");
    // Writing the About Page content to the response
    res.write("Hi this is the About Page");
    res.end(); // Ending the response
  }
  // Handling requests to undefined routes
  else {
    // Writing a 404 error message for unknown routes
    res.write("404, No page found");
    res.end(); // Ending the response
  }
});

// Defining the port number for the server to listen on
const PORT = 8080;
// Starting the server and logging a message to the console
server.listen(PORT, () => {
  console.log("server is running on port ", PORT);
});
