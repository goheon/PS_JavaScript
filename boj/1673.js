const input = require("fs")
  .readFileSync("input.txt", "utf-8")
  .toString()
  .trim()
  .split("\n");

let result = [];
for (let i = 0; i < input.length; i++) {
  const [n, k] = input[i].split(" ").map(Number);
  let cnt = n;
  let coupons = n;
  while (coupons >= k) {
    let couponChickens = Math.floor(coupons / k);
    cnt += couponChickens;
    coupons = coupons - couponChickens * (k - 1);
  }
  result.push(cnt);
}

console.log(result.join("\n"));
