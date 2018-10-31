const { SHA256 } = require("crypto-js");
const jwt = require("jsonwebtoken");

let data = {
  id: 10
};
console.log(data);
let token = jwt.sign(data, "123abc");
console.log(token);
let decoded = jwt.verify(token, "123abc");
console.log("this is decoded", decoded);

// let message = "I am user number 3";
// let hash = SHA256(message).toString();
// console.log(message);
// console.log(hash);

// const data = {
//   id: 4
// };

// let token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + "somesecret").toString()
// };

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// const resultHash = SHA256(JSON.stringify(token.data) + "somesecret").toString();

// if (resultHash === token.hash) {
//   console.log("pass");
// } else {
//   console.log("data was changed dont trust");
// }
