// 1. Update subtotal 
function updateSubtotal(product) {
    // fetch html collection
    const priceElement = product.querySelector('.price span');
    const qttElement = product.querySelector('input.quantity');
    const subtotalElement = product.querySelector('.subtotal span');

    // Fetch collection value
    const price = priceElement.innerText;
    const quantity = qttElement.value;
  
    // Calculate subtotal 
    const subtotal = parseFloat(price) * parseInt(quantity);
  
    // Actualize subtotal in HTML
    subtotalElement.innerText = subtotal; //.toFixed(2);
  
    return subtotal;
  }


// 2. Calculate ALL
function calculateAll() {
  // Get all HTML collection of product
  const allProducts = document.getElementsByClassName('product');

  // Initialize total
  let total = 0;


  // Execute calcul of subtotal & total
  for (let product of allProducts) {
    total += updateSubtotal(product);
  }

  // get totalElement
  const totalElement = document.querySelector('.total-text span');

  // Update totalElement
  totalElement.innerText = total;
  console.log("TOTAL", total)
}


// 3. Remove product
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const currentRow = target.parentNode.parentNode.parentNode.parentNode.parentNode;
  console.log("The current row", currentRow)
  const tableElement = currentRow.parentNode;

  tableElement.removeChild(currentRow);

  calculateAll();
}

function addRemoveListeners() {
  console.log("removeButtonListener")

  // select remove button
  const allRemoveButtons = document.querySelectorAll('button.supp-btn');
  console.log(allRemoveButtons)

  // add event to each remove button found in node
  for (let buttonElement of allRemoveButtons) {
    buttonElement.addEventListener('click', removeProduct);
  }
}


// 4. Add new product
function createProduct(event) {

  // get addBtn parent tr
  const createProductRow = event.currentTarget.parentNode.parentNode;
  console.log("Parent tr", createProductRow)

  // get nameElement and quantElement
  const nameInputElement = createProductRow.querySelector('input[type=text]');
  const quantityInputElement = createProductRow.querySelector('input.tfoot-quantity');
  const priceInputElement = createProductRow.querySelector('input.tfoot-price');

  const name = nameInputElement.value;
  const quantity = quantityInputElement.value;
  const price = priceInputElement.value;

  console.log("Input name", name)
  console.log("Input quantity", quantity)
  console.log("Input price", price)

  // New product all HTML
  // const newProductRow = `
  // <tr class="product">
  // <td class="name">
  //   <span>${name}</span>
  // </td>
  // <td class="price">$<span>${price}</span></td>
  // <td class="quantity">
  //   <input type="number" value="0" min="0" placeholder="Quantity" />
  // </td>
  // <td class="subtotal">$<span>0</span></td>
  // <td class="action">
  //   <button class="btn btn-remove">Remove</button>
  // </td>
  // </tr>
  // `;

  const newProductRow = `
  <tr class="product">
    <td>
        <div class="article-name">
            <div class="article-img"><img src="res/marmite.jpg" alt=""></div>
            <div class="article-name-supp">
                <p>${name}</p>
                <p><button class="supp-btn">Supprimer</button></p>
            </div>
        </div>
    </td>
    <td>
        <button class="minus-plus-btn minus-btn" onclick=quantityMinus>-</button>
        <input type="text" class="quantity" width="30px" value=${quantity}>
        <button class="minus-plus-btn plus-btn">+</button>
    </td>
    <td class="price"><span>${price}</span> fr</td>
    <td class="subtotal"><span>$</span> fr</td>
  </tr>
  `;

  // Cria o elemento do DOM
  const trElement = document.createElement('tr');
  trElement.className = 'product';

  // Configura o elemento do DOM para ter o conteúdo de novo produto criado anteriormente
  trElement.innerHTML = newProductRow;

  // Seleciona o elemento <tbody> que tem todos os produtos
  const tbodyElement = createProductRow.parentNode.previousElementSibling;

  // Adiciona o elemento do novo produto à <tbody>
  tbodyElement.appendChild(trElement);
  // tbodyElement.innerHTML += newProductRow;

  // Adicionar o event listener no botão remove para o produto recém criado
  addRemoveListeners();
  calculateAll();
}


function addCreateListeners() {
  const createBtnElement = document.getElementById('add-product');
  createBtnElement.addEventListener('click', createProduct);
  console.log("New Product", createBtnElement)
}



// RUNNING
calculateAll()
addRemoveListeners()
addCreateListeners()