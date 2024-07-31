const input = require("fs").readFileSync("input.txt").toString().split("\n");

const combination = (n, k) => {
  if (k === 0 || k === n) {
    return 1;
  }
  if (k > n - k) {
    k = n - k;
  }
  let result = 1;
  for (let i = 0; i < k; i++) {
    result *= n - i;
    result /= i + 1;
  }
  return result;
};

for (let i = 0; i < Number(input[0]); i++) {
  let [N, M] = input[i + 1].split(" ");
  N = Number(N);
  M = Number(M);
  console.log(combination(M, N));
}
