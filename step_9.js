// 문제번호:10872번; 팩토리얼
const fs = require("fs");
const { join } = require("path");
const stdin = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `10`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line];
})(); // 여기까진 고정으로 사용

// 로직 시작
let num = +input();

function factorial(init) {
  if (init === 0) return 1;
  return init * factorial(init - 1);
}

console.log(factorial(num));
