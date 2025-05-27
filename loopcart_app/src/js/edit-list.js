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
                            <img class="cart-item-image" src="${item.img}" alt="${item.title}" width=136>
                            <div class="cart-right-container">
                                <div class="cart-item-text-content">
                                    <div class="title-and-price">
                                        <h5 class="${category.color}">${item.title}${item.quantity > 1 ? "s" : ""}</h5>
                                        <p class="small-text">$${(item.price.toFixed(2) * item.quantity).toFixed(2)}</p>
                                    </div>
                                    <p>${item.source}</p>
                                </div>
                                <div class="quantity-controller-cart">
                                    <button class="boldest change-quantity">-</button>
                                    <p>${item.quantity}</p>
                                    <button class="boldest change-quantity">+</button>
                                </div>
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