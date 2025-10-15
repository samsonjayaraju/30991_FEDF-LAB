import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "10px auto",
        padding: "10px",
        width: "300px",
        borderRadius: "8px",
      }}
    >
      <h3>{book.title}</h3>
      <p>by {book.author}</p>
      <Link to={`/book/${book.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default BookCard;
