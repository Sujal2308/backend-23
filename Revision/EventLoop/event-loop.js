const http = require("http");
const calculator = require("./pages");
const server = http.createServer(calculator);

const PORT = 8080;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
