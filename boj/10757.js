const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const [A, B] = input.split(" ").map(BigInt);
console.log((A + B).toString());
