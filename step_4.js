// 문제번호:10818번; 최소, 최대
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
20 10 35 30 7`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})(); // 여기까진 고정으로 사용

// 로직 시작
let num = input();
let numList = input().split(' ');

let maxNum = Math.max(...numList);
let minNum = Math.min(...numList);
console.log(minNum, maxNum);

// 문제번호:2562번; 최댓값
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3
29
38
12
57
74
40
85
61`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})(); // 여기까진 고정으로 사용

// 로직 시작
var numList = [];

while (true) {
  var num = Number(input());
  if (!num) {
    break;
  }
  numList.push(num);
}

maxNum = Math.max(...numList);
maxIdx = numList.indexOf(maxNum);

console.log(maxNum);
console.log(maxIdx + 1);

// 문제번호:2577번; 숫자의 개수
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `150
266
427`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})(); // 여기까진 고정으로 사용

// 로직 시작
var numFirst = input();
var numSecond = input();
var numThird = input();
var calNum = numFirst * numSecond * numThird;

var strCalNum = (calNum + '').split(''); //

var ls = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < 10; i++) {
  var count = strCalNum.reduce((cnt, element) => cnt + (ls[i] == element), 0);
  console.log(count);
}

// 문제번호:3052번; 나머지
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `1
2
3
4
5
6
7
8
9
10`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})(); // 여기까진 고정으로 사용

// 로직 시작
remainder_ls = [];
while (true) {
  var num = input();
  if (!num) {
    break;
  }
  remainder = num % 42;
  remainder_ls.push(remainder);
}

remainder_ls.sort((a, b) => {
  return a - b;
});

let count = 0;
for (let i = 0; i < remainder_ls.length; i++) {
  if (remainder_ls[i] !== remainder_ls[i + 1]) {
    count += 1;
  }
}
console.log(count);

// 문제번호:3052번; 나머지
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3
10 20 30
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})(); // 여기까진 고정으로 사용

// 로직 시작
scoreCount = input();
score_ls = input().split(' ').map(Number);

rawAverage = score_ls.reduce((a, b) => a + b, 0) / score_ls.length;
maxScore = Math.max(...score_ls);
newScore_ls = [];

for (let i = 0; i < score_ls.length; i++) {
  var score = score_ls[i];
  var score_new = (score / maxScore) * 100;
  newScore_ls.push(score_new);
}

let answer = newScore_ls.reduce((a, b) => a + b, 0) / newScore_ls.length;
console.log(answer);

// 문제번호:8958번; OX퀴즈
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
OOXXOXXOOO
OOXXOOXXOO
OXOXOXOXOXOXOX
OOOOOOOOOO
OOOOXOOOOXOOOOX
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})(); // 여기까진 고정으로 사용

// 로직 시작
var question_num = input();
var now_answer_count = 0;
var plus_score = 0;
var total_score = 0;
var answer_ls = [];

while (true) {
  input_ = input();
  if (!input_) {
    break;
  }
  let question = input_.split('');
  let q_len = question.length;

  for (let i = 0; i < q_len; i++) {
    if (question[0] === 'O') {
      now_answer_count += 1;
      plus_score = now_answer_count;
      total_score += plus_score;

      question.shift();
      // 정답 리스트에 추가후 변수 다시 초기화
      if (!question[0]) {
        answer_ls.push(total_score);
        now_answer_count = 0;
        plus_score = 0;
        total_score = 0;
      }
    } else {
      now_answer_count = 0;
      plus_score = now_answer_count;
      total_score += plus_score;

      question.shift();
      // 정답 리스트에 추가후 변수 다시 초기화
      if (!question[0]) {
        answer_ls.push(total_score);
        now_answer_count = 0;
        plus_score = 0;
        total_score = 0;
      }
    }
  }
  console.log(answer_ls[0]);
  answer_ls.shift();
}

// 문제번호:4344번; 평균은 넘겠지
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})(); // 여기까진 고정으로 사용

// 로직 시작
let totalCaseNum = input();
while (true) {
  input_ = input();
  if (!input_) {
    break;
  }
  let CaseInfo = input_.split(' ').map(Number);
  let score = CaseInfo.slice(1, CaseInfo.length); // 점수 리스트
  let average = score.reduce((a, b) => a + b, 0) / score.length; // 학생들 평균점수
  let niceStudent = score.map((element) => (element > average ? 1 : 0)); // 평균넘은 학생수 리스트
  let niceStudentCount = niceStudent.reduce((a, b) => a + b, 0); // 평균넘은 학생수 배열내 합산
  console.log(((niceStudentCount / niceStudent.length) * 100).toFixed(3) + '%'); // 양식맞춰서 출력
}
