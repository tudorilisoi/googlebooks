import React from "react";
import "./BookItem.css";

export default function BookItem(props) {
  return (
    <div>
      <h2>props.title</h2>
      <div className="itemWrapper">
        <img src="" alt="" />
        <legend>Author:props.author</legend>
        <p>Price:props.price</p>
        <p>props.description</p>
      </div>
    </div>
  );
}
