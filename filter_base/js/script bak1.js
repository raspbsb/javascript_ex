const productList = document.querySelector(".product_list");
const items = [...productList.querySelectorAll(".item")];

const filterBtns = document.querySelectorAll(".filters button");
const sortBtns = document.querySelectorAll(".sorts button");
const filterSelect = document.querySelector("#filter");
const sortSelect = document.querySelector("#sort");

let currentFilter = "*";
let currentSort = "default";

// 필터 버튼 클릭
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    currentFilter = btn.dataset.filter;
    filterSelect.value = currentFilter;
    renderItems();
  });
});

// 필터 select 변경
filterSelect.addEventListener("change", () => {
  currentFilter = filterSelect.value;
  renderItems();
});

// 정렬 버튼 클릭
sortBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    currentSort = btn.dataset.sort;
    sortSelect.value = currentSort;
    renderItems();
  });
});

// 정렬 select 변경
sortSelect.addEventListener("change", () => {
  currentSort = sortSelect.value;
  renderItems();
});

function renderItems() {
  let filteredItems = getFilteredItems();
  let sortedItems = getSortedItems(filteredItems);

  productList.innerHTML = "";

  sortedItems.forEach(item => {
    item.style.display = "block";
    productList.appendChild(item);
  });
}

function getFilteredItems() {
  if (currentFilter === "*") {
    return [...items];
  }

  return items.filter(item => item.matches(currentFilter));
}

function getSortedItems(arr) {
  let sortedArr = [...arr];

  if (currentSort === "asc") {
    sortedArr.sort((a, b) => a.dataset.order - b.dataset.order);
  }

  if (currentSort === "desc") {
    sortedArr.sort((a, b) => b.dataset.order - a.dataset.order);
  }

  if (currentSort === "random") {
    sortedArr.sort(() => Math.random() - 0.5);
  }

  return sortedArr;
}
