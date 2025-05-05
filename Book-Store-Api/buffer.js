const http = require("http");
const server = http.createServer((req, res) => {
  let data = [];
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(
    ` <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="/members" method="POST">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <input type="submit" value="Submit">
    </form>
</body>
</html>`
  );
  req.on("data", (chunk) => {
    // let formData = chunk.toString(); // this will give us the data in string format same as buffer did
    data.push(chunk);
    console.log("Received data:", chunk);
  });
  req.on("end", () => {
    const formData = Buffer.concat(data).toString();
    console.log("Form data:", formData);
  });
  return res.end();
});

const port = 8080;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
