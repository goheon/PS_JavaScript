const [N, A, B] = require("fs")
  .readFileSync("input.txt", "utf-8")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

if (A < B) {
  console.log("Bus");
} else if (A == B) {
  console.log("Anything");
} else {
  console.log("Subway");
}
