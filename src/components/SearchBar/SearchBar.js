import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  render() {
    return (
      <form>
        <label htmlFor="search">Search:</label>
        <label htmlFor="printType">Print Type:</label>
        <label htmlFor="bookType">Book Type:</label>
      </form>
    );
  }
}

export default SearchBar;
