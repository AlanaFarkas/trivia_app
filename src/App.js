import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/css/App.css';
import 'bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Pursue Trivia</h1>
        </header>
      </div>
    );
  }
} //App Component

export default App;
