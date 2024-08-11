const input = require("fs")
  .readFileSync("input.txt", "utf-8")
  .toString()
  .trim()
  .split("\n");

let map = Array.from({ length: parseInt(input[0]) }, () => []);

for (let i = 2; i < input.length; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  map[a - 1].push(b);
}

// 맵을 돌면서 방문배열 처리
console.log(map);
