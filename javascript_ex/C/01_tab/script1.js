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
let highlight = document.querySelector(".highlight");

// for (let i = 0; i < tabMenu.length; i++) {
//   tabMenu[i].addEventListener("click", () => {
//     for (let i = 0; i < tabContent.length; i++) {
//       tabContent[i].classList.remove("active");
//     }
//     tabContent[i].classList.add("active");
//   });
// }

tabMenu.forEach((item, idx, all) => {
  item.addEventListener("click", e => {
    // 클릭 이벤트 일어난 그 요소의 기본 기능 막기
    // 대상.preventDefault();
    // 이벤트가 일어나는 요소가 아니라 이벤트 자체에서 막아야 함
    // console.log(idx);
    e.preventDefault();

    // 방법 2 : 인덱스번호를 이용해서 각 요소에 active 클래스 부여

    // 모든 a태그에서 active 제거, 클릭한 그 요소에만 active 추가
    tabMenu.forEach(tm => {
      tm.classList.remove("active");
    });
    // 0.2초 기다렸다가 흰색 주기
    setTimeout(() => {
      item.classList.add("active");
    }, 200);

    // 클릭 시 모든 본문에서 active 클래스 제거
    tabContent.forEach(tc => {
      tc.classList.remove("active");
    });

    // 아이디가 target (href속성값)인 요소에 active 클래스명 추가
    tabContent[idx].classList.add("active");

    // 요소 위치 파악하기
    // 대상.offsetLeft (대상의 위치, 가까운 부모가 기준)
    let newLeft = e.target.offsetLeft;
    // console.log(e.target.offsetLeft);

    // 대상의 위치, 뷰포트(현재 left) 기준
    // 대상.getBoundingClientRect().left
    console.log(e.target.getBoundingClientRect().left);

    // 요소 너비 파악하기
    // 대상.getBoundingClientRect().width // 소수점까지
    console.log(e.target.getBoundingClientRect().width);

    // 대상.offsetWidth; // 소수점 없이 반올림
    console.log(e.target.offsetWidth);

    let newWidth = e.target.offsetWidth;

    // Highlight 이동시키기
    highlight.style.left = `${newLeft}px`;
    highlight.style.width = `${newWidth}px`;
  });
});
