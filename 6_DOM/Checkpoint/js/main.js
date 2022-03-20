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

  addMinusPlusListeners();
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
        <button class="minus-plus-btn minus-btn">-</button>
        <input type="text" class="quantity" width="30px" value=${quantity}>
        <button class="minus-plus-btn plus-btn">+</button>
    </td>
    <td class="price"><span>${price}</span> fr</td>
    <td class="subtotal"><span>$</span> fr</td>
  </tr>
  `;

  // Create DOM Html element
  const trElement = document.createElement('tr');
  trElement.className = 'product';

  // tbody innerHTML append newProduct
  trElement.innerHTML = newProductRow;

  // Fetch tbody parent of tr
  const tbodyElement = createProductRow.parentNode.previousElementSibling;

  // add new product tr in tbody
  tbodyElement.appendChild(trElement);

  // Listeners 
  addMinusPlusListeners();
  addRemoveListeners();
  calculateAll();

  // Clear
  nameInputElement.value = "";
  quantityInputElement.value = "1";
  priceInputElement.value = 0;
  
}


function addCreateListeners() {
  const createBtnElement = document.getElementById('add-product');
  createBtnElement.addEventListener('click', createProduct);
  console.log("New Product", createBtnElement)
}


// 5. Minus & plus 
function minusQuantity(event) {
  console.log("Developping minus func")
  const minusQuantityElement = event.currentTarget
  const quantityElement = minusQuantityElement.parentNode.querySelector('input.quantity');

  var quantity = parseInt(quantityElement.value);
  console.log("Actual quantity", quantity);

  if (quantity > 0) {
    quantity = quantity - 1;
  } else {
    console.log("Quantity set to Zero");
  }

  quantityElement.value =  parseInt(quantity);

  calculateAll();
}

function plusQuantity(event) {
  console.log("Developping minus func")
  const minusQuantityElement = event.currentTarget
  const quantityElement = minusQuantityElement.parentNode.querySelector('input.quantity');

  var quantity = parseInt(quantityElement.value);
  console.log("Actual quantity", quantity);

  quantity = quantity + 1;
  quantityElement.value =  parseInt(quantity);

  calculateAll();
}

function addMinusPlusListeners() {
  // minus listeners
  const allMinusBtnElement = document.querySelectorAll('button.minus-btn');
  console.log("Length", allMinusBtnElement)
  for (let minusBtnElement of allMinusBtnElement) {
    minusBtnElement.addEventListener('click', minusQuantity);
  }

  // plus listeners
  const allPlusBtnElement = document.querySelectorAll('button.plus-btn');
  for (let plusBtnElement of allPlusBtnElement) {
    plusBtnElement.addEventListener('click', plusQuantity);
  }
}

// RUNNING
addMinusPlusListeners();
calculateAll();
addRemoveListeners();
addCreateListeners();
