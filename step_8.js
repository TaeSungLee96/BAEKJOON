// 문제번호:1929번; 소수 구하기
const fs = require("fs");
const { join } = require("path");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `1 10`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line];
})(); // 여기까진 고정으로 사용

// 로직 시작
const [A, B] = input().split(" ").map(Number);

let arr = Array(B + 1)
  .fill(true) // 0부터 B+1 까지 true로 채우기
  .fill(false, 0, 2); // 0부터 1까지 false로 채우기 ( 0과 1은 소수가 아니니까)

for (let i = 0; i * i <= B; i++) {
  //arr에서 false인 요소는 건너뛰기
  if (arr[i]) {
    for (let j = i * i; j <= B; j += i) {
      arr[j] = false;
    }
  }
}

// true 값을 가진 index 번호 전부찾기
var indices = [];
var idx = arr.indexOf(true);
while (idx != -1) {
  indices.push(idx);
  // 다음 idx 검사 로직
  idx = arr.indexOf(true, idx + 1);
}
result = indices.filter((x) => x >= A);
console.log(result.join(" "));
