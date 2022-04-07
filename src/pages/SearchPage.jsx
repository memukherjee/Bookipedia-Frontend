import React, { useState } from "react";
import axios from "axios";

import SearchBar from "../components/SearchBar";
import ResultList from "../components/ResultList";
import "./styles/SearchPage.css";

function SearchPage({ user }) {
  const [searchedBook, setSearchedBook] = useState("");
  const [books, setBooks] = useState([]);

  const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchedBook}&key=${process.env.REACT_APP_BOOK_API_KEY}&maxResults=20`;

  function searchBook() {
    axios.post(`${process.env.REACT_APP_API_ENDPOINT}/keyword`, {
      user: user,
      keyword: searchedBook,
    })
    .then(res=>{
      // console.log(res.data);
    })
    .catch(err=>{
      console.log(err.response);
    })
    axios
      .get(apiUrl)
      .then((res) => {
        const listOfBooks = res.data.items;
        // console.log(listOfBooks)
        setBooks(listOfBooks);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div className="background">
        <SearchBar
          searchedBook={searchedBook}
          setSearchedBook={setSearchedBook}
        />
        <button className="search-btn" onClick={searchBook}>
          Search
        </button>
        <ResultList books={books} />
      </div>
    </>
  );
}

export default SearchPage;
