export function renderHeader() {
  const header = document.querySelector("#header");
  header.innerHTML = `
    <h1>EST-FE 13</h1>
    <button id="cartBtn">장바구니</button>
  `;
  // addToCart();
}

export function addToCart() {
  const cartBtn = document.querySelector("#cartBtn");
  cartBtn.addEventListener("click", () => {
    alert("장바구니에 상품이 등록되었습니다.");
  });
}
