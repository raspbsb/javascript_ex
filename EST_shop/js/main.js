// renderProductCards 함수 불러오기
import { renderProductCards } from "./modules/renderProductCards.js";

//상품 조회
async function fetchProducts() {
  try {
    const res = await fetch("./data/products.json");
    const data = await res.json();
    console.log(data);
    let startIndex = 0;
    let total = null;
    const PRODUCT_LIMIT = 12;
    const grid = document.querySelector(".product-grid");
    const products = data.products.slice(startIndex, startIndex + PRODUCT_LIMIT);
    console.log(products);
    const desctotal = document.querySelector(".products-tools > span");
    console.log(desctotal);

    // fragment 빈요소 생성
    const frag = document.createDocumentFragment();
    total = data.total;

    // 빈 요소 생성해서 html 텍스트 생성 12번 반복 후 빈요소 뒤에 넣고 html에 렌더링
    renderProductCards(products, frag);

    // 그리드에 내용이 채워진 요소를 넣기
    grid.appendChild(frag);
    desctotal.textContent = `총 ${total}개 상품`;

    // const productHTML = products.map(item => <article></article>);
  } catch (error) {
    console.log("상품 조회 실패", error);
  } finally {
  }
}

fetchProducts();
