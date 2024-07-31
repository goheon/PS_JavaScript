const input = require("fs").readFileSync("input.txt").toString().trim();

let sticks = [64];

while (sticks.reduce((a, b) => a + b, 0) > input) {
  const half = sticks.pop() / 2;
  sticks.push(half);
  if (sticks.reduce((a, b) => a + b, 0) >= input) {
    continue;
  } else {
    sticks.push(half);
  }
}
console.log(sticks.length);
