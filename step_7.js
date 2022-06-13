// 문제번호:1712번; 손익분기점 ## 반례를 모르겠음
const fs = require("fs");
const { join } = require("path");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `2 1 3`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})(); // 여기까진 고정으로 사용

// 로직 시작
const [A, B, C] = input().split(" ").map(Number);
var num = 1;
var Cost = A + B * num;
var earn = num * C;

while (Cost >= earn) {
  num++;
  Cost = A + B * num;
  earn = num * C;
  if (num > 2100000001) {
    num = -1;
    break;
  }
}
console.log(num);

// 문제번호:2292번; 벌집 ## 답은 맞는데 메모리 초과됨
const fs = require("fs");
const { join } = require("path");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `1417969`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line];
})(); // 여기까진 고정으로 사용

// 로직 시작
var destination = Number(input());
var startNum = 2;
var endNum = 8;
var distance = 2;
var step = 0;

function numberRange(start, end) {
  return;
}

while (true) {
  ls = numberRange(startNum, endNum);
  if (ls.includes(destination)) {
    break;
  }
  distance++;
  step++;
  startNum = startNum + 6 * step; // startNum = 8, step = 1    // startNum = 20, step = 2
  endNum = startNum + 6 * (step + 1); // endNum = 20, step = 1 // endNum = 38, step = 2
}
console.log(distance);

// 문제번호:1193번; 분수찾기
const fs = require("fs");
const { join } = require("path");
const { text } = require("stream/consumers");
const stdin = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `1`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line];
})(); // 여기까진 고정으로 사용

// 로직 시작
var num = Number(input());
var 분자 = "1";
var 분모;

while (true) {
  분수 = 분자 + "/" + 분모;
}

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
