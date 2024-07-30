const [A, B] = require("fs").readFileSync("input.txt").toString().split(" ");
const songs = A;
const avg = B;

const n = songs * (avg - 1) + 1;

console.log(n);
