const questions = $(".question");
const answers = $(".answer");

// 대상.prev() 이전 요소 선택하기
// 대상.next() 다음 요소 선택하기
// 대상.siblings(선택자) 대상 외의 나머지(선택자) 요소 선택
// slideDown() 높이를 가진 블록 요소를 펼치기

// question을 클릭하면 할 일
// 클릭한 그 요소의 바로 다음 요소를 펼치기
// 나머지 요소를 접음

questions.click(function () {
  $(this).next().slideToggle();
  $(this).next().siblings(".answer").slideUp();
});
