import React from "react";
import ReactDOM from "react-dom";
import BookList from "./BookList";

const arrayOfBooks = {
  items: [
    {
      volumeInfo: {
        title: "the first book",
        author: ["Author 1", "Author 2"],
        description: "some description here",
        infoLink: "infoLinkhere",
        imageLinks: {
          thumbnail: "sourcelinkhere"
        }
      }
    },
    {
      volumeInfo: {
        title: "the second book",
        author: ["Author 3", "Author 4, Author 5"],
        description: "some description here for the 2nd book",
        infoLink: "infoLinkhere",
        imageLinks: {
          thumbnail: "sourcelinkhere"
        }
      }
    }
  ]
};

const testSales = [
  {
    saleInfo: {
      saleability: "FREE"
    }
  },
  {
    saleInfo: {
      saleability: "FOR_SALE",
      listPrice: {
        amount: 100,
        currencyCode: "USD"
      }
    }
  }
];

const booklists = arrayOfBooks.items.map(books => books["volumeInfo"]);
describe("SearchBar Component", () => {
  it("renders with no error", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BookList arrayOfBooks={booklists} saleInfo={testSales} />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
