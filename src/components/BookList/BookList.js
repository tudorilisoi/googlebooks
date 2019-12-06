import React, { Component } from "react";
import "./BookList.css";
import BookItem from "../BookItem/BookItem";

class BookList extends Component {
  render() {
    return (
      <div>
        <BookItem />
      </div>
    );
  }
}

export default BookList;
