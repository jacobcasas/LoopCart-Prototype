import { searchableProducts, shoppingLists } from "./api";

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const shoppingListId = parseInt(params.get("id"));
    const shoppingList = shoppingLists.find(p => p.id === shoppingListId);

    const cartTitle = document.getElementById('cart-title');
    const cartItems = document.getElementById('cart-items');
    const priceShopList = document.getElementById('price-shoplist');
    const searchInput = document.getElementById('searchbar-shoplist');
    const searchResults = document.getElementById('search-results');

    if (!shoppingList || !cartTitle || !cartItems || !priceShopList) {
        console.error("Missing shopping list or page elements.");
        return;
    }

    let currentId = 1;
    shoppingList.listItems.forEach(category => {
        category.items.forEach(item => {
            if (item.id === undefined) {
                item.id = currentId++;
            }
        });
    });

    // Render the shopping cart
    const renderCart = () => {
        cartTitle.textContent = shoppingList.name;

        const itemsHTML = shoppingList.listItems.map(category => {
            return category.items.map(item => {
                return `
                    <div class="cart-item-card" data-item-id="${item.id}">
                        <img class="cart-item-image" src="${item.img}" alt="${item.title}" width="136">
                        <div class="cart-right-container">
                            <div class="cart-item-text-content">
                                <div class="title-and-price">
                                    <h5 class="${item.color} ${category.color} bolder truncated">${item.title}${item.quantity > 1 ? "s" : ""}</h5>
                                    <p class="small-text">$${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                                <p>${item.source}</p>
                            </div>
                            <div class="quantity-controller-cart">
                                ${
                                    item.quantity > 1 
                                    ? `<button class="decrease-quantity-cart boldest change-quantity">-</button>`
                                    : `<button class="trash-button"><img src="src/icons/trash-bin.svg" alt="trash bin"></button>`
                                }
                                <p class="bolder">${item.quantity}</p>
                                <button class="increase-quantity-cart boldest change-quantity">+</button>
                            </div>
                        </div>
                    </div>
                `;
            }).join("");
        }).join("");

        cartItems.innerHTML = itemsHTML;

        // Cart Subtotal
        const subtotal = shoppingList.listItems.reduce((total, category) => {
            return total + category.items.reduce((cartTotal, item) => {
                return cartTotal + (item.price * item.quantity);
            }, 0);
        }, 0);

        priceShopList.textContent = subtotal.toFixed(2);
    };

    // Event delegation for quantity and delete buttons
    cartItems.addEventListener('click', (e) => {
        const card = e.target.closest('.cart-item-card');
        if (!card) return;

        const itemId = parseInt(card.dataset.itemId);
        if (isNaN(itemId)) return;

        shoppingList.listItems.forEach(category => {
            const itemIndex = category.items.findIndex(item => item.id === itemId);
            if (itemIndex === -1) return;

            const foundItem = category.items[itemIndex];

            if (e.target.closest('.increase-quantity-cart')) {
                foundItem.quantity++;
            } else if (e.target.closest('.decrease-quantity-cart')) {
                if (foundItem.quantity > 1) {
                    foundItem.quantity--;
                }
            } else if (e.target.closest('.trash-button')) {
                category.items.splice(itemIndex, 1);
            }
        });

        renderCart();
    });
    
    searchInput.addEventListener('input', async (e) => {
        const query = e.target.value.trim().toLowerCase();
        

        if (!query) {
            searchResults.innerHTML = "";
            searchResults.classList.add('hidden');
            return;
        }

        searchResults.classList.remove('hidden');

        const products = await searchableProducts(query);

        const resultsHTML = products.map(product => `
            <div class="search-result-item" data-product-id="${product.id}">
                <img class="search-result-img" src="${product.img}" alt="${product.title}">
                <div class="title-and-add-button">
                    <span class="search-result-title | bolder ${product.color}">${product.title}</span>
                    <button class="add-product-button | bolder">Add</button>
                </div>
            </div>
        `).join("");

        searchResults.innerHTML = resultsHTML;
    });

    searchResults.addEventListener('click', e => {
        if (!e.target.classList.contains('add-product-button')) return;

        const productItem = e.target.closest('.search-result-item');
        const productId = parseInt(productItem.dataset.productId);

        searchableProducts().then(products => {
            const foundProduct = products.find(p => p.id === productId);
            if (!foundProduct) return;

            let customCategory = shoppingList.listItems.find(c => c.name === "Custom Additions");
            if (!customCategory) {
                customCategory = {name: "Custom Additions", color: "custom color", items: []};
                shoppingList.listItems.unshift(customCategory);
            }

            const newProduct = {...foundProduct, id: currentId++, quantity: 1};
            customCategory.items.unshift(newProduct);

            searchInput.value = "";

            searchResults.classList.add('hidden');

            renderCart();
        })
    });

    renderCart();
});