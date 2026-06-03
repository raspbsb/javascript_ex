/*
아이디 요소 선택
document.getElementById('아이디명')

요소의 스타일 변경
대상.style.css속성명 = 값
대상.style.color = 'blue';

Element's' 선택자들은 유사배열로 들어감. << 반복문

태그 요소 선택
document.getElementsByTagName("태그명")

클래스명 요소 선택
document.getElementsClassName('클래스명')

CSS 선택자 - 선택
1. document.querySelector('css선택자')      // 하나만 선택, 단일요소
2. document.querySelectorAll('css선택자')   // 여러개 선택, 배열

*/

// var list1 = document.getElementById("list1");
// list1.style.color = "blue";
// list1.style.backgroundColor = "#ccc";

var title = document.getElementsByTagName("h1");
// document.getElementsByTagName("h1").style.color = "blue";

title[0].style.color = "blue";

console.log(title);

var titles = document.getElementsByTagName("h2");
for (var i = 0; i <= title.length; i++) {
  titles[i].style.color = "green";
}

var items = document.getElementsByClassName("list");
for (var i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = "green";
}

document.querySelector("#box > div > div").style.backgroundColor = "green";

var paragraphs = document.querySelectorAll("article p");
for (var i = 0; i < items.length; i++) {
  paragraphs[i].style.fontSize = "0.8em";
}
