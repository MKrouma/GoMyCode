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



// RUNNING
calculateAll()
addRemoveListeners()