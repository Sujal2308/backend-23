const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const urlContent = url.parse(req.url, true); //! true is used to parse the query string
  console.log(urlContent); //* get the url object
  console.log(urlContent.pathname); //* Extracting the pathname from the url object
  res.setHeader("Content-Type", "text/html"); //! set the content type of the response
  res.statusCode = 200; //! set the status code of the response
  res.write("<h1>Hello World</h1>"); //! write the response
  res.end(); //! end the response
  process.exit(); //! stop the server after the first request
});

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
