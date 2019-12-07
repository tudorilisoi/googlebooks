import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import BookList from "./components/BookList/BookList";

// const arrayOfBooks = {
//   items: [
//     {
//       volumeInfo: {
//         title: "the first book",
//         author: ["Author 1", "Author 2"],
//         price: 40,
//         description: "some description here",
//         infoLink: "infoLinkhere",
//         imageLinks: {
//           thumbnail: "sourcelinkhere"
//         }
//       }
//     },
//     {
//       volumeInfo: {
//         title: "the second book",
//         author: ["Author 3", "Author 4, Author 5"],
//         price: 100,
//         description: "some description here for the 2nd book",
//         infoLink: "infoLinkhere",
//         imageLinks: {
//           thumbnail: "sourcelinkhere"
//         }
//       }
//     }
//   ]
// };

const formatQueryParams = param => {
  const queryItems = Object.keys(param).map(
    key => `${encodeURIComponent(key)}=${encodeURIComponent(param[key])}`
  );
  return queryItems.join("&");
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      printType: "All",
      bookType: "full",
      items: []
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const baseUrl = "https://www.googleapis.com/books/v1/volumes/?";
    const { search, printType, bookType } = this.state;
    const params = {
      q: search,
      printType: printType,
      filter: bookType,
      key: "AIzaSyDSKcVsdz8H67qHxiTIB3dnBz2JWQixTNU"
    };

    const url = `${baseUrl}${formatQueryParams(params)}`;

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong, please try again");
      })
      .then(responeJson => {
        this.setState({
          items: responeJson.items
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  };

  handleSearch = search => {
    this.setState({
      search
    });
  };

  handlePrintType = printType => {
    this.setState({
      printType
    });
  };

  handleBookType = bookType => {
    this.setState({
      bookType
    });
  };

  render() {
    let saleInfo = [];
    const booklists = this.state.items.map(elem => {
      saleInfo.push(elem.saleInfo);
      return elem["volumeInfo"];
    });
    const display = this.state.error ? (
      <div className="error">{this.state.error}</div>
    ) : (
      <BookList arrayOfBooks={booklists} saleInfo={saleInfo} />
    );
    return (
      <main className="App">
        <header>
          <h1>Google Book Search</h1>
        </header>
        <SearchBar
          search={this.state.search}
          handleSearch={search => this.handleSearch(search)}
          handlePrintType={printType => this.handlePrintType(printType)}
          handleBookType={bookType => this.handleBookType(bookType)}
          handleSubmit={e => this.handleSubmit(e)}
        />
        {display}
      </main>
    );
  }
}

export default App;
