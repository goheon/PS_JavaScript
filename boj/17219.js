const input = require("fs")
  .readFileSync("input.txt", "utf-8")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ");

const q = input.slice(parseInt(N) + 1);
let dataObject = {};

input
  .slice(1, N + 1)
  .sort()
  .map((el) => {
    const line = el.split(" ");
    dataObject[line[0]] = line[1];
  });

let ans = [];
q.forEach((el) => {
  ans.push(dataObject[el]);
});

console.log(ans.join("\n"));
