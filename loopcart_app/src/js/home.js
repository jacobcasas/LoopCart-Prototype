import { products } from "./api.js";

const searchInput = document.getElementById("searchbar-home");
const searchResults = document.getElementById("search-results-home");
const searchIcon = document.getElementById("search-icon");
const searchContainer = document.getElementById("search-container");
const topNavContent = document.getElementById("top-nav-container");
const closeSearchButton = document.getElementById("close-search");

let debounceTimeout;

const openSearch = () => {
  topNavContent.classList.add('hidden');
  searchContainer.classList.remove('hidden');
  searchContainer.classList.add('active');
  searchInput.focus();
}

const closeSearch = () => {
  topNavContent.classList.remove("hidden");
  searchContainer.classList.remove("active");
  searchContainer.classList.add("hidden");
  searchResults.classList.remove("show");
  searchInput.value = "";
}

if (searchIcon && searchContainer && topNavContent && searchInput && closeSearchButton) {
  searchIcon.addEventListener("click", openSearch);
  closeSearchButton.addEventListener("click", closeSearch);
}

searchInput.addEventListener("input", () => {
  clearTimeout(debounceTimeout)
  debounceTimeout = setTimeout(() => {
    const query = searchInput.value.toLowerCase();

    if (query === "") {
      searchResults.innerHTML = '';
      searchResults.classList.remove('show');
      return;
    }

    const results = products.filter(product =>
      product.title.toLowerCase().includes(query)
    );
  
    renderResults(results);
    
  }, 900);
});

const renderResults = (results) => {
  searchResults.innerHTML = "";

  if (results.length === 0) {
    searchResults.innerHTML = "<p>No results found</p>";
    searchResults.classList.add('show');
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
      searchResults.classList.remove('show');
    });

    searchResults.appendChild(resultItem);
  });

  searchResults.classList.add('show');
}

document.addEventListener('click', e => {
  if (!e.target.closest('.search-container')) {
    searchResults.classList.remove('show');
  }
});
