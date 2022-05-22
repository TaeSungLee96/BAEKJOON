// 문제번호:2869번; 달팽이는 올라가고 싶다
const fs = require("fs");
const { join } = require("path");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `10 9 10`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line];
})(); // 여기까진 고정으로 사용

// 로직 시작
const [A, B, C] = input().split(" ").map(Number);

if (A >= C) {
  console.log(1);
} else {
  console.log(Math.ceil((C - A) / (A - B) + 1));
}
