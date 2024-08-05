const input = require("fs").readFileSync("input.txt", "utf-8");

let arr = [];
if (input % 2 !== 0) {
  arr.push(input);
}
for (let i = 1; i <= input / 2; i++) {
  arr.push(i * 2);
}
while (arr.length !== 1) {
  if (arr.length % 2 !== 0) {
    arr = [arr[arr.length - 1], ...arr.filter((_, idx) => idx % 2 !== 0)];
  } else {
    arr = arr.filter((_, idx) => idx % 2 !== 0);
  }
}
console.log(arr[0]);
