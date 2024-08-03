const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

// 2.길이순, 3.사전순,
const [N, ...arr] = input;

// 1.중복제거
const deduped = [...new Set(arr)];

const result = deduped.sort((a, b) => {
  if (a.length > b.length) return 1;
  else if (a.length === b.length && a > b) return 1;
  else return -1;
});

for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}
