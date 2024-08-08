const input = require("fs")
  .readFileSync("input.txt", "utf-8")
  .toString()
  .trim()
  .split("");

let height = 10;
for (let i = 1; i < input.length; i++) {
  if (input[i - 1] === input[i]) {
    height += 5;
  } else {
    height += 10;
  }
}

console.log(height);
