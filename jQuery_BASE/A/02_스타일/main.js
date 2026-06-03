// 태그 h1의 글자색을 blue
// 태그 h1의 글자 크기를 0.5 em
// $("h1").css("color", "blue");
// $("h1").css("font-size", "0.5em");

// 한 줄로 처리하기
// 1. 메서드 체이닝 : .으로 계속 이어가기
// $("h1").css("color", "blue").css("font-size", "0.5em");

// 2. 객체로 넣기
// 대상.css({객체형식})
// 대상.css({속성:값, 속성:값, ...})
$("h1").css({ color: "blue", fontSize: "0.5em" });

// 클래스명 list의 배경색 silver
$(".list").css("background", "silver");
$("#box > div > div").css({ background: "silver" });

// 문단 투명도를 0.5, 폰트 스타일을 italic
$("p").css({ opacity: 0.5, fontStyle: "italic" });

// h2 요소의 회전을 걸어서 20도 돌리기
$("h2").css({ transform: "rotate(20deg)", transformOrigin: "0% 50%" });
