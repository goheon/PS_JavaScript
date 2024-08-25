const [NM, s, ...abcs] = require("fs")
  .readFileSync("input.txt", "utf-8")
  .toString()
  .trim()
  .split("\n");

let status = s.split(" ").map(Number);
const cmds = abcs.map((line) => line.split(" ").map(Number));

const ctrler = (a, b, c) => {
  switch (a) {
    case 1:
      status[b - 1] = c;
      break;

    case 2:
      for (let i = b - 1; i < c; i++) {
        status[i] === 1 ? (status[i] = 0) : (status[i] = 1);
      }
      break;

    case 3:
      for (let i = b - 1; i < c; i++) {
        status[i] = 0;
      }
      break;

    default:
      for (let i = b - 1; i < c; i++) {
        status[i] = 1;
      }
      break;
  }
};

for (let cmd of cmds) {
  ctrler(cmd[0], cmd[1], cmd[2]);
}

console.log(status.join(" "));
