// 변수 지정
const slideWrapper = document.querySelector(".slide-wrapper");
const slideContainer = slideWrapper.querySelector(".slide-container");
const slides = slideContainer.querySelectorAll("li");
let currentIdx = 0;
const prevBtn = slideWrapper.querySelector("#prev");
const nextBtn = slideWrapper.querySelector("#next");

// 슬라이드가 있으면 가로로 배열하기, 페이저 생성하기
if (slides.length > 1) {
}
// 슬라이드 0번째 left 0

/*
for (let i = 0; i < slides.length; i++) {
  slides[i].style.left = `${i * 100}%`;
}
  */

slides.forEach((slide, idx, all) => {
  slide.style.left = `${idx * 100}%`;
});

// 슬라이드 이동 함수(이동, 페이저 업데이트, 슬라이드 활성화)

function moveSlide(num) {
  // ul의 left값을 변경, moveSlide(1) -> UL Left = -100%

  slideContainer.style.left = `${num * -100}%`;
  currentIdx = num;
  updateNav();
}

if (currentIdx === 0) {
  prevBtn.classList.add("disabled");
}

// moveSlide(4);

// 좌우 버튼 클릭으로 슬라이드 이동시키기

// 다음 버튼을 클릭하면 할 일 : 현재 슬라이드 번호 +1을 moveslide에 적용한다
nextBtn.addEventListener("click", () => {
  // let nextIdx = (currentIdx + 1) % slides.length;
  let nextIdx = currentIdx + 1;
  moveSlide(nextIdx);
});
// 이전 버튼을 클릭하면 할 일 : 현재 슬라이드 번호 -1을 moveslide에 적용한다
prevBtn.addEventListener("click", () => {
  let prevIdx = currentIdx - 1;
  moveSlide(prevIdx);
});

function updateNav() {
  // 마지막 슬라이드면 다음버튼이 사라진다
  if (currentIdx === slides.length - 1) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }
  // 첫번째 슬라이드면 이전버튼이 사라진다
  if (currentIdx === 0) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }

  // 모든 슬라이드에서 active 제거, 현재 슬라이드 번호에 클래스명 active 추가

  slides.forEach(slide => {
    slide.classList.remove("active");
  });

  slides[currentIdx].classList.add("active");
}

updateNav();
