const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

function sol(input) {
  for (let i = 0; i < input.length - 1; i++) {
    const tri = input[i]
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);

    if (tri[2] ** 2 === tri[0] ** 2 + tri[1] ** 2) {
      console.log("right");
    } else {
      console.log("wrong");
    }
  }
}

sol(input);
