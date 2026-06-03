/*
js로 클래스명 제어하는 방법

클래스명 추가
대상.classList.add("클래스명");                      // 대상 요소의 태그에 "클래스명" 클래스를 추가 
대상.classList.add("클래스명", "클래스명2");           // 대상 요소의 태그에 "클래스명", "클래스명2" 클래스를 추가 (여러개 동시에 추가 가능)


클래스명 제거
대상.classList.remove("클래스명");

*/

document.querySelector("h1").classList.add("title", "logo");
document.querySelector("h2").classList.remove("subtitle", "test");

/*
탭메뉴를 클릭하면 관련 내용이 나타나고
하이라이트 배경이 활성화된 메뉴위치로 이동합니다.
*/

// 탭메뉴를 클릭하면 탬컨텐트의 모든 div에서 active를 제거한다.
let tabMenu = document.querySelectorAll(".tab-menu a");
let tabContent = document.querySelectorAll("#tab-content > div");

// for (let i = 0; i < tabMenu.length; i++) {
//   tabMenu[i].addEventListener("click", () => {
//     for (let i = 0; i < tabContent.length; i++) {
//       tabContent[i].classList.remove("active");
//     }
//     tabContent[i].classList.add("active");
//   });
// }

tabMenu.forEach(item => {
  item.addEventListener("click", e => {
    // 클릭 이벤트 일어난 그 요소의 기본 기능 막기
    // 대상.preventDefault();
    // 이벤트가 일어나는 요소가 아니라 이벤트 자체에서 막아야 함
    console.log(e);
    e.preventDefault();

    // 방법 1 : 이벤트가 일어난 요소의 HTML속성을 가져오고, 그 속성을 가지고있는 요소에 active 클래스를 추가

    // 모든 a태그에서 active 제거, 클릭한 그 요소에만 active 추가
    tabMenu.forEach(tm => {
      tm.classList.remove("active");
    });
    item.classList.add("active");

    // 클릭 시 모든 본문에서 active 클래스 제거
    tabContent.forEach(tc => {
      tc.classList.remove("active");
    });

    // 이벤트가 일어난 요소의 href속성의 값을 가져옴
    let target = e.target.getAttribute("href");

    // 아이디가 target (href속성값)인 요소에 active 클래스명 추가
    document.querySelector(target).classList.add("active");
  });
});
