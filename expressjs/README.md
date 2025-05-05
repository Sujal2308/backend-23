# Express.js Overview

## Getting Started with Express.js

### Step 1: Install Express

// To begin using Express, install it via npm:

```bash
npm install express
```

### Step 2: Import Express

// Import the Express module and save it to a variable:

```javascript
const express = require("express");
```

### Step 3: Initialize Express

// Call the Express function and store it in a variable to access all the helper methods:

```javascript
const app = express();
```

## Difference Between Node.js and Express.js

// **Node.js** is a JavaScript runtime environment that allows you to run JavaScript on the server side. It comes with various built-in modules, such as `crypto`, `assert`, `http`, `fs`, and more.

// The **http** module is particularly important as it enables the creation of servers and manages server-side tasks. However, writing code using the http module can be verbose and less developer-friendly.

To address these challenges, **Express.js** is a third-party framework built on top of the http module. It simplifies server-side rendering and provides a more intuitive API, allowing developers to write less code while enjoying various exclusive features, including:

- Middleware handling
- Templating engines
- Simplified request handling
- View caching
- Better error handling

## What is Nodemon?

**Nodemon** is a utility that automatically restarts your Node.js application or server whenever it detects changes in the source files. This tool enhances development efficiency by eliminating the need to manually restart the server after every change.

Note by default .gitignore file points to current working directory so no need to use ./ rather use /

# Templating engines :

A templating engine is a tool that allows you to generate dynamic HTML by embedding variables, loops, and conditions into template files.

### Why Use Templating Engines?

1️⃣ Insert dynamic data into HTML (e.g., usernames, lists, etc.).

2️⃣ Reuse layouts and components (e.g., headers, footers).

3️⃣ Improve code organization and maintainability.

\\ Examples of Templating Engines in Express:
EJS (<%= user %> for variables)

Pug (indentation-based syntax)

Handlebars ({{user}} placeholders)

jade

### \\ Ejs Setup :

1. install ejs
2. configure ejs (app.set("view engine","ejs"))
3. create a views folder
4. create ejs files inside that views folder
5. then rather than app.send() use render method to render ejs file on web page . Behind the scenes ejs converts to html only
   # Note : Make sure in render(filename) provide ejs filename only with no extension

### Express-generator

**Express-generator** is a powerful tool that helps you quickly set up the boilerplate for an Express application, including all the necessary files and folders.

#### How to Set Up Express-generator Globally

To install `express-generator` globally, run the following command in your terminal:

```bash
npm install -g express-generator
```

Once installed, you can create your Express application directly from the terminal. Use the following command to generate a new application:

```bash
express appName --view=ejs
```

#### Next Steps

After generating your application, navigate into the application directory and install the required dependencies:

1. Change to the application directory:

   ```bash
   cd appName
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Open the project in your code editor:
   ```bash
   code .
   ```

Now you're ready to start developing your Express application!

\\ Endpoints: The URLs that developers can use to access specific functionalities of the server application.

## APIs 🌐: The Application Programming Interface

\\ APIs are essentially gateways that connect clients and servers, following specific rules (protocols). They enable communication between different software applications.

### Types of APIs 📚

1. **Web APIs**: APIs that operate over the HTTP protocol (a broader term).
2. **REST APIs**: A type of web API that uses HTTP methods (GET, PUT, POST, DELETE, etc.) and adheres to REST (Representational State Transfer) principles. They are stateless and typically return JSON data.
3. **SOAP APIs**: APIs that work with XML data, following the SOAP protocol.

### How APIs Work 🔄

When you visit a website:

1. 🌐 The web server receives your request (e.g., clicking a login button).
2. 🧠 The application server processes that request (e.g., checking your username and password).
3. 📤 A response is sent back via the web server to your browser.

This interaction allows for dynamic content and functionality on the web, making APIs a crucial part of modern web development!

What is postman 📬?
## Postman is a tool for building , testing, collaborating on apis.