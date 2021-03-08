import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar'

class App extends React.Component {
  render() {
    return (
      <>
        Hello <br />
        <SearchBar />
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));