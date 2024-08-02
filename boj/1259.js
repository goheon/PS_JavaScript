const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length - 1; i++) {
  const arr = input[i].split("");
  let msg = "yes";

  for (let j = 0; j < Math.floor(arr.length / 2); j++) {
    if (arr[j] !== arr[arr.length - 1 - j]) {
      msg = "no";
      break;
    }
  }
  console.log(msg);
}
