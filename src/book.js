import React from 'react'
import BookOptions from './bookOptions'

class Book extends React.Component {
  render() {
    const { book, changeShelf } = this.props;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url( ' + book.imageLinks.thumbnail + ' )' }}></div>
            <div className="book-shelf-changer">
              <BookOptions book={book} changeShelf={changeShelf} />
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors[0]}</div>
        </div>
      </li>
    );
  }
}

export default Book
