import React from 'react'
import Book from './book'
import { Link } from "react-router-dom"
import { update, search } from './BooksAPI'

class Search extends React.Component {
  state = {
    searchResults: []
  }

  onKeyUp = (value) => {
    search(value).then(res => {
      if(res) {
        this.setState({
          searchResults: res
        });
      }
    });
  }

  changeShelf = (book, target) => {
    update(book, target.value).then(() => {
      alert(`"${book.title}" added to ${target.options[target.selectedIndex].text}`);
    });
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" >Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onKeyUp={event => {this.onKeyUp(event.target.value)}} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchResults.length > 0 ? (
              this.state.searchResults.map((book, index) =>
                book.authors && book.imageLinks && book.title && <Book book={book} key={index} changeShelf={this.changeShelf} />
              )
            ) : <div></div> }
          </ol>
        </div>
      </div>
    );
  }
}

export default Search
