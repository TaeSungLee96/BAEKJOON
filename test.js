// 문제번호:17478번; 재귀함수가 뭔가요? || console.log 끝에 undefined가 뜨는 오류 해결중
const fs = require("fs");
const { join } = require("path");
const stdin = (
  process.platform === "linux" ? fs.readFileSync("/dev/stdin").toString() : `2`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line];
})(); // 여기까진 고정으로 사용

// 로직 시작
function what(i) {
  console.log("____".repeat(i) + `"재귀함수가 뭔가요?"`);

  if (i == num) {
    console.log(
      "____".repeat(i) + `"재귀함수는 자기 자신을 호출하는 함수라네"`
    );
    console.log("____".repeat(i) + "라고 답변하였지.");
  } else {
    console.log(
      "____".repeat(i) +
        `"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.`
    );
    console.log(
      "____".repeat(i) +
        `마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.`
    );
    console.log(
      "____".repeat(i) +
        `그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."`
    );
    what(i + 1);
    console.log("____".repeat(i) + "라고 답변하였지.");
  }
}

let num = +input();
console.log("어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.");
console.log(what(0, num));
