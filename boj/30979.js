const [T, N, Fs] = require("fs")
  .readFileSync("input.txt", "utf-8")
  .toString()
  .trim()
  .split("\n");

let sum = Fs.split(" ")
  .map(Number)
  .reduce((p, c) => p + c, 0);

if (T <= sum) {
  console.log("Padaeng_i Happy");
} else {
  console.log("Padaeng_i Cry");
}
