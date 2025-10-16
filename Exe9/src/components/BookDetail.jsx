import React from "react";
import { useParams, Link } from "react-router-dom";

const BookDetail = ({ books }) => {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) return <p>Book not found.</p>;

  return (
    <div style={{ marginTop: "30px", textAlign: "center" }}>
      <h2>{book.title}</h2>
      <p>
        <strong>Author:</strong> {book.author}
      </p>
      <p>
        <strong>Description:</strong> {book.description}
      </p>
      <p>
        <strong>Rating:</strong> {book.rating}
      </p>
      <Link to="/">
        <button
          style={{
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "4px",
            padding: "6px 10px",
            cursor: "pointer",
          }}
        >
          Back to List
        </button>
      </Link>
    </div>
  );
};

export default BookDetail;
