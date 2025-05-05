const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.url === "/form" && req.method === "GET") {
    //! sending response in chunks /stream to the client
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;
    res.write("<form action = '/submit' method = 'POST'>");
    res.write("<label for = 'name'>Name</label>");
    res.write("<input type = 'text' name = 'username' id = 'name'> </br>");
    res.write("<label for = 'email'>Email</label>");
    res.write("<input type = 'email' name = 'email' id = 'email'> </br>");
    res.write("<input type = 'submit' value = 'Submit'>");
    res.write("</form>");
    return res.end();
  }
  if (req.url === "/submit" && req.method === "POST") {
    // res.setHeader("Content-Type", "text/html");
    // res.statusCode = 200;
    // res.write("<h1>Form submitted successfully</h1>");
    // return res.end();
    fs.writeFileSync("formInfo.text", "form submitted successfully"); //! create a file called formInfo.text and write the data to it once the form is submitted
    res.statusCode = 302;
    res.setHeader("location", "/form");
    return res.end();
  }
});
server.listen(8000, () => {
  console.log("Server is running on port 8000");
});
