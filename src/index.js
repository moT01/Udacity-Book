import React from 'react'
import ReactDOM from 'react-dom'
import Search from './Search'
import MyReads from './MyReads'
import { Route, BrowserRouter } from 'react-router-dom';
import './index.css'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => <MyReads />} />
        <Route path="/search" render={() => <Search />} />
      </div>
    )
  }
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))
