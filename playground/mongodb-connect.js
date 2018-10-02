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

    // db.collection("Users").insertOne(
    //   { name: "matt", age: 27, location: "san diego" },
    //   (err, result) => {
    //     if (err) {
    //       return console.log("Unable to add document to collection", err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    //   }
    // );
    client.close();
  }
);
