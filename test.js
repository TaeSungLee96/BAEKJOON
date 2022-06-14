// 문제번호:10870번; 피보나치 수 5
const fs = require("fs");
const { join } = require("path");
const stdin = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `17`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line];
})(); // 여기까진 고정으로 사용

// 로직 시작
let num = +input();

function fibonacci(init) {
  if (init <= 1) {
    return init;
  } else {
    return fibonacci(init - 1) + fibonacci(init - 2);
  }
}

console.log(fibonacci(num));
