const API = "https://dummyjson.com/products";
const LIMIT = 12; // 한 페이지당 보여줄 개수
let skip = 0; // 건너뛸 상품의 개수(즉, 이미 로드한 상품의 개수)
let total = null; // 전체 상품의 개수
let isLoading = false;

const grid = document.getElementById("grid");
const moreBtn = document.getElementById("more-btn");
const errorBox = document.getElementById("error");
const sub = document.querySelector("#sub");
const reloadBtn = document.querySelector("#reloadBtn");

// 스켈레톤 UI 생성 함수
function renderSkeleton(count = LIMIT) {
  const frag = document.createDocumentFragment(); // fragment 빈요소 생성

  //  12개 요소 생성해서 빈요소에 넣기
  for (let i = 0; i < count; i++) {
    const card = document.createElement("article"); // 빈 요소에 태그 추가
    card.className = "card";
    card.setAttribute("aria-hidden", "true"); // 빈 요소에 속성/HTML 추가
    card.innerHTML = `
      <div class="media skeleton"></div>
      <div class="content gap-8">
        <div class="skeleton line" style="width: 70%"></div>
        <div class="skeleton line" style="width: 40%"></div>
        <div class="skeleton line" style="width: 55%"></div>
      </div>
  `;
    frag.appendChild(card); // card의 내용(태그/속성/HTML)을 frag(빈 요소)의 뒤에
  } // 를 (count)번 반복
  grid.appendChild(frag); //
}

// 스켈레톤 UI 제거 함수
function clearSkeleton() {
  document.querySelectorAll(".card").forEach(c => {
    if (c.querySelector(".skeleton")) c.remove();
  });
}

// 무한 스크롤
let iO = new IntersectionObserver(
  function (entries) {
    // intersectionRatio가 0이라는 것은 대상을 볼 수 없다는 것이므로
    // 아무것도 하지 않음
    if (entries[0].intersectionRatio <= 0) return;

    fetchProducts();
  },
  { rootMargin: "-100px" },
);
// 주시 시작
iO.observe(moreBtn);

// 상품 조회 함수
async function fetchProducts() {
  if (isLoading) return; // 상품 로딩중에는 작업 중지
  isLoading = true; // 상품 로딩중
  grid.setAttribute("aria-busy", "true"); // 생성중일 때는 스크린리더가 읽지 않게 함
  renderSkeleton(); // 본 상품 조회 태그 생성 전에 뼈대 보여주기

  try {
    const q = new URLSearchParams({ limit: String(LIMIT), skip: String(skip) }); // limit=12&skip=0
    console.log(q.toString());

    // 비동기 작동 보장
    const res = await fetch(`${API}/?${q.toString()}`);
    if (!res.ok) throw new Error(`API 오류 : ${res.status}`);
    const data = await res.json();
    console.log(data.products);
    clearSkeleton(); // 뼈대 제거

    // 상품 태그 생성
    const frag = document.createDocumentFragment(); // fragment 빈요소 생성
    data.products.forEach(p => frag.appendChild(productCard(p))); // 상품 데이터를 하나씩 꺼내서 p로 productCard에 인수로 넣고, 그 결과를 frag 내부의 자식들의 뒤에 추가
    grid.appendChild(frag);

    total = data.total;

    // 스킵할 개수를 갱신
    skip += LIMIT;

    // 현재 로드한 개수 표시
    sub.textContent = `총 ${total}개 중 ${Math.min(skip, total)}개 표시`;

    // 버튼.disabled = true
    // 상품을 모두 로드하면 버튼 비활성화
    if (total != null && skip >= total) {
      moreBtn.disabled = true;

      // skip값이 total 이상이 되면 중지 무한스크롤 중지
      iO.unobserve(moreBtn);
    }
  } catch (err) {
    // console.log(err);
    errorBox.textContent = "데이터를 불러오지 못했습니다. 잠시 후 다시 시도해주세요.";
    errorBox.classList.add("show");
  } finally {
    // 성공/실패 상관없이 실행
    isLoading = false; // 상품 로딩 종료
    grid.removeAttribute("aria-busy");
  }
}
fetchProducts();

function productCard(p) {
  const card = document.createElement("article"); // 빈 요소에 태그 추가
  card.className = "card";
  card.innerHTML = `
      <img class="media" loading="lazy" src="${p.thumbnail}" alt="">
      <div class="content">
        <h3 class="title">${escapeHTML(p.title)}</h3>
        <div class="brand">${escapeHTML(p.brand)}</div>
        <div class="footer flex-between">
          <span class="price">${p.price}</span>
          <span class="rate">${p.rating?.toFixed(1) ?? p.rating}</span>
        </div>
      </div>
  `;

  return card;
}

function escapeHTML(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// 더보기 버튼 클릭시 상품 로드
moreBtn.addEventListener("click", () => {
  fetchProducts();
});

// 새로고침
reloadBtn.addEventListener("click", () => {
  skip = 0;
  total = null;
  grid.innerHTML = "";
  moreBtn.disabled = false;
  fetchProducts();
  iO.observe(moreBtn);
});
