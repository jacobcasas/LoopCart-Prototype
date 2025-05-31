import { products } from "./api.js";

const searchInput = document.getElementById("searchbar-home");
const searchResults = document.getElementById("search-results-home");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const results = products.filter(product =>
    product.title.toLowerCase().includes(query)
  );

  renderResults(results);
});

const renderResults = (results) => {
  searchResults.innerHTML = "";

  if (results.length === 0) {
    searchResults.innerHTML = "<p>No results found</p>";
    return;
  }

  results.forEach(product => {
    const resultItem = document.createElement("div");
    resultItem.classList.add("search-result-item");
    resultItem.innerHTML = `
      <img src="${product.img}" alt="${product.title}" class="search-home-img">
      <span class="search-result-title | bolder ${product.color}">${product.title}</span>
    `;

    resultItem.addEventListener("click", () => {
      window.location.href = `product.html?id=${product.id}`;
      searchInput.value = '';
    });

    searchResults.appendChild(resultItem);
  });
}
