// Shopping Cart Array
let cart = [];

// Discount threshold
const DISCOUNT_THRESHOLD = 100;  // Apply discount if total exceeds this
const DISCOUNT_RATE = 0.1;       // 10% discount

// Function to add item to cart
function addItem(name, price, quantity) {
  // Check if item already exists in the cart
  const existingItem = cart.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ name, price, quantity });
  }
  renderCart();
}

// Function to remove item from cart
function removeItem(name) {
  cart = cart.filter(item => item.name !== name);
  renderCart();
}

// Function to update quantity
function updateQuantity(name, quantity) {
  cart.forEach(item => {
    if (item.name === name) {
      item.quantity = quantity;
    }
  });
  renderCart();
}

// Function to calculate total price with discount
function calculateTotal() {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return total >= DISCOUNT_THRESHOLD ? total * (1 - DISCOUNT_RATE) : total;
}

// Function to render cart items
function renderCart() {
  const cartContainer = document.getElementById('cart');
  const totalPriceEl = document.getElementById('total-price');
  cartContainer.innerHTML = '';

  // Display each item in the cart
  cart.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.textContent = `${item.name}: $${item.price} x ${item.quantity}`;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = () => removeItem(item.name);
    itemDiv.appendChild(removeButton);
    cartContainer.appendChild(itemDiv);
  });

  // Calculate and display total price
  const totalPrice = calculateTotal();
  totalPriceEl.textContent = totalPrice.toFixed(2);
}

// Event listener for form submission
document.getElementById('add-item-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('item-name').value;
  const price = parseFloat(document.getElementById('item-price').value);
  const quantity = parseInt(document.getElementById('item-quantity').value);
  addItem(name, price, quantity);
  this.reset();
});

// Sample `map()` usage to apply discount to all items
function applyDiscountToItems() {
  const discountedCart = cart.map(item => {
    return {
      ...item,
      price: item.price * (1 - DISCOUNT_RATE)
    };
  });
  return discountedCart;
}

// Sample `filter()` usage to find items with quantity > 1
function filterItemsByQuantity(minQuantity) {
  return cart.filter(item => item.quantity >= minQuantity);
}

// Sample usage
console.log(applyDiscountToItems()); // List of items with discounted prices
console.log(filterItemsByQuantity(2)); // List of items with quantity >= 2
