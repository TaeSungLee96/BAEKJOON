// 문제번호:11654번; 아스키 코드
const fs = require("fs");
const stdin = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `A`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin;
})(); // 여기까진 고정으로 사용

// 로직 시작
let value = input();
let str = value + "";
console.log(str.charCodeAt(0));

// 문제번호:11720번; 숫자의 합
const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `5
54321`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})(); // 여기까진 고정으로 사용

// 로직 시작
let numberCount = input().split("").map(Number)[0];
let number = input().split("").map(Number);
let totalSum = number.reduce((a, b) => a + b);
console.log(totalSum);

// 문제번호:10809번; 알파벳 찾기
const fs = require("fs");
const { join } = require("path");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `baekjoon`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line];
})(); // 여기까진 고정으로 사용

// 로직 시작
let strList = input().split("");
var result = "";
var answer = [];

// 알파벳리스트 만들기
let forAlphabet = "";
for (let i = 97; i <= 122; i++) {
  forAlphabet += String.fromCharCode(i);
}
let alphabetList = forAlphabet.split("");

for (let i = 0; i < alphabetList.length; i++) {
  answer.push(strList.indexOf(alphabetList[i]));
}
console.log(answer.join(" "));

// 문제번호:2675번; 문자열 반복
const fs = require("fs");
const { join } = require("path");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `2
3 ABC
5 /HTP`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})(); // 여기까진 고정으로 사용

// 로직 시작
let T = input().split("").map(Number);
var answer = "";

while (true) {
  RS = input();
  if (!RS) {
    break;
  }
  [R, S] = RS.split(" "); // R:반복횟수, S:반복해야하는 문자열

  for (let i = 0; i < S.length; i++) {
    answer += String(S[i]).repeat(R);
  }
  answer += "\n";
}
console.log(answer);

// 문제번호:1157번; 단어공부
const fs = require("fs");
const { join } = require("path");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `baaa`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line];
})(); // 여기까진 고정으로 사용

// 로직 시작
let T = input().split("");
var alphabetCount = [];
var sumList = [];

// 알파벳리스트 만들기
let forAlphabet = "";
/// 대문자만들기
for (let i = 65; i <= 90; i++) {
  forAlphabet += String.fromCharCode(i);
}
/// 소문자만들기
for (let i = 97; i <= 122; i++) {
  forAlphabet += String.fromCharCode(i);
}
let alphabetList = forAlphabet.split("");

// 알파벳별 등장횟수 세기
for (let i = 0; i < alphabetList.length; i++) {
  alphabetCount.push(T.filter((x) => x == alphabetList[i]).length);
}

// 대소문자 구분없이 등장횟수 세기
for (let i = 0; i < alphabetCount.length / 2; i++) {
  sumList.push(alphabetCount[i] + alphabetCount[i + 26]);
}
onlyOne = sumList.filter((a) => a == 1).length;
several = sumList.filter((a) => a >= Math.max(...sumList)).length;

if (several >= 2) {
  console.log("?");
} else if (several == 1) {
  maxNumber = sumList.filter((x) => x >= Math.max(...sumList));
  maxIdx = sumList.indexOf(Number(maxNumber + ""));
  console.log(forAlphabet[maxIdx]);
} else if (onlyOne == 1) {
  maxNumber = sumList.filter((x) => x == 1);
  maxIdx = sumList.indexOf(Number(maxNumber + ""));
  console.log(forAlphabet[maxIdx]);
}

// 문제번호:1152번; 단어의 개수
const fs = require("fs");
const { join } = require("path");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `The Curious Case of Benjamin Button`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line];
})(); // 여기까진 고정으로 사용

// 로직 시작
let T = input().split(" ");
newT = T.filter((x) => x.length > 0);
console.log(newT.length);

// 문제번호:2908번; 상수
const fs = require("fs");
const { join } = require("path");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `734 893`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line];
})(); // 여기까진 고정으로 사용

// 로직 시작
let [first, second] = input().split(" ");
first = Number(first.split("").reverse().join(""));
second = Number(second.split("").reverse().join(""));

console.log(Math.max(...[first, second]));

// 문제번호:5622번; 다이얼 ### 문제가 뭔소리인지 모르겠음
const fs = require("fs");
const { join } = require("path");
const stdin = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `WA`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line];
})(); // 여기까진 고정으로 사용

// 로직 시작
let str = input().split("");

// 문제번호:2941번; 크로아티아 알파벳 ### 푸는중
const fs = require("fs");
const { join } = require("path");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `ljes=njak`
) //lj, nj, e, s, a, k
  .split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line];
})(); // 여기까진 고정으로 사용

// 로직 시작
var str = input();
var srtList = Array(str);
var result = [];
croatiaWordList = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

idx = 0;
for (let i = 0; i < croatiaWordList.length; i++) {
  console.log(1, srtList);
  if (srtList[idx].includes(croatiaWordList[i])) {
    srtList = srtList.split(croatiaWordList[i]);
    console.log(2, srtList);
  }
  idx++;
}

// 문제번호:1316번; 그룹 단어 체커 ### 푸는중
const fs = require("fs");
const { join } = require("path");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `ljes=njak`
) //lj, nj, e, s, a, k
  .split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line];
})(); // 여기까진 고정으로 사용

// 로직 시작
var str = input();
