import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  render() {
    const {
      search,
      handleSearch,
      handlePrintType,
      handleBookType,
      handleSubmit
    } = this.props;
    return (
      <form className="searchBar_form" onSubmit={e => handleSubmit(e)}>
        <label htmlFor="search">
          Search:
          <input
            type="text"
            value={search}
            onChange={e => handleSearch(e.target.value)}
          />
          <button type="submit">Search</button>
        </label>
        <label htmlFor="printType">
          Print Type:
          <select
            name="printType"
            id="printType"
            onChange={e => handlePrintType(e.target.value)}
          >
            <option value="all">All</option>
            <option value="books">Books</option>
            <option value="magazines">Magazines</option>
          </select>
        </label>
        <label htmlFor="bookType">
          Book Type:
          <select
            name="bookType"
            id="bookType"
            onChange={e => handleBookType(e.target.value)}
          >
            <option value="full">No Filter(default to Full)</option>
            <option value="partial">Partial</option>
            <option value="free-ebooks">Free EBooks</option>
            <option value="paid-ebooks">Paid EBooks</option>
            <option value="ebooks">All EBooks</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
