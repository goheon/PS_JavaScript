const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

let arr = [];
let output = [];

function handleMsg(msg) {
  switch (msg) {
    case "pop":
      if (arr.length === 0) {
        output.push(-1);
      } else {
        output.push(arr[0]);
        arr = arr.slice(1);
      }
      break;
    case "size":
      output.push(arr.length);
      break;
    case "empty":
      if (arr.length === 0) {
        output.push(1);
      } else {
        output.push(0);
      }
      break;
    case "front":
      if (arr.length === 0) {
        output.push(-1);
      } else {
        output.push(arr[0]);
      }
      break;
    case "back":
      if (arr.length === 0) {
        output.push(-1);
      } else {
        output.push(arr[arr.length - 1]);
      }
      break;
    default:
      const [str, X] = msg.split(" ");
      if (str === "push") {
        arr.push(Number(X));
      }
      break;
  }
}

for (let i = 1; i < input.length; i++) {
  handleMsg(input[i]);
}

console.log(output.join("\n"));
