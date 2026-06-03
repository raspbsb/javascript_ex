let goTop = document.querySelector("#go-top");

/*
내린 스크롤 양 확인하기 
페이지 맨 위부터 화면 위까지의 거리
window.pageYOffset      // deplicated 사장/폐기됨
window.scrollY
스크롤 이벤트 대상 : 스크롤은 window라는 객체에 생김

스크롤 양 지정
window.scrollTo(x,y) : 스크롤 양을 x,y로 변경
window.scrollTo(0,100)

window.scrollBy(x,y) : 현재 스크롤에서 스크롤양을 x,y만큼 이동
window.scrollBy(0,-50)
*/

window.addEventListener("scroll", () => {
  let scrollAmt = window.scrollY;
  console.log(scrollAmt);
  /*
  스크롤 양 300보다 크면 goTop 보이고,
  아니라면 goTop 사라진다.
  */
  if (scrollAmt > 300) {
    goTop.classList.add("active");
  } else {
    goTop.classList.remove("active");
  }
});

// goTop을 클릭하면 스크롤양을 0으로 지정, 부드럽게

goTop.addEventListener("click", e => {
  e.preventDefault();
  // window.scrollTo(0, 0);
  // behavior: "instant" -> "smooth"
  window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
});
