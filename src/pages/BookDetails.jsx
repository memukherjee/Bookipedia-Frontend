import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./styles/BookDetails.css";

function BookDetails() {
  const [bookData, setBookData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes/${id}?key=${process.env.REACT_APP_BOOK_API_KEY}`
      )
      .then((res) => {
        setBookData(res.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [id]);

  return (
    <div className="book-data-container">
      <div className="image-container">
        <img
          src={
            bookData &&
            (bookData.volumeInfo.imageLinks.thumbnail ||
              bookData.volumeInfo.imageLinks.smallThumbnail ||
              "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg")
          }
          alt=""
        />
      </div>
      <div className="book-info">
        <div className="book-details">
          <h1 className="book-name">{bookData && bookData.volumeInfo.title}</h1>
          <span>({bookData && bookData.volumeInfo.publishedDate})</span>
          <p className="publisher-name">
            <span>published by: </span>{bookData && bookData.volumeInfo.publisher}
          </p>
          <div className="authors">
          <span>written by: </span>
            {bookData &&
              bookData.volumeInfo.authors.map((author, index) => {
                return (
                  <p key={index} className="author-name">
                    {index === 0 ? "" : ", "}
                    {author}
                  </p>
                );
              })}
          </div>
        </div>
        <div className="buy-details">
          <a
            target="_blank"
            rel="noreferrer"
            href={bookData && bookData.saleInfo.buyLink}
          >
            {bookData && bookData.saleInfo && bookData.saleInfo.buyLink ? "Buy Now" : "Not for sale"}
          </a>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
