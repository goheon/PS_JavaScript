const input = require("fs")
  .readFileSync("input.txt", "utf-8")
  .trim()
  .split("\n");

const counter = (l) => {
  let cnt = 0;
  for (let i = 1; i <= l; i++) {
    cnt += i * i;
  }
  return cnt;
};

let ans = [];
let dic = {};
for (let i = 1; i < input.length; i++) {
  let l = parseInt(input[i]);
  if (!dic[l]) {
    dic[l] = counter(l);
  }
  ans.push(dic[l]);
}
console.log(ans.join("\n"));
