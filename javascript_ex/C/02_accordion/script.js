/*
클래스명 관련 함수
대상.classList.add("클래스명") : 클래스 추가
대상.classList.remove("클래스명") : 클래스 제거

대상.classList.toggle("클래스명") : 토글버튼

대상의 부모 선택
대상.parentElement            (바로 이어져있는 부모)
대상의 자식들 선택
대상.childrenElement          (바로 이어져있는 자식들)
대상의 이전요소 선택
대상.previousElementSibling   (바로 이전 형제)
대상의 다음요소 선택
대상.nextElementSibling       (바로 다음 형제)
대상의 형제들 선택
대상.parentElement.children   (부모의 모든 자식)
대상을 제외한 형제들 선택 (Jquery : 대상.siblings())
대상.parentElement.children 

*/

let panelQuestion = document.querySelectorAll(".panel-question");
let btnCollapse = document.querySelector("#btn-collapse");

// 전부 접는 기능 자체를 함수로 만들어둠

/*
panelQuestion을 클릭하면 할일
  모든 panelQuestion에서 active 제거
  클릭한 panelQuestion에만 active 추가
*/

panelQuestion.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
    // collapseAll();
    // 클릭한 그 요소 외의 나머지 모든 div를 선택해 active 클래스명을 제거
    console.log(item.parentElement.children);
    [...item.parentElement.children].forEach(q => {
      if (q !== item) {
        q.classList.remove("active");
      }
    });
  });
});

// btn-collapse를 클릭하면 모든 panelQuestion에서 active 클래스명 제거
btnCollapse.addEventListener("click", () => {
  collapseAll();
});

// let collapseAll = () => {
//   for (let pq of panelQuestion) {
//     pq.classList.remove("active");
//   }
// };

// 아직 로딩되지 않았으므로 익명함수로는 실행안됨, 단 위에있더라도 이벤트가 발생하는 시점이 DOM 로딩 이후라면 정상 실행됨
collapseAll();

function collapseAll() {
  for (let pq of panelQuestion) {
    pq.classList.remove("active");
  }
}
