// javascript
// 속성의 값 가져오기
// 대상.getAttribute("속성명");
// 속성의 값 변경하기
// 대상.setAttribute("속성명", "값");

// 클래스명 조작
// 대상.classList.add('클래스명')
// 대상.classList.remove('클래스명')
// 대상.classList.toggle('클래스명')
// 대상.classList.contains('클래스명')

// jquery
// 속성의 값 가져오기
// 대상.attr("속성명")
// 속성의 값 변경하기
// 대상.attr("속성명", "값")

// 클래스명 조작
// 대상.addClass('클래스명')
// 대상.removeClass('클래스명')
// 대상.toggleClass('클래스명')
// 대상.hasClass('클래스명')

const images = $(".gallery img");
const overlay = $("#lightbox-overlay");
const lightboxImg = $("#lightbox-image");

// images를 클릭하면 할일
// 클릭한 이미지의 큰 이미지 경로를 변수명 bigImg에 할당
// lightboxImg의 src 속성의 값을 bigImg로 변경
// overlay에 클래스명 visible 추가

images.click(function () {
  let bigImg = $(this).attr("data-lightbox");
  lightboxImg.attr("src", bigImg);
  overlay.addClass("visible");
});
overlay.click(function () {
  $(this).removeClass("visible");
});
