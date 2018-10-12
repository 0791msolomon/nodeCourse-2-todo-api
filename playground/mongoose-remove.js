const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("../server/models/user");
const { ObjectID } = require("mongodb");

// Todo.deleteMany()
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => console.log(err));

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndDelete({ _id: "5bc0d2efa6ac305fa516018d" }).then(todo =>
  console.log(todo)
);
