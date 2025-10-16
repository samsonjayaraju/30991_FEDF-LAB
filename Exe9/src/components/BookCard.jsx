import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "10px auto",
        padding: "15px",
        width: "300px",
        borderRadius: "8px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <h3>{book.title}</h3>
      <p>by {book.author}</p>
      <Link to={`/book/${book.id}`}>
        <button
          style={{
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "4px",
            padding: "6px 10px",
            cursor: "pointer",
          }}
        >
          View Details
        </button>
      </Link>
    </div>
  );
};

export default BookCard;
