const input = require("fs").readFileSync("input.txt").toString().split("\n");

const func = (inH, inM, inS, outH, outM, outS) => {
  let resultS, resultM, resultH;

  if (outS < inS) {
    outM -= 1;
    resultS = 60 - inS + outS;
  } else {
    resultS = outS - inS;
  }

  if (outM < inM) {
    outH -= 1;
    resultM = 60 - inM + outM;
  } else {
    resultM = outM - inM;
  }
  resultH = outH - inH;

  return `${resultH} ${resultM} ${resultS}`;
};

for (let i = 0; i < input.length; i++) {
  const values = input[i].split(" ").map((str) => parseInt(str));
  console.log(func(...values));
}
