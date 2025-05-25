import { shoppingLists } from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const shoppingListId = parseInt(params.get("id"));

    console.log(shoppingListId); 

    const shoppingList = shoppingLists.find(p => p.id === shoppingListId);

    const container = document.getElementById("shopping-list-details");
    const listTitle = document.getElementById("list-title");
    

  if (shoppingList) {
    listTitle.textContent = shoppingList.name;

    if (shoppingList.listItems) {
      const listHTML = shoppingList.listItems.map(category => `
        <h4 class="${category.color || ""} boldest">${category.category}</h4>
        <ul>
          ${category.items.map(item => `
            <li>${item.quantity} × ${item.title}</li>
          `).join("")}
        </ul>
      `).join("");

      container.innerHTML = listHTML;
    } else {
      container.innerHTML = `<p>No items in this shopping list.</p>`;
    }
  } else {
    container.innerHTML = `<p>Shopping list not found.</p>`;
  }
});
        