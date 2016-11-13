import React, { Component } from 'react';
import './App.css';
import '../public/logo.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src='logo.jpg' className="App-logo" alt="logo" />
          <h2>Welcome to Comfortzone</h2>
        </div>
        <p className="App-intro">
           get started.
        </p>
      </div>
    );
  }
}

export default App;
