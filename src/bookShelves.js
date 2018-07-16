import React from 'react'
import Book from './book'
import { getAll, update } from './BooksAPI'

class BookShelves extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  };

  componentDidMount() {
    this.updateBooks();
  }

  changeShelf = (book, target) => {
    update(book, target.value).then(() => {
      this.updateBooks();
      alert(`"${book.title}" moved to ${target.options[target.selectedIndex].text}`);
    });
  }

  updateBooks = () => {
    getAll().then(res => {
      this.setState({
        books: res
      });
    });
  }

  render() {
    const shelves = [
      {
        shelfName: "Currently Reading",
        shelfVar: "currentlyReading"
      },{
        shelfName: "Want to Read",
        shelfVar: "wantToRead"
      },{
        shelfName: "Read",
        shelfVar: "read"
      }
    ]

    return (
      <div>
        {shelves.map((shelf, index) =>
          <div className="bookshelf" key={index}>
            <h2 className="bookshelf-title">{shelf.shelfName}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.state.books.filter(book => { return book.shelf === shelf.shelfVar }).map((book, index) =>
                  <Book book={book} key={index} changeShelf={this.changeShelf} />
                )}
              </ol>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BookShelves
