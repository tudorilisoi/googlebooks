import React from "react";
import "./BookItem.css";

export default function BookItem({
  title,
  author,
  saleInfo, //is an array of objects
  description,
  infoLink,
  imgLink
}) {
  const price =
    saleInfo.saleability === "FREE"
      ? "FREE"
      : `${saleInfo.listPrice.amount} ${saleInfo.listPrice.currencyCode}`;
  return (
    <div>
      <h2>{title}</h2>
      <div className="itemWrapper">
        <a href={infoLink} target="_blank">
          <img src={imgLink} alt={`${title}_image`} />{" "}
        </a>
        <legend>Author: {author}</legend>
        <p>Price: {price}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
