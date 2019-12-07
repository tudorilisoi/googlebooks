import React from "react";
import ReactDOM from "react-dom";
import BookItem from "./BookItem";

describe("SearchBar Component", () => {
  it("renders with no error", () => {
    const div = document.createElement("div");
    ReactDOM.render(<BookItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
