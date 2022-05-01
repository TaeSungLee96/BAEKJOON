// 문제번호:4673번; 셀프넘버

// 로직 시작
function selfNumber() {
  m = 0;
  save = [];

  // 1. 배열생성 for문.
  for (let i = 1; i < 10001; i++) {
    save.push(i); // 1부터 10000까지 배열 생성
  }

  // 2. 생성자가 있는 숫자를 0으로 만드는 for문.
  for (let i = 1; i < 10001; i++) {
    n = i;

    // 생성자 로직구현(여기서 생성이 안된 숫자면 생성자를 못갖는 수인거임)
    // n이 0이오면 무한반복 중지
    while (n != 0) {
      m += n % 10; // 10으로 나눈 나머지를 m에 누적
      n = parseInt(n / 10); //몫이 0이라면 더이상 나눌것이 없으므로 while로직 중지
    }
    result = i + m; // result = 초기숫자 + 각자리숫자의 합 ==> 생성자가 있는 숫자임
    console.log(result);

    // 생성자가 있는 숫자면 save배열에서 0으로 만들기
    for (let i = 0; i < 10000; i++) {
      if (result == save[i]) {
        save[i] = 0;
      }
    }

    m = 0; // 각자리숫자의 합 초기화(while로직에서 엉키지 않도록 하기위함)
  }

  // 3. 생성자가 있는 숫자들은 0이 되었으니 continue됨, 생성자가 없는 숫자들은 출력이됨.
  for (let i = 0; i < 10000; i++) {
    if (save[i] == 0) {
      continue;
    }
    console.log(save[i]);
  }
}

selfNumber();

// 문제번호:1065번; 한수
const fs = require('fs');
const stdin = (
  process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `500`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin;
})(); // 여기까진 고정으로 사용

// 로직 시작
let number = input().map(Number)[0];

function hanSu(number) {
  var hanSuCount = 0;
  differenceList = [];

  // 1. 1부터 number까지 배열생성
  for (let i = 1; i < number + 1; i++) {
    i2List = String(i).split('');
    // 1~99까지는 무조건 한수라서 continue
    if (i2List.length < 3) {
      hanSuCount += 1;
      continue;
    } else if (i2List.length == 3) {
      difference_1 = i2List[0] - i2List[1];
      difference_2 = i2List[1] - i2List[2];

      compareResult = difference_1 == difference_2 ? true : false;
      if (compareResult == true) hanSuCount += 1;
    } else if (i2List.length == 4) {
      hanSuCount += 0;
    }
  }
  console.log(hanSuCount);
}

hanSu(number);
