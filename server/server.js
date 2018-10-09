//Library imports
const express = require("express");
const bodyParser = require("body-parser");
//Local imports
const { mongoose } = require("./db/mongoose");
const { Todo } = require("./models/todo");
const { User } = require("./models/user");

const app = express();
app.use(bodyParser.json());

app.post("/todos", (req, res) => {
  let todo = new Todo({
    text: req.body.text
  });
  todo
    .save()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      console.log(err);
      res.status(400).send(err);
    });
});

app.get("/todos", (req, res) => {
  Todo.find()
    .then(response => {
      res.send(response);
    })
    .catch(err => res.status(400).send(err));
});
app.listen(3000, () => {
  console.log("listening on port 3000");
});

module.exports = { app };
