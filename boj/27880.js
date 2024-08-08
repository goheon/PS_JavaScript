const input = require("fs")
  .readFileSync("input.txt", "utf-8")
  .toString()
  .trim()
  .split("\n");

let result = 0;

for (line of input) {
  let [Type, Number] = line.split(" ");
  if (Type === "Es") {
    result += parseInt(Number) * 21;
  } else {
    result += parseInt(Number) * 17;
  }
}

console.log(result);
