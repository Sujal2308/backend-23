const path = require("path");

//!* This is the path of the root directory */
//! Provides absolute path of the project directory
module.exports = path.dirname(require.main.filename);
