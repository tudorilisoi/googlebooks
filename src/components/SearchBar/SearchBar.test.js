import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar";

describe("SearchBar Component", () => {
  it("renders with no error", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SearchBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
