const [T, ...tests] = require("fs")
  .readFileSync("input.txt", "utf-8")
  .toString()
  .trim()
  .split("\n");

for (let test of tests) {
  let cnt = 0;
  let [N, M] = test.split(" ").map(Number);
  for (let i = N; i <= M; i++) {
    let temp = i.toString().split("");
    for (let char of temp) {
      if (char === "0") cnt++;
    }
  }
  console.log(cnt);
}
