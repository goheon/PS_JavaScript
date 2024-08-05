const [N, K] = require("fs")
  .readFileSync("input.txt", "utf-8")
  .toString()
  .split(" ")
  .map(Number);

let circle = Array.from({ length: N }, (_, i) => i + 1);
let pointer = 0;
let result = [];

while (circle.length !== 0) {
  pointer = pointer + K - 1;
  while (pointer > circle.length - 1) {
    pointer = pointer - circle.length;
  }
  let temp = circle.splice(pointer, 1);
  result.push(temp);
}

console.log(`<${result.join(", ")}>`);
