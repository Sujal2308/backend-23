const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="/result" method="POST">
        <label for="Number1">Number1 :</label>
        <input type="number" id="Number1" name="input1" required>
        <label for="Number2">Number2 :</label>
        <input type="number" id="Number2" name="input2" required>
        <input type="submit" value="Sum">
    </form>
</body>
</html>`);
  }

  res.end();
});
const port = 8080;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

