const calculate = (req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;
    res.write("<h1>Welcome to Calculator App</h1>");
    res.write("<a href = '/calculator'>Add</a>");
    return res.end();
  } else if (req.url === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;
    res.write("<form action = '/calculator/result' method = 'POST'>");
    res.write("<label for = 'num1'>Number 1</label>");
    res.write("<input type = 'number' name = 'num1' id = 'num1'> </br>");
    res.write("<label for = 'num2'>Number 2</label>");
    res.write("<input type = 'number' name = 'num2' id = 'num2'> </br>");
    res.write("<input type ='submit' value = 'Submit'>");
    res.write("</form>");
    return res.end();
  } else if (req.url === "/calculator/result" && req.method === "POST") {
    let data = [];
    req.on("data", (chunk) => {
      data.push(chunk);
    });
    req.on("end", () => {
      const result = Buffer.concat(data).toString();
      const params = new URLSearchParams(result);
      const obj = Object.fromEntries(params);
      //! Its a json object so we need to parse it to get the values
      const sum = +obj.num1 + +obj.num2;
      //   const sum = parseInt(obj.num1) + parseInt(obj.num2);
      return res.end(`<h1>Result is ${sum}</h1>`);
    });
  } else {
    res.statusCode = 404;
    return res.end("No page found");
  }
};
module.exports = calculate;
