import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormEmployee from './components/FormEmployee';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <FormEmployee/>
        </header>
      </div>
    );
  }
}

export default App;
