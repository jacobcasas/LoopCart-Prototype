import { shoppingLists } from "./api";

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const shoppingListId = parseInt(params.get("id"));
    const shoppingList = shoppingLists.find(p => p.id === shoppingListId);

    const cartTitle = document.getElementById('cart-title');
    const cartItems = document.getElementById('cart-items');
    const priceShopList = document.getElementById('price-shoplist');

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
                                    <h5 class="${category.color}">${item.title}${item.quantity > 1 ? "s" : ""}</h5>
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

    renderCart();
});