//Library imports
const express = require("express");
const bodyParser = require("body-parser");
const { ObjectID } = require("mongodb");
//Local imports
const { mongoose } = require("./db/mongoose");
const { Todo } = require("./models/todo");

const app = express();
const port = process.env.PORT || 3000;
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

app.get("/todos/:id", (req, res) => {
  let id = req.params.id;
  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }
  Todo.findById(id)
    .then(response => {
      if (!response) {
        res.status(404).send();
      }
      res.send(response);
    })
    .catch(err => {
      res.status(400).send();
    });
});

app.delete("/todos/:id", (req, res) => {
  let id = req.params.id;
  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }
  Todo.findByIdAndRemove(id)
    .then(response => {
      if (!response) {
        return res.status(404).send();
      }
      res.send(response);
    })
    .catch(err => res.status(400).send());
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = { app };
