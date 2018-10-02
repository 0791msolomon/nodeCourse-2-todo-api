// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

let obj = new ObjectID();
console.log(obj);

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  { useNewUrlParser: true },
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to Mongodb server");
    }
    console.log("Connected to Mongodb server");
    const db = client.db("TodoApp");

    // db.collection("Todos")
    //   .find({ _id: ObjectID("5bb2b80a06d3dd759dd4da7a") })
    //   .toArray()
    //   .then(response => {
    //     console.log(JSON.stringify(response, undefined, 2));
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    // db.collection("Todos")
    //   .find()
    //   .count()
    //   .then(response => {
    //     console.log(
    //       JSON.stringify(`There are ${response} things to do`, undefined, 2)
    //     );
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    db.collection("Users")
      .find({ name: "matt" })
      .toArray()
      .then(response => {
        console.log(JSON.stringify(response, undefined, 2));
      })
      .catch(err => {
        console.log(err);
      });
    client.close();
  }
);
