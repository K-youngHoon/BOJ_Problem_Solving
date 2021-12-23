const readLine = require("readline");

const reader = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const setNum = (number) => number.map((v) => Number(v));

reader.on("line", (input) => {
  const [a, b] = setNum(input.split(" "));
  console.log(a + b);
  reader.close();
});
