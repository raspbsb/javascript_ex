const swiper = new Swiper(".basic", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
});

const defaultSlide = new Swiper(".default-slide", {
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

const controlSlide = new Swiper(".control-slide", {
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".grandWrapper .swiper-button-next",
    prevEl: ".grandWrapper .swiper-button-prev",
  },
});

// controlSlide2
const controlSlide2 = new Swiper(".control-slide2", {
  direction: "horizontal",
  loop: true,
});

const csprevBtn = document.querySelector(".grandWrapper2 .prev");
const csnextBtn = document.querySelector(".grandWrapper2 .next");

csprevBtn.addEventListener("click", () => {
  controlSlide2.slidePrev();
});
csnextBtn.addEventListener("click", () => {
  controlSlide2.slideNext();
});

let multipleSwiper = new Swiper(".multiple-wrapper", {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,

  breakpoints: {
    // when window width is >= 320px
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// active-slide
let activeSlides = document.querySelectorAll(".active-slider > div");
const activeSlide = new Swiper(".active-wrapper", {
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".active-wrapper .swiper-button-next",
    prevEl: ".active-wrapper .swiper-button-prev",
  },

  on: {
    init: function () {
      activeSlides[0].classList.add("active");
    },
  },
});

activeSlide.on("slideChange", function () {
  console.log("슬라이드 이동");
  console.log(activeSlide.activeIndex, activeSlide.realIndex);
  // 모든 슬라이드에서 active 제거, 현 활성화 슬라이드 active 제거

  activeSlides.forEach(slide => {
    slide.classList.remove("active");
  });
  activeSlides[activeSlide.realIndex].classList.add("active");
});

const optionSwiper = new Swiper(".option", {
  direction: "horizontal",
  loop: true,

  autoplay: {
    delay: 2000,
    pauseOnMouseEnter: true,
  },
});

const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");

startBtn.addEventListener("click", () => {
  optionSwiper.autoplay.resume();
});
stopBtn.addEventListener("click", () => {
  optionSwiper.autoplay.pause();
});

// video-Swiper
const videoSlides = document.querySelectorAll(".video-slider > div");
const videoSwiper = new Swiper(".video-wrapper", {
  direction: "horizontal",
  loop: true,
  on: {
    init: function () {
      if (videoSlides[this.realIndex].querySelector("video")) {
        videoSlides[this.realIndex].querySelector("video").play();
      }
    },
  },
});

// 비디오 재생 대상.play(), 대상.pause();
// videoSwiper 슬라이드 이동하면 할일
// 모든 슬라이드 안에서 비디오가 있다면 비디오 재생 멈춤
// 현재 슬라이드 안에 비디오가 있다면 그 비디오 재생

videoSwiper.on("slideChange", function () {
  console.log(videoSwiper.realIndex);
  videoSlides.forEach(slide => {
    let video = slide.querySelector("video");
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  });
  videoSlides[videoSwiper.realIndex].querySelector("video")?.play();
});

// Tabs
const tabMenu = document.querySelectorAll("#tabs a");
const tabContents = document.querySelectorAll("#tabs > div");

tabMenu.forEach(tm => {
  tm.addEventListener("click", e => {
    e.preventDefault();
    tabContents.forEach(tc => {
      tc.classList.remove("active");
    });
    let target = e.target.getAttribute("href");
    document.querySelector(target).classList.add("active");
  });
});

//tabslider-wrapper
const tabswiper = new Swiper(".tabslide-wrapper", {
  direction: "horizontal",
  loop: true,
});
