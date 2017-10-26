import React, { Component } from 'react';
import Button from './Button'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">October Application</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button />
        <p className="October-content">
          This application is going to deal with the best recipes for yappy lapdogs.
        </p>
      </div>
    );
  }
}

export default App;
