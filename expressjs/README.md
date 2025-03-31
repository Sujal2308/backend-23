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
