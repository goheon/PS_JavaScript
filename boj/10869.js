const [A, B] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ");

console.log(parseInt(A) + parseInt(B));
console.log(A - B);
console.log(A * B);
console.log(Math.floor(A / B));
console.log(A % B);
