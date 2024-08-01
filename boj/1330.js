const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [A, B] = input;

if (A > B) {
  console.log(">");
} else if (A < B) {
  console.log("<");
} else {
  console.log("==");
}
