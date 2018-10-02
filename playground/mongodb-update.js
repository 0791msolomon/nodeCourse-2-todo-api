const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  { useNewUrlParser: true },
  (err, client) => {
    if (err) {
      return console.log(err);
    }
    console.log("connected to mongodb server");
    let db = client.db("TodoApp");

    // db.collection("Todos")
    //   .findOneAndUpdate(
    //     { _id: ObjectID("5bb2b80a06d3dd759dd4da7a") },
    //     { $set: { completed: true } },
    //     { returnOriginal: false }
    //   )
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    db.collection("Users")
      .findOneAndUpdate(
        { _id: ObjectID("5bb2b5b02513c478c7681ddc") },
        {
          $set: {
            name: "ashley"
          },
          $inc: {
            age: 2
          }
        },

        {
          returnOriginal: false
        }
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    client.close();
  }
);
