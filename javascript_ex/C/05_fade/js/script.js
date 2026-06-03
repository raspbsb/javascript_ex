// 변수 지정
const slides = document.querySelectorAll(".slide-container > li");
let currentIdx = 0;

/* 첫번째 슬라이드가 나타난다 */

slides[0].classList.add("active");

/* 4초가 지나면 첫번째 이미지가 사라지고 두번째 이미지가 나타난다 */

/* 1번만 수행
setTimeout(() => {
  slides[0].classList.remove("active");
  slides[1].classList.add("active");
}, 4000);
*/

/* 반복 수행, 인덱스번호를 계속 다음으로
다음 인덱스 번호가 5번이 되면 다음 인덱스 번호를 0으로 초기화 */

setInterval(() => {
  // let NextIdx = currentIdx + 1;
  // if (NextIdx === 5) {
  //   NextIdx = 0;
  // }
  let NextIdx = (currentIdx + 1) % 5;

  slides[currentIdx].classList.remove("active");
  slides[NextIdx].classList.add("active");
  currentIdx = NextIdx;
}, 2000);
