export function displayBooks(books) {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = "";

  books.forEach((book, index) => {
    const bookDiv = document.createElement("div");
    bookDiv.className = "book";

    bookDiv.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Price: $${book.price}</p>
      <p>${book.available ? "In Stock" : "Out of Stock"}</p>
      <button ${!book.available ? "disabled" : ""} data-index="${index}">
        Add to Cart
      </button>
    `;
    bookList.appendChild(bookDiv);
  });
}
