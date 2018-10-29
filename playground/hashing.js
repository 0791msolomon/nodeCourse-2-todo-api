const { SHA256 } = require("crypto-js");
const jwt = require("jsonwebtoken");

let data = {
  id: 10
};

let token = jwt.sign(data, "123abc");

console.log(token);
let decoded = jwt.verify(token, "123abc");
console.log("decoded", decoded);
// const message = "i am user number 1";
// const hash = SHA256(message).toString();
// console.log(`message ${message}`);
// console.log(`hash ${hash}`);

// const data = {
//   id: 4
// };
// const token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + "somesecret").toString()
// };

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// let resultHash = SHA256(JSON.stringify(token.data) + "somesecret").toString();
// if (resultHash === token.hash) {
//   console.log("data was not changed");
// } else {
//   console.log("data was changed. DON'T TRUST");
// }
