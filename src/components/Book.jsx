import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Book.css'

function Book({book}) {
  return (
    <div key={book.id} className="book-items">
            <img
              className="book-image"
              src={
                book.volumeInfo.imageLinks === undefined
                  ? "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"
                  : `${book.volumeInfo.imageLinks.thumbnail}`
              }
              alt="thumbnail"
            />
            <p className="books-name">{book.volumeInfo.title}</p>
            {book.volumeInfo.authors && book.volumeInfo.authors.map((author,index)=>{
              return <p key={index} className="authors-name">{(index>0?", ":"") + author}</p>
            })}
            <Link to={`/book/${book.id}`} className="view-details">
              View Details
            </Link>
          </div>
  )
}

export default Book