import React, { Component } from "react";
import MyBooks from "./MyBooks";
import Search from "./Search";
import { HashRouter, Route } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";

class App extends Component {
  state = {
    books: [],
    searchResults: [],
    searching: "not",
  };
  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  };
  componentDidUpdate = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  };
  bookUpdate = (book, shelf) => {
    BooksAPI.update(book, shelf);
  };

  bookSearch = (query) => {
    BooksAPI.search(query).then((books) => {
      if (!books.error) {
        this.setState({ searchResults: books, searching: "found" });
        console.log(books);
      } else {
        this.setState({ searchResults: [], searching: "notfound" });
      }
    });
  };

  render() {
    return (
      <HashRouter basename="/">
        <div className="ui container">
          <Route
            path="/"
            exact
            render={() => (
              <MyBooks updateBooks={this.bookUpdate} books={this.state.books} />
            )}
          />
          <Route
            path="/search"
            render={() => (
              <Search
                searching={this.state.searching}
                updateBooks={this.bookUpdate}
                bookSearch={this.bookSearch}
                books={this.state.searchResults}
              />
            )}
          />
        </div>
      </HashRouter>
    );
  }
}
/*
	ROUTE EXPLANATION
	Essentially all this really means:
		<Route path="..." render=(...)/>
	is render this component when on this link (path="...")
	adding exact to that meaning that the link has to ONLY include that
	so for instance root would be '/', and another link '/search', techincally
	'/search' contains or matches '/' so it would render that too unless we specify 'exact'
*/

export default App;
