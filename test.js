// 문제번호:1110번; 더하기 사이클
const fs = require("fs");
const stdin = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `9`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin;
})(); // 여기까진 고정으로 사용

// 로직 시작
let initNum = input()[0]; //"9"
let combinedNum = null;
let cycleNum = null;

// 조합숫자와 초기 숫자가 같은지 비교(다르면 무한반복)
while (combinedNum !== initNum) {
  if (combinedNum < 10) {
    cycleNum += 1;

    // 초기값 문자화 시키기
    let strInitNum = initNum + "";
    // 앞자리에 0 추가
    strInitNum = "0" + strInitNum;

    // 각 자리 합하기
    var firstStr = strInitNum[0];
    var lastStr = strInitNum.substr(-1);
    var calNum = Number(firstStr) + Number(lastStr);

    // 새로운 조합숫자 생성
    combinedNum = lastStr + String(calNum);
  } else {
    cycleNum += 1;

    // 초기값 문자화 시키기
    strInitNum = initNum + "";

    // 각 자리 합하기
    var firstStr = strInitNum[0];
    var lastStr = strInitNum.substr(-1);
    var calNum = Number(firstStr) + Number(lastStr);

    // 새로운 조합숫자 생성
    combinedNum = lastStr + String(calNum);
  }
}
console.log(cycleNum);
