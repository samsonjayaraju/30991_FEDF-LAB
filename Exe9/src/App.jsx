import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import BookCard from "./components/BookCard";
import BookDetail from "./components/BookDetail";

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/api/books.json") // This reads the file from /public/api/books.json
      .then((response) => {
        setBooks(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load book data.");
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading books...</h2>;
  if (error) return <h2 style={{ color: "red" }}>{error}</h2>;

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h1>Book Explorer</h1>

      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <div>
              {books.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          }
        />

        {/* Dynamic Detail Route */}
        <Route path="/book/:id" element={<BookDetail books={books} />} />
      </Routes>
    </div>
  );
};

export default App;
