// 문제번호:2739번; 구구단
const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

var input = [];

rl.on('line', function (line) {
  input.push(parseInt(line));
}).on('close', function () {
  const row = input;

  for (let j = 1; j < 10; j++) {
    console.log(`${row} * ${j} = ${row * j}`);
  }

  process.exit();
});

const { count } = require('console');
// 문제번호:10950번; A+B - 3
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
1 1
2 3
3 4
9 8
5 2
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})(); // 여기까진 고정으로 사용

// 로직 시작
let t = input();
while (t--) {
  const [a, b] = input().split(' ').map(Number);
  console.log(a + b);
}

// 문제번호:8393번; 합
const fs = require('fs');
const stdin = (
  process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString() : `3`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})(); // 여기까진 고정으로 사용

// 로직 시작
let endNum = input();
let calNum = null;
for (let index = 1; index <= endNum; index++) {
  calNum += index;
}
console.log(calNum);

// 문제번호:15552번; 빠른 A+B
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let max = Number(input[0]);
let answer = '';

for (let i = 1; i <= max; i++) {
  let num = input[i].split(' ');
  answer += Number(num[0]) + Number(num[1]) + '\n';
}
console.log(answer);

// 문제번호:2741번; N 찍기
const fs = require('fs');
const stdin = (
  process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString() : `5`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})(); // 여기까진 고정으로 사용

// 로직 시작
let endNum = input();
let answer = [];
for (let index = 1; index <= endNum; index++) {
  answer.push(index);
}
let ans2 = answer.join('\n');
console.log(ans2);

// 문제번호:2742번; 기찍 N
const fs = require('fs');
const stdin = (
  process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString() : `5`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})(); // 여기까진 고정으로 사용

// 로직 시작
let endNum = input();
let answer = [];
for (let index = endNum; index >= 1; index--) {
  answer.push(index);
}
let ans2 = answer.join('\n');
console.log(ans2);

// 문제번호:11021번; A+B - 7
const fs = require('fs');
const stdin = (
  process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString() : `5`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})(); // 여기까진 고정으로 사용

// 로직 시작
let T = input();
let caseNum = 1;
while (T--) {
  const [a, b] = input().split(' ').map(Number);
  console.log(`Case #${caseNum}:`, a + b);
  caseNum += 1;
}

// 문제번호:11022번; A+B - 8
const fs = require('fs');
const stdin = (
  process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString() : `5`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})(); // 여기까진 고정으로 사용

// 로직 시작
let T = input();
let caseNum = 1;
while (T--) {
  const [a, b] = input().split(' ').map(Number);
  console.log(`Case #${caseNum}: ${a} + ${b} =`, a + b);
  caseNum += 1;
}

// 문제번호:2438번; 별 찍기 - 1
const fs = require('fs');
const stdin = (
  process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString() : `5`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})(); // 여기까진 고정으로 사용

// 로직 시작
let T = input();
let starNum = 1;
while (T--) {
  console.log('*'.repeat(starNum));
  starNum += 1;
}

// 문제번호:2438번; 별 찍기 - 2
const fs = require('fs');
const stdin = (
  process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString() : `5`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})(); // 여기까진 고정으로 사용

// 로직 시작
let T = Number(input());
let starNum = 1;
for (let index = 0; index < T; index++) {
  console.log(' '.repeat(T - starNum) + '*'.repeat(starNum));
  starNum += 1;
}

// 문제번호:10871번; x보다 작은 수
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `10 5
  1 10 4 9 2 3 8 5 7 6`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})(); // 여기까진 고정으로 사용

// 로직 시작
let firstRow = input().split(' ');
let numberCount = firstRow[0];
let integer = firstRow[1];
let numberList = input().split(' ');
let answer = [];

numberList.map((x) => (Number(x) < integer ? answer.push(x) : x));
console.log(answer.join(' '));

// 문제번호:10952번; A+B - 5
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `1 1
2 3
3 4
9 8
5 2
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})(); // 여기까진 고정으로 사용

// 로직 시작
while (true) {
  const [a, b] = input().split(' ').map(Number);
  if (a + b === 0) {
    break;
  } else {
    console.log(a + b);
  }
}

// 문제번호:10951번; A+B - 4
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `1 1
2 3
3 4
9 8
5 2
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})(); // 여기까진 고정으로 사용

// 로직 시작
while (true) {
  const [a, b] = input().split(' ').map(Number);
  if (!(a + b)) {
    break;
  } else {
    console.log(a + b);
  }
}

// 문제번호:1110번; 더하기 사이클
const fs = require('fs');
const stdin = (
  process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString() : `2`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin;
})(); // 여기까진 고정으로 사용

// 로직 시작
var initNum = input()[0]; //"9"
var combinedNum = null;
var cycleNum = 0;

// 조합숫자와 초기 숫자가 같은지 비교(다르면 무한반복)
while (true) {
  if (Number(initNum) == 0) {
    cycleNum = 1;
    break;
  }
  if (Number(combinedNum) === Number(initNum)) {
    break;
  }
  // 초기 숫자가 10보다 작을 경우
  if (
    (combinedNum < 10 && initNum < 10) ||
    (combinedNum === null && initNum < 10)
  ) {
    if (!combinedNum) {
      combinedNum = initNum;
    }
    cycleNum += 1; // 사이클 수 체크용
    if (combinedNum[0] !== '0') {
      combinedNum = '0' + combinedNum; // 앞자리에 0추가
    }

    // 1의자리와 10자리 숫자 더하기
    var firstStr = combinedNum[0];
    var lastStr = combinedNum.at(-1);
    var calNum = Number(firstStr) + Number(lastStr);
    // 조합번호 만들기
    combinedNum = lastStr + String(calNum).at(-1);
  } else {
    cycleNum += 1; // 사이클 수 체크용

    // combinedNum이 null값이면 initNum을 할당하기
    if (!combinedNum) {
      combinedNum = initNum;
    }
    // 1의자리와 10자리 숫자 더하기
    var firstStr = combinedNum[0];
    var lastStr = combinedNum.at(-1);
    var calNum = Number(firstStr) + Number(lastStr);
    // 조합번호 만들기
    combinedNum = lastStr + String(calNum).at(-1);
  }
}
console.log(cycleNum);
