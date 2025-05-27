import { shoppingLists } from "./api";

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const shoppingListId = parseInt(params.get("id"));

    console.log(shoppingListId);

    const shoppingList = shoppingLists.find(p => p.id === shoppingListId);

    const cartTitle = document.getElementById('cart-title');
    const cartItems = document.getElementById('cart-items');

    if (shoppingList) {
        cartTitle.textContent = shoppingList.name;

        if (shoppingList.listItems) {
            const itemsHTML = shoppingList.listItems.map(category => {
                return category.items.map(item => {
                    return `
                        <div class="cart-item-card">
                            <img src="${item.img}" alt="${item.title}" width=136>
                            <div class="cart-item-content">
                                <div class="title-and-price">
                                    <h3>${item.title}</h3>
                                    <p class="small-text">$${item.price.toFixed(2)}</p>
                                </div>
                                <p>${item.source}</p>
                            </div>
                            <div class="quantity-controller-cart">
                                <button class="boldest">-</button>
                                <p>${item.quantity}</p>
                                <button class="boldest">+</button>
                            </div>
                        </div>
                    `;
                }).join("");
            }).join("");

            cartItems.innerHTML = itemsHTML;
            console.log(itemsHTML);
        };
    };
});