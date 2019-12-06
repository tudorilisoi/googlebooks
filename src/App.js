import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import BookList from "./components/BookList/BookList";
//booksAPI key = AIzaSyDSKcVsdz8H67qHxiTIB3dnBz2JWQixTNU

class App extends Component {
  render() {
    return (
      <main className="App">
        <header>
          <h1>Google Book Search</h1>
        </header>
        <SearchBar />
        <BookList />
      </main>
    );
  }
}

export default App;
