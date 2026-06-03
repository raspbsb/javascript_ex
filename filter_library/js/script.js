// external js: isotope.pkgd.js

// init Isotope
var iso = new Isotope(".product_list", {
  itemSelector: ".item",
  layoutMode: "fitRows",
  getSortData: {
    order: "[data-order] parseInt",
  },
});

// bind filter button click
var filtersElem = document.querySelector(".filters");
filtersElem.addEventListener("click", function (event) {
  // only work with buttons
  if (!matchesSelector(event.target, "button")) {
    return;
  }
  var filterValue = event.target.getAttribute("data-filter");
  iso.arrange({ filter: filterValue });
});

const filterSelect = document.querySelector("#filter");

filterSelect.addEventListener("change", e => {
  let filterValue = e.target.value;
  iso.arrange({ filter: filterValue });
});

// bind sort button click
var sortByGroup = document.querySelector(".sorts");
sortByGroup.addEventListener("click", function (event) {
  // only button clicks
  if (!matchesSelector(event.target, "button")) {
    return;
  }
  var sortValue = event.target.getAttribute("data-sort");
  console.log(sortValue);
  sortItems(sortValue);
});

function sortItems(sortValue) {
  if (sortValue === "asc") {
    iso.arrange({
      sortBy: "order",
      sortAscending: true,
    });
  }
  if (sortValue === "desc") {
    iso.arrange({
      sortBy: "order",
      sortAscending: false,
    });
  }
  if (sortValue === "random") {
    iso.shuffle();
  }
}

const sortSelect = document.querySelector("#sort");
sortSelect.addEventListener("change", e => {
  let sortValue = e.target.value;
  sortItems(sortValue);
});
