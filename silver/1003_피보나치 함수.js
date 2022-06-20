// 문제번호:1003번; 피보나치 함수
const fs = require("fs");
const { join } = require("path");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `2
6
22
`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})(); // 여기까진 고정으로 사용

// 로직 시작
let caseNum = +input();

function binaryCount(n) {
  let count0 = [1, 0];
  let count1 = [0, 1];

  if (n == 0) {
    console.log(`1 0`);
  } else if (n == 1) {
    console.log(`0 1`);
  } else if (n >= 2) {
    for (let i = 1; i < n; i++) {
      count0.push(count0[i - 1] + count0[i]);
      count1.push(count1[i - 1] + count1[i]);
    }
    console.log(`${count0.pop()} ${count1.pop()}`);
  }
}

for (let i = 0; i < caseNum; i++) {
  binaryCount(input());
}
