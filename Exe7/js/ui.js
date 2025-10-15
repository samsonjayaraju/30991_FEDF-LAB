import { addToCart, removeFromCart, updateCartDisplay } from "./cart.js";

export function setupEventListeners(books) {
  const bookList = document.getElementById("book-list");
  const cartDiv = document.getElementById("cart");

  bookList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const index = e.target.getAttribute("data-index");
      addToCart(books[index]);
    }
  });

  cartDiv.addEventListener("click", (e) => {
    if (e.target.getAttribute("data-remove") !== null) {
      const index = e.target.getAttribute("data-remove");
      removeFromCart(index);
    }
  });

  updateCartDisplay();
}
