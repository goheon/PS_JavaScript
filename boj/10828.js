const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

let stack = [];
for (let i = 1; i <= input[0]; i++) {
  switch (input[i]) {
    case "top":
      if (stack.length === 0) {
        console.log(-1);
      } else {
        console.log(stack[stack.length - 1]);
      }
      break;

    case "empty":
      if (stack.length === 0) {
        console.log(1);
      } else {
        console.log(0);
      }
      break;

    case "size":
      console.log(stack.length);
      break;

    case "pop":
      if (stack.length === 0) {
        console.log(-1);
      } else {
        console.log(stack.pop());
      }
      break;

    default:
      stack.push(input[i].split(" ")[1]);
      break;
  }
}
