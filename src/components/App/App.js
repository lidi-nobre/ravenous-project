import React from 'react';
import logo from '/Users/lidiane/Projetos/ravenous/src/logo.svg';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>ravenous</h1>
          <SearchBar />
          <BusinessList />
        </header>
      </div>
    )
  }
}

export default App;

