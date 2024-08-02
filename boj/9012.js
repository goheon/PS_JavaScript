const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 1; i <= input[0]; i++) {
  const arr = input[i].split("");
  let cnt = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === "(") {
      cnt++;
    } else {
      cnt = cnt - 1;
      if (cnt < 0) {
        break;
      }
    }
  }
  if (cnt !== 0) {
    console.log("NO");
  } else {
    console.log("YES");
  }
}
