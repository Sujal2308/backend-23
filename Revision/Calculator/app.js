const http = require("http");
const calculatorApp = require("./pages");

const server = http.createServer(calculatorApp);

const PORT = 8080;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
