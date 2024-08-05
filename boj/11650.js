const [N, ...locations] = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

locations.sort((a, b) => {
  const [ax, ay] = a.split(" ").map(Number);
  const [bx, by] = b.split(" ").map(Number);
  if (ax > bx) {
    return 1;
  } else if (ax === bx && ay > by) {
    return 1;
  } else {
    return -1;
  }
});

console.log(locations.join("\n"));
