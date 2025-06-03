import { products, shoppingLists } from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get("id"));

  console.log(productId); // debug

  const product = products.find(p => p.id === productId);

  const container = document.getElementById("product-details");

  if (product) {
    container.innerHTML = `
      <img src="${product.img}" alt="${product.title}" class="product-img">
      <div class="product-content">
        <div class="title-and-size">
          <h3 class="${product.color} product-title">${product.title}</h3>
          <p class="small-text">${product.size}</p>
        </div>
        <div class="price-and-source">
            <div class="price">
                <h6 class="guava">$${product.price.toFixed(2)}</h6>
                <p class="xs-text discount">${product.discount}</p>
             </div>
            <p class="boldest gray-600">${product.source}</p>
        </div>
      </div>
    `;

  //quantity controller
    const controller = document.getElementById("quantity");
    const subtract = document.getElementById("subtract");
    const addtion = document.getElementById("add");
    const totalPriceDisplay = document.getElementById("total-product");
    const addToListButton = document.getElementById("add-to-list");
    let count = 1;

    controller.textContent = count;

    const disableButton = () => {
      if (count === 0) {
        addToListButton.style.backgroundColor = `var(--color-gray-400)`;
      } else if (count > 0) {
        addToListButton.style.backgroundColor = `var(--color-brand-guava)`;
      }
    };

    disableButton();

    const updateTotal = () => {
      const total = product.price * count;
      totalPriceDisplay.innerHTML = `<p class="boldest gray-50">Total: $${total.toFixed(2)}</p>`;
    }

    updateTotal();

    subtract.addEventListener('click', () => {
      if (count > 0) {
        count--;
        controller.textContent = `${count}`;
        updateTotal();
        disableButton();
      }
    });

    addtion.addEventListener('click', () => {
        count++;
        controller.textContent = `${count}`;
        updateTotal();
        disableButton();
    });


  const listModal = document.getElementById("list-modal");
  const listOfLists = document.getElementById("list-of-lists");
  const modalContainer = document.getElementById("list-modal-container");

  const fillListOfList = (product) => {
    listOfLists.innerHTML = '';

    shoppingLists.forEach(el => {
      const button = document.createElement('button');
      button.classList.add("list-button");
      button.classList.add("boldest");
      button.textContent = el.name;

      button.addEventListener('click', () => {
        modalContainer.innerHTML = `
        <h4 class="boldest gray-50">Save to "${el.name}"?</h4>
        <div id="save-options">
          <button class="save-buttons | boldest gray-900" id="save-and-stay">Save</button>
          <button class="save-buttons | boldest gray-900" id="save-and-go">Save and go to list</button>
        </div>
        <p class="small-text gray-400" id="cancel">Cancel</p>
        `;

        const saveAndStay = document.getElementById('save-and-stay');
        const saveAndGo = document.getElementById('save-and-go');
        const cancel = document.getElementById('cancel');
        
        saveAndStay.addEventListener('click', () => {
          modalContainer.innerHTML = `
          <h6 class="gray-50">Saved ${count} ${product.title}${count > 1 ? 's' : ''} to ${el.name}</h6>
          `;
          setTimeout(() => {
            backdrop.classList.remove('active');
            listModal.classList.remove('show');
          }, 3000);
        });

        saveAndGo.addEventListener('click', () => {
          window.location.href = `shopping-list.html?id=${el.id}`;
        });

        cancel.addEventListener('click', () => {
          backdrop.classList.remove('active');
          listModal.classList.remove('show');
        })
      });
      
      listOfLists.appendChild(button);
    });
  };
  const backdrop = document.getElementById('modal-backdrop');

  addToListButton.addEventListener('click', () => {
    if (count > 0) {
      backdrop.classList.add('active');
      listModal.classList.add("show");
      fillListOfList(product);
    };
  });

  backdrop.addEventListener('click', () => {
    backdrop.classList.remove('active');
    listModal.classList.remove('show');
  })
  } else {
    container.innerHTML = `<p class="bolder gray-400">Product not found</p>`;
  }
});

