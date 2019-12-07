import React from "react";
import BookItem from "../BookItem/BookItem";
import "./BookList.css";
import propTypes from "prop-types";

export default function BookList({ arrayOfBooks, saleInfo }) {
  const listOfBookItems = arrayOfBooks.map((book, i) => {
    const authors = Array.isArray(book.authors)
      ? book.authors.join(",")
      : "No Stated Authors ";
    return (
      <div className="bookWrapper" key={`container_${i}`}>
        <BookItem
          title={book.title}
          author={authors}
          saleInfo={saleInfo[i]}
          description={book.description}
          infoLink={book.infoLink}
          imgLink={book.imageLinks.thumbnail}
        />
      </div>
    );
  });
  return <div className="listWrapper">{listOfBookItems}</div>;
}

BookList.propTypes = {
  arrayOfBooks: propTypes.array.isRequired
};

BookList.defaulProps = {
  arrayOfBooks: []
};
