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
        <h3 class="${category.color || ""} boldest">${category.category}</h3>
        <ul>
          ${category.items.map(item => `
            <li class="boldest">${item.quantity} × ${item.title}</li>
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

  const editButton = document.getElementById('edit-button');
  if (editButton) {
    editButton.addEventListener('click', () => {
      window.location.href = `edit-list.html?id=${shoppingListId}`;
    });
  };
});
        