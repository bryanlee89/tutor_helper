import React, { Component } from 'react';
import './App.css';
import MyCalendar from './Components/Calendar';

class App extends Component {
  render() {
    return (
      <div className="App">
      <MyCalendar />
      </div>
    );
  }
}

export default App;
