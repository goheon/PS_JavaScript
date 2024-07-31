const input = require("fs").readFileSync("input.txt").toString();

const l = input.length;
let result = "1";

for (let i = 0; i < Math.floor(input.length / 2); i++) {
  if (input[i] !== input[l - 1 - i]) {
    result = "0";
    break;
  }
}

console.log(result);
