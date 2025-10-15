import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import BookCard from "./components/BookCard";
import BookDetail from "./components/BookDetail";

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Simulate fetching from an API using axios
    axios
      .get("/api/books") // You can replace this with a real API endpoint later
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h1>📚 Book Explorer</h1>

      <Routes>
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
        <Route path="/book/:id" element={<BookDetail books={books} />} />
      </Routes>
    </div>
  );
};

export default App;
