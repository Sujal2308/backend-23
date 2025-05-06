const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url.toLowerCase() === "/form" && req.method === "GET") {
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
    let data = [];
    req.on("data", (chunk) => {
      data.push(chunk);
    });
    req.on("end", () => {
      //   const obj = {};
      const fullBody = Buffer.concat(data).toString();
      const formData = new URLSearchParams(fullBody);
      //   for (const [key, value] of formData) {
      //     obj[key] = value;
      //   }
      // const obj = Object.fromEntries(formData);
      console.log(obj);
      fs.writeFileSync("formInfo.text", JSON.stringify(obj));
      res.setHeader("location", "/form");
    });
    res.statusCode = 302;

    return res.end();
  }
});
const PORT = 8000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
