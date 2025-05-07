// const express = require('express');
// const app = express();

const userForm = (req, res) => {
  res.send(`<h1>Contact Page</h1> </br>
            <form action='/contact' method='POST'>
                <label for='name'>Name</label>
                <input type='text' name='username' id='name'> </br>
                <label for='email'>Email</label>
                <input type='email' name='email' id='email'> </br>
                <input type='submit' value='Submit'>`);
};

module.exports = userForm;
//* this is the end of the server.js file
