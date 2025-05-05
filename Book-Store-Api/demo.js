const http = require("http");

const app = http.createServer((req, res) => {
  console.log(req.headers);
  //   if (req.url === "/") {
  //     res.setHeader("Content-Type", "text/html");
  //     res.write(`<html lang="en">
  // <head>
  //     <meta charset="UTF-8">
  //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //     <title>Document</title>
  // </head>
  // <body>
  //     <form action="/members" method="POST">
  //         <label for="name">Name:</label>
  //         <input type="text" id="name" name="name" required>
  //         <label for="email">Email:</label>
  //         <input type="email" id="email" name="email" required>
  //         <input type="submit" value="Submit">
  //     </form>
  // </body>
  // </html>`);
  //     res.end();
  //   } else if (req.url === "/members") {
  //     res.write(`<html>
  //           <body>
  //           <h1>Welcome to my first server</h1>
  //           <ul>
  //           <li><a href = "/members" >Home</a></li>
  //           <li><a href ="/members/mobile" >mobile</a></li>
  //           <li><a href = "/members/books" >books</a></li>
  //           <li><a href = "/members/products">products</a></li>
  //           </ul>
  //           </body>
  //           </html>`);
  //     res.end();
  //   } else if (req.url === "/members/products") {
  //     res.write(`<html>
  //           <body>
  //           <h1>Welcome to my products page</h1>
  //           <a href="/members">back</a>
  //           </body>
  //           </html>`);
  //     res.end();
  //   } else if (req.url === "/members/books") {
  //     res.write(`<html>
  //           <body>
  //           <h1>Welcome to my books page</h1>
  //           <a href="/members">back</a>
  //           </body>
  //           </html>`);
  //     res.end();
  //   } else if (req.url === "/members/mobile") {
  //     res.write(`<html>
  //           <body>
  //           <h1>Welcome to my mobile page</h1>
  //           <a href="/members">back</a>
  //           </body>
  //           </html>`);
  //     res.end();
  //   }
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
