/* 
이벤트 적용
이벤트 확인
addEventListener('이벤트종류', 할일);
이벤트 종류
DOMContentLoaded('이벤트종류', 할일 function); : DOM의 콘텐츠가 로드되뎜 이벤트 발생
click
mouseover
mouseout
mouseenter
mouseleave
scroll
change - select 메뉴의 값이 변경되면 이벤트 발생 (입력 완료되는 순간) input값 변경 등
input - input type text에만 사용, 값이 입력되면 이벤트 발생 (쓰는 순간)
keydown - 키보드를 입력하면 (누르는 순간)

*/

// addEventListener("DOMContentLoaded", function () {
document.querySelector("h1").style.color = "blue";
// });

/* 아이디 submit을 클릭하면 .container p의 글자색을 blue로 변경*/

var target = document.querySelector(".container p");
var button = document.querySelector("#submit");

button.addEventListener("click", function () {
  target.style.color = "blue";
});

var selectForm = document.getElementById("color");
var body = document.querySelector("body");

// var selectedColor = "";

selectForm.addEventListener("change", function (e) {
  // e는 이벤트가 일어난 그 요소를 e라는 매개변수로 받음 (객체)
  /*
  console.log("BG: "+this.value);
  var selectedColor = this.value;
  */
  var selectedColor = e.target.value;
  body.style.backgroundColor = selectedColor;
  console.log(e.target);
  console.log(e.target.value);
});

var username = document.querySelector("#username");

username.addEventListener("change", function (e) {
  console.log(e.target.value);
});

document.addEventListener("keydown", function (e) {
  // console.log(e.key); // 키보드에서 무슨 키를 누르는지 확인
  if (e.key === "ArrowLeft") {
    alert("왼쪽 화살키 입력");
  }
});

