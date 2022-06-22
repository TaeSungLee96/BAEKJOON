// 문제번호:1003번; 피보나치 함수
const fs = require("fs");
const { join } = require("path");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `2
-5 1 12 1
7
1 1 8
-3 -1 1
2 2 2
5 5 1
-4 5 1
12 1 1
12 1 2
-5 1 5 1
1
0 0 2
`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})(); // 여기까진 고정으로 사용

// 로직 시작
let caseNumber = +input();

for (let i = 0; i < caseNumber; i++) {
  // 출발점, 도착점 좌표
  let [x1, y1, x2, y2] = input().split(" ").map(Number);

  // 행성 개수
  let planetNumber = +input();
  let count = 0;

  for (let j = 0; j < planetNumber; j++) {
    let [cx, cy, cr] = input().split(" ").map(Number);
    let d1 = (x1 - cx) ** 2 + (y1 - cy) ** 2;
    let d2 = (x2 - cx) ** 2 + (y2 - cy) ** 2;
    powCr = cr ** 2;

    if (powCr > d1 && powCr > d2) {
      continue;
    } else if (powCr > d1) {
      count += 1;
    } else if (powCr > d2) {
      count += 1;
    }
  }
  console.log(count);
}
