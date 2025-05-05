//* importing the http module via require()
const http = require("http");
//? Now All the helper methods and properties of the http module are available in the http variable.
const server = http.createServer((req, res) => {
  // ? req is the incoming request object
  // ? res is the outgoing response object
  console.log(req.url); //! to get the url of the request
  console.log(req.method); //! to get the method of the request GET,POST,PUT,DELETE
  process.exit(); //? to stop the server after the first request
});

const PORT = 8080;
//? Now the server is listening on port 3000
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
