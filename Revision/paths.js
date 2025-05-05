const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/about") {
    //! if the url is /about then return the about page
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;
    res.write("<h1>About Page</h1>");
    return res.end();
    //  process.exit();  stop the server after the first request (not recommended)
  } else if (req.url === "/contact") {
    //! if the url is /contact then return the contact page
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;
    res.write("<h1>Contact Page</h1>");
    return res.end();
  }
  //! if the url is not /about or /contact then return the 404 page
  res.setHeader("Content-Type", "text/html");
  res.statusCode = 404;
  return res.end("No page found");
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
