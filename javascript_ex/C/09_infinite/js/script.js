// Variables
const slideWrapper = document.querySelector(".slide-wrapper");
const slideContainer = slideWrapper.querySelector(".slide-container");
const slides = slideContainer.querySelectorAll("li");
let currentIdx = 0;
let isAnimating = false;
const prevBtn = slideWrapper.querySelector("#prev");
const nextBtn = slideWrapper.querySelector("#next");
const slideCount = slides.length;
const pager = slideWrapper.querySelector(".pager");

// Clone test
/*
cloneNode(true) copies the target element.

A.append(B) moves B to the end of A.
A.prepend(B) moves B to the beginning of A.
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

// Create pager
let pagerHTML = "";
slides.forEach((slide, idx) => {
  pagerHTML += `<a href="#">${idx}</a>`;
  slide.style.left = `${idx * 100}%`;
});
pager.innerHTML = pagerHTML;

slides.forEach(slide => {
  let cloneSlide = slide.cloneNode(true);
  cloneSlide.classList.add("clone");
  slideContainer.append(cloneSlide);
});

for (let i = slideCount - 1; i >= 0; i--) {
  let cloneSlide = slides[i].cloneNode(true);
  cloneSlide.classList.add("clone");
  slideContainer.prepend(cloneSlide);
}

// Set slide layout
const allSlides = slideContainer.querySelectorAll("li");
slideContainer.style.width = `${allSlides.length * 100}%`;
slideContainer.style.transform = `translateX(${1 / 3}%)`;

function updateNav() {
  allSlides.forEach(slide => {
    slide.classList.remove("active");
  });
  pagerBtns.forEach(pb => {
    pb.classList.remove("active");
  });

  pagerBtns[(currentIdx + slideCount) % slideCount].classList.add("active");
  allSlides[currentIdx + slideCount].classList.add("active");
}

function jumpToSlide(num) {
  slideContainer.classList.remove("animated");
  slideContainer.style.left = `${num * -100}%`;
  currentIdx = num;
  updateNav();

  slideContainer.offsetWidth;
  slideContainer.classList.add("animated");
}

function moveSlide(num) {
  if (isAnimating || num === currentIdx) return;

  isAnimating = true;
  slideContainer.style.left = `${num * -100}%`;
  currentIdx = num;
  updateNav();
}

nextBtn.addEventListener("click", e => {
  e.preventDefault();
  moveSlide(currentIdx + 1);
});

prevBtn.addEventListener("click", e => {
  e.preventDefault();
  moveSlide(currentIdx - 1);
});

const pagerBtns = pager.querySelectorAll("a");

slideContainer.addEventListener("transitionend", e => {
  if (e.propertyName !== "left") return;

  if (currentIdx === slideCount * 2 - 1) {
    jumpToSlide(slideCount - 1);
  }

  if (currentIdx === -slideCount) {
    jumpToSlide(0);
  }

  isAnimating = false;
});

updateNav();

// Move slide with pager
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
