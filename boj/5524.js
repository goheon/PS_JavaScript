const [N, ...strings] = require("fs")
  .readFileSync("input.txt", "utf-8")
  .toString()
  .trim()
  .split("\n");

const low = strings.map((el) => el.toLowerCase());
console.log(low.join("\n"));
