const input = parseInt(require("fs").readFileSync("input.txt"));

for (let i = 0; i < input; i++) {
  const stars = "*".repeat(i + 1);
  console.log(stars);
}
