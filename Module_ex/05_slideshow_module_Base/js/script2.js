const slideshow2 = () => {
  // 변수 지정
  let slideContainer = document.querySelector(".slideshow2");
  let slide = slideContainer.querySelectorAll("li");
  let slideCount = slide.length;
  let currentIdx = 0;
  let timer;

  //첫슬라이드가 나타난다.
  console.log(slideContainer);
  slide[currentIdx].classList.add("active");

  function autoSlide() {
    timer = setInterval(() => {
      let nextIdx = (currentIdx + 1) % slideCount; //0,1,2,3,4
      if (nextIdx == 5) {
        nextIdx = 0;
      }

      slide[currentIdx].classList.remove("active");
      slide[nextIdx].classList.add("active");
      currentIdx = nextIdx;

      console.log(currentIdx);
    }, 3000);
  }
  autoSlide();

  slideContainer.addEventListener("mouseover", () => {
    clearInterval(timer);
  });
  slideContainer.addEventListener("mouseout", () => {
    autoSlide();
  });

  // exports.fadeSlideshow = fadeSlideshow;
};

export default slideshow2;
