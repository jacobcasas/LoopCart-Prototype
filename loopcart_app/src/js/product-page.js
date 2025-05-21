import { products } from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get("id"));

  console.log(productId); // debug

  const product = products.find(p => p.id === productId);

  const container = document.getElementById("product-details");

  if (product) {
    container.innerHTML = `
      <img src="${product.img}" alt="${product.title}">
      <div class="product-content">
        <div class="title-and-size">
          <h3 class="${product.color}">${product.title}</h3>
          <p class="small-text">${product.size}</p>
        </div>
        <div class="price">
          <h6 class="guava">${product.price}</h6>
          <p class="xs-text">${product.discount}</p>
        </div>
        <p class="boldest gray-600">${product.source}</p>
      </div>
    `;
  } else {
    container.innerHTML = `<p class="bolder gray-400">Product not found</p>`;
  }
});
