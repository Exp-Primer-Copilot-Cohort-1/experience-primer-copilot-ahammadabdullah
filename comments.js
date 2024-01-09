// Create web server
// 1. Create web server
// 2. Create route
// 3. Create callback function
// 4. Return data
// 5. Listen on port
// 6. Open browser

// 1. Create web server
const express = require("express");
const app = express();

// 2. Create route
app.get("/comments", (req, res) => {
  // 4. Return data
  res.send("Hello World!");
});

// 5. Listen on port
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

// 6. Open browser
// http://localhost:3000/comments
