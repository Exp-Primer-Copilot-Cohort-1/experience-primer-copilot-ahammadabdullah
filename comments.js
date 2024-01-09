// create web server
// http://localhost:3000/comments
// http://localhost:3000/comments/1
// http://localhost:3000/comments/2

var express = require("express");
var app = express();
var comments = [
  { id: 1, author: "Pete Hunt", text: "This is one comment" },
  { id: 2, author: "Jordan Walke", text: "This is *another* comment" },
];
app.get("/comments", function (req, res) {
  res.json(comments);
});
app.get("/comments/:id", function (req, res) {
  var comment = comments.find(function (comment) {
    return comment.id == req.params.id;
  });
  res.json(comment);
});
app.listen(3000, function () {
  console.log("Server started: http://localhost:3000/");
});
