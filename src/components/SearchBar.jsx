import React from "react";

import './styles/SearchBar.css'

function SearchBar({ searchedBook, setSearchedBook }) {
  const searchBook = (e) => {
    const currentValue = e.target.value;
    setSearchedBook(currentValue);
  }
  return (
    <>
      <input
        type="text"
        value={searchedBook}
        placeholder="Seach Books..."
        name="bookName"
        id="search-bar"
        onChange={searchBook}
      />
    </>
  );
}

export default SearchBar;
