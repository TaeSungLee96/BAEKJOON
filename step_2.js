// 문제번호:1330번; 두 수 비교하기
const fs = require("fs");
var input = fs
  .readFileSync("dev/stdin")
  .toString()
  .split(" ")
  .map((v) => +v);

var [A, B] = input;

if (A > B) {
  console.log(">");
} else if (A < B) {
  console.log("<");
} else if (A === B) {
  console.log("==");
}

// 문제번호:9498번; 시험 성적
const fs = require("fs");
var input = fs
  .readFileSync("dev/stdin")
  .toString()
  .split(" ")
  .map((v) => +v);

var score = input;

if (score >= 90 && score <= 100) {
  console.log("A");
} else if (score >= 80 && score <= 89) {
  console.log("B");
} else if (score >= 70 && score <= 79) {
  console.log("C");
} else if (score >= 60 && score <= 69) {
  console.log("D");
} else {
  console.log("F");
}

// 문제번호:2753번; 윤년
const fs = require("fs");
var input = fs
  .readFileSync("dev/stdin")
  .toString()
  .split(" ")
  .map((v) => +v);

var year = input;

if (
  (year % 4 === 0 && year % 100 !== 0) ||
  (year % 4 === 0 && year % 400 === 0)
) {
  console.log(1);
} else {
  console.log(0);
}

// 문제번호:14681번; 사분면 고르기
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(parseInt(line));
}).on("close", function () {
  const [xPoint, yPoint] = input;

  if (xPoint > 0 && yPoint > 0) {
    console.log(1);
  } else if (xPoint < 0 && yPoint > 0) {
    console.log(2);
  } else if (xPoint < 0 && yPoint < 0) {
    console.log(3);
  } else {
    console.log(4);
  }
  process.exit();
});

// 문제번호:2884번; 알람 시계
let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split(" ");
var hour = parseInt(input[0]);
var minute = parseInt(input[1]);

hour === 0 ? (hour = 24) : (hour = hour);

let time = hour * 60 + minute - 45;
console.log(parseInt((time / 60) % 24), parseInt(time % 60));

// 문제번호:2525번; 오븐 시계
let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");
let firstRow = input[0].split(" ").map((item) => +item);
let hour = firstRow[0];
let minute = firstRow[1];
let requireCookMinute = +input[1];

var endingCookTime = hour * 60 + minute + requireCookMinute;
console.log(
  parseInt((endingCookTime / 60) % 24),
  parseInt(endingCookTime % 60)
);

// 문제번호:2480번; 주사위 세개
let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");
let row = input[0].split(" ").map((item) => +item);

row.sort((a, b) => {
  return a - b;
});

let first = row[0];
let second = row[1];
let third = row[2];

if (first === second && second === third) {
  console.log(10000 + first * 1000);
} else if (first === second || second === third) {
  console.log(1000 + second * 100);
} else if (first !== second && second !== third) {
  console.log(third * 100);
}
