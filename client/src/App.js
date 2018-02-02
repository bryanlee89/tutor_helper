import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import BigCalendar from 'react-big-calendar'
import moment from 'moment'
require('react-big-calendar/lib/css/react-big-calendar.css') 

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

class App extends Component {
  render() {
    return (
      <BigCalendar
      events={[]}
      startAccessor='startDate'
      endAccessor='endDate'
    />
    );
  }
}

export default App;
