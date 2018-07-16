import React from 'react'

class BookOptions extends React.Component {
  render() {
    const { book, changeShelf } = this.props;

    return (
      <select defaultValue={book.shelf || 'none'} onChange={event => {changeShelf(book, event.target)}}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    );
  }
}

export default BookOptions
