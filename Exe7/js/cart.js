let cart = [];

export function addToCart(book) {
  cart.push(book);
  updateCartDisplay();
}

export function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartDisplay();
}

export function getTotal() {
  return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
}

export function updateCartDisplay() {
  const cartDiv = document.getElementById("cart");
  const totalDiv = document.getElementById("total");
  cartDiv.innerHTML = "";

  cart.forEach((book, index) => {
    const item = document.createElement("div");
    item.innerHTML = `
      ${book.title} - $${book.price}
      <button data-remove="${index}">Remove</button>
    `;
    cartDiv.appendChild(item);
  });

  totalDiv.textContent = `Total: $${getTotal()}`;
}
