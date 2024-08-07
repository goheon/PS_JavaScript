const [n, m] = require("fs")
  .readFileSync("input.txt", "utf-8")
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

console.log(n / m + "\n" + (n % m));
