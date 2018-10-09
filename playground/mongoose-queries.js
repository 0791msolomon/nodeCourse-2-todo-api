const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("../server/models/user");
const { ObjectID } = require("mongodb");
// const id = "5bbcc5cb1db475742cae1671";
const id = "5bb6541666f96113a001dc58";

if (!ObjectID.isValid(id)) {
  return console.log("not a valid id");
}

User.findById(id)
  .then(response => {
    if (!response) {
      return console.log("User with that id not found");
    }
    console.log(response);
  })
  .catch(err => console.log(err));

// Todo.find({ _id: id }).then(response => console.log(response));
//
// Todo.findOne({ _id: id }).then(response => {
//   console.log(response);
// });
// if (!ObjectID.isValid(id)) {
//   return console.log("That is not a valid id");
// }

// Todo.findById(id)
//   .then(response => {
//     if (!response) {
//       return console.log("unable to find id");
//     }
//     console.log(response);
//   })
//   .catch(err => {
//     console.log(err);
//   });
