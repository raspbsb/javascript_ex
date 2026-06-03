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

    // products마다 할일
    // 12개 요소 생성해서 빈요소 뒤에 넣기
    // product-grid에 fragment의 내용을 html태그로 생성

    for (let i = 0; i < products.length; i++) {
      const card = document.createElement("article"); // 빈 요소에 태그 추가

      card.className = "product-card";

      card.innerHTML = `
        <img
          src="${products[i].thumbnail}"
          alt="${products[i].title}"
        />
        <div class="product-info">
          <h3>${products[i].title}</h3>
          <p>${products[i].description}</p>
          <div class="product-bottom">
            <strong>${products[i].price}$</strong>
            <button
              type="button"
              class="cart-add"
              aria-label="${products[i].title} 장바구니 담기"
            ></button>
          </div>
        </div>
      `;
      frag.appendChild(card);
    }
    grid.appendChild(frag);
    desctotal.textContent = `총 ${total}개 상품`;
  } catch (error) {
    console.log("상품 조회 실패", error);
  } finally {
  }
}

fetchProducts();
