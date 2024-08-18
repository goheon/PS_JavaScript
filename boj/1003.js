const input = require("fs")
  .readFileSync("input.txt", "utf-8")
  .toString()
  .trim()
  .split("\n");

let ans = [];

for (let i = 1; i < input.length; i++) {
  let arr = [
    [1, 0],
    [0, 1],
  ];

  if (input[i] < 2) {
    ans.push(arr[input[i]].join(" "));
    continue;
  }

  let cnt = 2;
  while (input[i] >= cnt) {
    arr.push([
      arr[cnt - 1][0] + arr[cnt - 2][0],
      arr[cnt - 1][1] + arr[cnt - 2][1],
    ]);
    cnt++;
  }

  ans.push(arr[input[i]].join(" "));
}

console.log(ans.join("\n"));
