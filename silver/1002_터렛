// 문제번호:1002번; 터렛
const fs = require("fs");
const { join } = require("path");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `4
0 0 13 40 0 37
0 0 3 0 7 4
1 1 1 1 1 5
0 0 1 0 0 1`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})(); // 여기까진 고정으로 사용

// 로직 시작
let testCase = Number(input());

for (let i = 0; i < testCase; i++) {
  let [x1, y1, r1, x2, y2, r2] = input().split(" ").map(Number);
  let d = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

  // 2개의 접점
  if (Math.abs(r1 - r2) < d && r1 + r2 > d) {
    console.log(2);
  }
  // 무한대
  else if (x1 == x2 && y1 == y2 && r1 == r2) {
    console.log(-1);
  }
  // 1개의 접점
  else if (r1 + r2 == d || Math.abs(r1 - r2) == d) {
    console.log(1);
  }
  // 0개의 접점
  else if (Math.abs(r1 - r2) > d || r1 + r2 < d || (d == 0 && r1 != r2)) {
    console.log(0);
  }
}
