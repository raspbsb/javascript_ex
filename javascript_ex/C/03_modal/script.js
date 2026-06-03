/*
attribute 함수

대상.getAttribute("속성명"); : 속성의 값을 반환
let C = A.getAttribute("B"); : A의 B속성의 값을 반환해서 C에 저장

사용자 속성의 값을 반환
data-id
let c = a.dataset.id
A의 data-id 속성의 값을 변수 c에 할당

대상.setAttribute("속성명", "바꿀 값") : 속성의 값을 변경
A.setAttribute("B", "C") : A의 B속성의 값을 C로 변경
*/

// 큰 이미지 미리 다운로드하기
/*
이미지 요소 생성
new Image(); // 빈 이미지 요소 생성 <img src="">
대상.src = 주소
*/

let images = document.querySelectorAll(".gallery img");
let lightboxImage = document.querySelector("#lightbox-image");
let lightboxOverlay = document.querySelector("#lightbox-overlay");

// new image();

/*
images를 클릭하면 할 일
  클릭한 그 이미지의 data-lightbox 속성의 값을 변수명 targetImg에 할당
  lightboIxmage의 src속성의 값으로 변경
*/

// images.forEach((item) => {
// });

images.forEach(img => {
  // 큰 이미지 미리 로딩
  let preLoadImg = new Image();
  preLoadImg.src = img.dataset.lightbox;

  img.addEventListener("click", e => {
    e.preventDefault();
    // let targetImg = e.target.getAttribute("data-lightbox");

    let targetImg = e.target.dataset.lightbox;
    console.log(targetImg);
    lightboxImage.setAttribute("src", targetImg);
    lightboxOverlay.classList.add("visible");
  });
});

lightboxOverlay.addEventListener("click", () => {
  lightboxOverlay.classList.remove("visible");
});
