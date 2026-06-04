// renderProductCards 함수 불러오기
import { renderProductCards } from "./modules/renderProductCards.js";

// 선택자
const grid = document.querySelector(".product-grid");
const pager = document.querySelector(".pagination .pager");
const pagerPrevBtn =
  document.querySelector(".pagination .prev") ||
  document.querySelector(".pagination > a:first-child");
const pagerNextBtn =
  document.querySelector(".pagination .next") ||
  document.querySelector(".pagination > a:last-child");
const categoryFilter = document.querySelector("#category-filter");
const priceFilter = document.querySelector("#price-filter");
const brandFilter = document.querySelector("#brand-filter");

// pagination
const countPerPage = 12;
const pagerPerGroup = 5; //페이저 그룹당 몇개의 페이저 생성
let currentPage = 1;
let paginationCount = 0;
let currentGroup = 1;

//
let startIndex = 0;

//상품 조회
let products = [];
async function fetchProducts() {
  try {
    const res = await fetch("./data/products.json");
    const data = await res.json();

    products = data.products;

    const pageData = paginate(products, currentPage);

    console.log(data);
    let total = null;

    // json 데이터중 12개 자른거
    console.log(products);

    // 상품개수
    const desctotal = document.querySelector(".products-tools > span");
    console.log(desctotal);

    // fragment 빈요소 생성

    total = data.total;

    // 그리드에 내용이 채워진 요소를 넣기
    desctotal.textContent = `총 ${total}개 상품`;

    // 페이지네이션 생성
    renderCurrentProducts(pageData);
    renderCategories();

    makePagination(data.total);

    // 빈 요소 생성해서 html 텍스트 생성 12번 반복 후 빈요소 뒤에 넣고 html에 렌더링

    // 상품 생성
    // renderProduct();
  } catch (error) {
    console.log("상품 조회 실패", error);
  } finally {
  }
}

fetchProducts();

function renderProduct(data) {
  const productHTML = pageData.map(
    p =>
      `<article class="product-card">
            <img src="${p.thumbnail}" alt="${p.title}">
            <div class="product-info">
              <h3><a href="detail.html?id=${p.id}">${p.title}</a></h3> 
              <p>${p.brand}</p>
              <div class="product-bottom">
                <strong>${p.price}</strong>
                <button type="button" class="cart-add" aria-label="${p.title} 장바구니 담기"></button>
              </div>
            </div>
          </article>`,
  );
  // console.log(productHTML.join());
  grid.innerHTML = productHTML.join("");
}

function renderCurrentProducts(pageData = paginate(products, currentPage)) {
  const frag = document.createDocumentFragment();

  grid.innerHTML = "";
  renderProductCards(pageData, frag);
  grid.appendChild(frag);
}

function makePagination(total) {
  paginationCount = Math.ceil(total / countPerPage); // 예: 9
  const pagerGroupCount = Math.ceil(paginationCount / pagerPerGroup);

  // 현재 그룹의 시작 페이지
  const startPage = (currentGroup - 1) * pagerPerGroup + 1;

  // 현재 그룹의 마지막 페이지
  const endPage = Math.min(startPage + pagerPerGroup - 1, paginationCount);

  let pagerHTML = "";
  // <a href="#" class="active">1</a>
  // <a href="#">2</a>
  // <a href="#">3</a>
  // <a href="#">10</a>

  // pager에 a tag 17개 생성
  for (let i = startPage; i <= endPage; i++) {
    pagerHTML += `<a href="#" class="${i === currentPage ? "active" : ""}">${i}</a>`;
  }
  pager.innerHTML = pagerHTML;

  // 첫/마지막 페이지며 이전/다음버튼 비활성화,
  if (currentGroup === 1) {
    pagerPrevBtn.classList.add("disabled");
  } else {
    pagerPrevBtn.classList.remove("disabled");
  }
  if (currentGroup === pagerGroupCount) {
    pagerNextBtn.classList.add("disabled");
  } else {
    pagerNextBtn.classList.remove("disabled");
  }

  const pagerBtns = pager.querySelectorAll("a");

  pagerBtns.forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      if (currentPage === Number(btn.textContent)) return;
      // 클릭한 그 요소의 숫자를 파악하고, 그 번호를 currentPage에 재할당
      // 상품 출력
      currentPage = Number(btn.textContent);
      renderCurrentProducts();
      pagerBtns.forEach(b => {
        b.classList.remove("active");
      });
      btn.classList.add("active");

      console.log(currentPage);
    });
  });
}

function paginate(data, page) {
  const start = (page - 1) * countPerPage;
  const end = start + countPerPage;

  return data.slice(start, end);
}

pagerPrevBtn.addEventListener("click", e => {
  e.preventDefault();
  moveGroup(-1);
});

pagerNextBtn.addEventListener("click", e => {
  e.preventDefault();
  moveGroup(+1);
});

function moveGroup(direction) {
  currentGroup += direction; //2
  currentPage = (currentGroup - 1) * pagerPerGroup + 1; //6
  makePagination(products.length);
  renderCurrentProducts();
}

//카테고리 생성
function renderCategories() {
  const categories = [...new Set(products.map(p => p.category))];
  console.log(categories);
  //<label><input type="checkbox" name="category" value="beauty" /> beauty</label> -->
  //categoryFilter에 태그 생성
  const frag = document.createDocumentFragment();
  categories.forEach(c => {
    const label = document.createElement("label");
    label.innerHTML = `<label> <input type="checkbox" name="category" value="${c}" />${c}`;
    frag.appendChild(label);
  });
  categoryFilter.appendChild(frag);
}

// 가격대 필터
function renderPrices() {
  const prices = [...new Set(products.map(p => p.price))];
  console.log(prices);
  //<label><input type="checkbox" name="category" value="beauty" /> beauty</label> -->
  //categoryFilter에 태그 생성
  const frag = document.createDocumentFragment();
  categories.forEach(c => {
    const label = document.createElement("label");
    label.innerHTML = `<label> <input type="checkbox" name="category" value="${c}" />${c}`;
    frag.appendChild(label);
  });
  categoryFilter.appendChild(frag);
}

// 브랜드 필터
function renderBrands() {
  const brands = [...new Set(products.map(p => p.brand))];
  const frag = document.createDocumentFragment();
  brands.forEach(b => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="checkbox" name="brand" value="${b}" /> ${b}`;
    frag.appendChild(label);
  });
  brandFilter.appendChild(frag);
}
