const input = require("fs")
  .readFileSync("input.txt", "utf-8")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);

const pokedex = input.slice(1, N + 1);
const pokedexObj = {};
for (let i = 0; i < pokedex.length; i++) {
  pokedexObj[pokedex[i]] = i + 1;
}
const quizArr = input.slice(N + 1);

let result = [];
for (let quiz of quizArr) {
  if (!isNaN(parseInt(quiz))) {
    result.push(pokedex[parseInt(quiz) - 1]);
  } else {
    result.push(pokedexObj[quiz]);
  }
}

console.log(result.join("\n"));
