require("./config/config");
//Library imports
const express = require("express");
const bodyParser = require("body-parser");
const { ObjectID } = require("mongodb");
const _ = require("lodash");
//Local imports
const { mongoose } = require("./db/mongoose");
const { User } = require("./models/user");
const { Todo } = require("./models/todo");

const app = express();
const port = process.env.PORT;
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

app.patch("/todos/:id", (req, res) => {
  let id = req.params.id;
  let body = _.pick(req.body, ["text", "completed"]);
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }
  Todo.findByIdAndUpdate(id, { $set: body }, { new: true })
    .then(response => {
      if (!response) {
        return res.status(404).send();
      }
      res.send(response);
    })
    .catch(err => {
      res.status(400).send();
    });
});
app.post("/users", (req, res) => {
  let body = _.pick(req.body, ["email", "password"]);
  let user = new User(body);

  user
    .save(body)
    .then(() => {
      return user.generateAuthToken();
    })
    .then(token => {
      res.header("x-auth", token).send(user);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});
app.get("/users", (req, res) => {
  User.find()
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = { app };
