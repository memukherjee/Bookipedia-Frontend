import React from "react";
import Book from "./Book";
import "./styles/ResultList.css";

function ResultList({ books }) {
  return (
    <div className="list-of-books">
      {books.map((book) => {
        return (
          <Book key={book.id} book={book}/>
        );
      })}
    </div>
  );
}

export default ResultList;
