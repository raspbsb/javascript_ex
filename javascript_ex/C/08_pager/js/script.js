// 변수 지정
const slideWrapper = document.querySelector(".slide-wrapper");
const slideContainer = slideWrapper.querySelector(".slide-container");
const slides = slideContainer.querySelectorAll("li");
let currentIdx = 0;
const prevBtn = slideWrapper.querySelector("#prev");
const nextBtn = slideWrapper.querySelector("#next");
const slideCount = slides.length;
const pager = slideWrapper.querySelector(".pager");

// 슬라이드가 있으면 가로로 배열하기, 페이저 생성하기
if (slideCount > 1) {
}
// 슬라이드 0번째 left 0

/*
for (let i = 0; i < slideCount; i++) {
  slides[i].style.left = `${i * 100}%`;
}
  */

// 클리어
pager.innerHTML = ``;
// 슬라이드마다 반복
slides.forEach((slide, idx, all) => {
  // pager 생성
  // <a href="">0</a>; ... <a href="">4</a>
  pager.innerHTML += `<a href="#">${idx}</a>`;
  // 슬라이드 좌우 정렬
  slide.style.left = `${idx * 100}%`;
});

// 슬라이드 이동 함수(이동, 페이저 업데이트, 슬라이드 활성화)

function moveSlide(num) {
  // ul의 left값을 변경, moveSlide(1) -> UL Left = -100%

  slideContainer.style.left = `${num * -100}%`;
  currentIdx = num;
  updateNav();
}

// moveSlide(4);

// 좌우 버튼 클릭으로 슬라이드 이동시키기

// 다음 버튼을 클릭하면 할 일 : 현재 슬라이드 번호 +1을 moveslide에 적용한다
nextBtn.addEventListener("click", () => {
  let nextIdx = (currentIdx + 1) % slideCount;
  // let nextIdx = currentIdx + 1;
  moveSlide(nextIdx);
});
// 이전 버튼을 클릭하면 할 일 : 현재 슬라이드 번호 -1을 moveslide에 적용한다
prevBtn.addEventListener("click", () => {
  let prevIdx = (currentIdx + slideCount - 1) % slideCount;
  moveSlide(prevIdx);
});

const pagerBtns = pager.querySelectorAll("a");

function updateNav() {
  // 모든 슬라이드에서 active 제거, 현재 슬라이드 번호에 클래스명 active 추가
  slides.forEach(slide => {
    slide.classList.remove("active");
  });
  slides[currentIdx].classList.add("active");

  // pager의 모든 a에서 active를 제거, 현재 슬라이드번째 a에 active 추가
  pagerBtns.forEach(item => {
    item.classList.remove("active");
  });
  pagerBtns[currentIdx].classList.add("active");
}

updateNav();

// 페이저로 슬라이드 이동하기
// pagerBtns를 클릭하면 할일
// 클릭한 그 요소의 인덱스 번호를 가지고 moveslide에 넘겨준다

pagerBtns.forEach((pb, idx) => {
  pb.addEventListener("click", () => {
    moveSlide(idx);
  });
});
