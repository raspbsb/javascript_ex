// products마다 할일
// 12개 요소 생성해서 빈요소 뒤에 넣기
// product-grid에 fragment의 내용을 html태그로 생성

export function renderProductCards(products, frag) {
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
}
