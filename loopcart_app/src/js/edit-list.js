import { shoppingLists } from "./api";
import { products } from "./api.js";

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
            const itemsHTML = shoppingList.listItems.map(() => {
                `<div class="item-card">
                    <img src="${products.img}">`
            })
        }
    } else {
        cartTitle.textContent = `Error`;
    };
})