import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [books, setBooks] = useState([]);

  // burada niye bos array olmali??

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("https://anapioficeandfire.com/api/books");
      const data = await response.json();
      console.log(data[0].authors);
      setBooks(data);
    };
    fetchBooks();
  }, []);
  return (
    <div className="App">
      {books.map((book,index) => (
        <div key={index}>
          <h2>{book.name}</h2>
          <p>Author: {book.authors}</p>
          <p>Number of Pages: {book.numberOfPages}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
