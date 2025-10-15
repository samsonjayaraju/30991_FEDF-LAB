import { displayBooks } from "./display.js";
import { setupEventListeners } from "./ui.js";

async function init() {
  const response = await fetch("./data/books.json");
  const books = await response.json();

  displayBooks(books);
  setupEventListeners(books);
}

init();
