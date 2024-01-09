// create web server
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

// add static files
app.use(express.static("public"));

// add body parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// add mongoose
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/comments", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// add comment model
const commentSchema = new mongoose.Schema({
  name: String,
  comment: String,
});

const Comment = mongoose.model("Comment", commentSchema);

// set up routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/add-comment", (req, res) => {
  const comment = new Comment({
    name: req.body.name,
    comment: req.body.comment,
  });

  comment
    .save()
    .then((result) => {
      console.log(result);
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/comments", (req, res) => {
  Comment.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
