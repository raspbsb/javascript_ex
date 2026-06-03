// 변수 지정
const slideWrapper = document.querySelector(".slide-wrapper");
const slideContainer = slideWrapper.querySelector(".slide-container");
const slides = slideContainer.querySelectorAll("li");
let currentIdx = 0;
let isAnimating = false;
const prevBtn = slideWrapper.querySelector("#prev");
const nextBtn = slideWrapper.querySelector("#next");
const slideCount = slides.length;
const pager = slideWrapper.querySelector(".pager");

// 복사본 생성하기
/*
대상.cloneNode(true)  대상을 복사

A.append(B) B를 A의 내용의 뒤에 추가(이동)
A.prepend(B) B를 A의 내용의 앞에 추가(이동)
*/
let target = document.querySelector("h1");
let test1 = document.querySelector("#test1");
let test2 = document.querySelector("#test2");
target.append(test2);
target.prepend(test1);
/*
slideContainer.append(slides[0].cloneNode(true));
slideContainer.append(slides[1].cloneNode(true));
slideContainer.append(slides[2].cloneNode(true));
slideContainer.append(slides[3].cloneNode(true));
slideContainer.append(slides[4].cloneNode(true));

for (let i = 0; i < slideCount; i++) {
  slideContainer.append(slides[i].cloneNode(true));
}
*/

// pager 생성
let pagerHTML = "";
slides.forEach((slide, idx) => {
  pagerHTML += `<a href="#">${idx}</a>`;
  slide.style.left = `${idx * 100}%`;
});
pager.innerHTML = pagerHTML;

// 복사본 생성
slides.forEach(slide => {
  let cloneSlide = slide.cloneNode(true);
  cloneSlide.classList.add("clone", "after");
  slideContainer.append(cloneSlide);
});

for (let i = slideCount - 1; i >= 0; i--) {
  let cloneSlide = slides[i].cloneNode(true);
  cloneSlide.classList.add("clone", "before");
  slideContainer.prepend(cloneSlide);
}

// 슬라이드 배치
const allSlides = slideContainer.querySelectorAll("li");
slideContainer.style.width = `${allSlides.length * 100}%`;
slideContainer.style.transform = "translateX(-33.33333%)";

// 슬라이드 이동 함수
function moveSlide(num) {
  if (isAnimating) return; // 슬라이드가 움직이는 중이라면 함수 즉시 종료
  isAnimating = true; // 슬라이드가 움직이는 중

  slideContainer.style.left = `${num * -100}%`;
  currentIdx = num;
  updateNav();
  isAnimating = false; // 슬라이드가 이동 종료
  console.log(currentIdx);
}

nextBtn.addEventListener("click", e => {
  e.preventDefault();
  let nextIdx = currentIdx + 1;
  moveSlide(nextIdx);
});

prevBtn.addEventListener("click", e => {
  e.preventDefault();
  let nextIdx = currentIdx - 1;
  moveSlide(nextIdx);
});

// 페이저 버튼 정의
const pagerBtns = pager.querySelectorAll("a");

function updateNav() {
  // 슬라이드 li에서 active 클래스를 모두 제거
  allSlides.forEach(slide => {
    slide.classList.remove("active");
  });

  // 페이저 버튼에서 active 클래스를 모두 제거 및 현재 페이저 버튼에 active 클래스 추가
  pagerBtns.forEach(pb => {
    pb.classList.remove("active");
  });
  pagerBtns[(currentIdx + slideCount) % slideCount].classList.add("active");

  // 왼쪽 복사본의 처음에 도달하면(ci === -5), 원본의 처음 위치로 이동 (ul Left = 0, currentIdx = 0)
  if (currentIdx === -slideCount) {
    setTimeout(() => {
      slideContainer.classList.remove("animated");
      slideContainer.style.left = 0;
      currentIdx = 0;
      allSlides[currentIdx + slideCount].classList.add("active");
    }, 300);
    setTimeout(() => {
      slideContainer.classList.add("animated");
    }, 320);
  }

  // 복사본의 마지막에 도달하면(ci === 9), 원본의 마지막 위치로 이동 (ul Left = -400%, currentIdx = 4)
  if (currentIdx === slideCount * 2 - 1) {
    setTimeout(() => {
      slideContainer.classList.remove("animated");
      slideContainer.style.left = `${(slideCount - 1) * -100}%`;
      currentIdx = slideCount - 1;
      allSlides[currentIdx + slideCount].classList.add("active");
    }, 300);
    setTimeout(() => {
      slideContainer.classList.add("animated");
    }, 320);
  }

  // 현재 슬라이드에만 active 클래스 추가
  allSlides[currentIdx + slideCount].classList.add("active");

  // updateNav 종료
}

updateNav();

// pager로 슬라이드 이동하기
pagerBtns.forEach((pb, idx) => {
  pb.addEventListener("click", e => {
    e.preventDefault();
    moveSlide(idx);
  });
});

// + 자동 슬라이드
// 일정시간마다 할 일 : setInterval(할일, 시간)
// 슬라이드 멈추기 : clearInterval(대상);
let timer;
function autoSlide() {
  timer = setInterval(() => {
    let nextIdx = currentIdx + 1;
    moveSlide(nextIdx);
  }, 4000);
}
autoSlide();

// slidewrapper에 마우스가 들어오면 자동 슬라이드 멈추기
slideWrapper.addEventListener("mouseenter", () => {
  clearInterval(timer);
});

slideWrapper.addEventListener("mouseleave", () => {
  autoSlide();
});
