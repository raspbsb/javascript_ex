const productWrapper = document.querySelector(".product_list");
const products = productWrapper.querySelectorAll("li");
const filterBtns = document.querySelectorAll(".filters button");
const sortBtns = document.querySelectorAll(".sorts button");

const selectFilter = document.querySelector("#filter");
const selectSort = document.querySelector("#sort");

// 이 페이지가 열리자마자 모든 리스트를 안보이게 한다
// 클래스명 web만 선택해서 안보이게 한다

// 버튼을 클릭하면 할 일
// 모든 리스트가 안보인다.
// 클릭한 그 버튼의 data-filter 속성을 가져와서 filter 이름에 할당한다.
// filterName과 일치하는 클래스명을 가진 리스트를 보이게 한다.

filterBtns.forEach(fb => {
  fb.addEventListener("click", () => {
    let filterName = fb.dataset.filter;
    filterItems(filterName);
  });
});

// Select 메뉴로 필터링하기
// filterName의 값이 *와 같으면 모두 보인다.
// 아니라면 모든 리스트가 안보이고 filterName의 리스트만 보인다.
selectFilter.addEventListener("change", e => {
  let filterName = e.target.value;
  filterItems(filterName);
});

//Filter 함수
function filterItems(filterName) {
  if (filterName === "*") {
    products.forEach(p => {
      p.style.display = "block";
    });
  } else {
    products.forEach(p => {
      p.style.display = "none";
    });
    productWrapper.querySelectorAll(filterName).forEach(p => {
      p.style.display = "block";
    });
  }
}

// sortBtns 버튼으로 정렬
sortBtns.forEach(sb => {
  sb.addEventListener("click", () => {
    let sortName = sb.dataset.sort;
    sortItems(sortName);
  });
});

// sort 함수
function sortItems(sortName) {
  productWrapper.innerHTML = "";
  let sortedArr = [...products];

  if (sortName === "asc") {
    // products.sort((a, b) => a - b);  products 유사배열은 sort 적용불가
    sortedArr.sort((a, b) => a.dataset.order - b.dataset.order);
    console.log(sortedArr);
  }

  if (sortName === "desc") {
    sortedArr.sort((a, b) => b.dataset.order - a.dataset.order);
    console.log(sortedArr);
  }

  if (sortName === "random") {
    sortedArr.sort(() => Math.random() - 0.5);
    console.log(Math.random() - 0.5);
  }

  sortedArr.forEach(item => {
    productWrapper.appendChild(item);
  });
}

// Select 메뉴로 정렬하기
selectSort.addEventListener("change", e => {
  let sortName = e.target.value;
  sortItems(sortName);
});
