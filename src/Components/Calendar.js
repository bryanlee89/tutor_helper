import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import './Calendar.css';
require('react-big-calendar/lib/css/react-big-calendar.css');

BigCalendar.momentLocalizer(moment);

// temporarily rendering JSON to test calendar
const myEventsList = [
  {
    id: 0,
    title: 'Testing',
    allDay: false,
    startDate: new Date(2018, 1, 1),
    endDate: new Date(2018, 1, 1),
  },
]

// format display of day of week
const formats = {
  weekdayFormat: 'ddd',
}

// rendering the calendar
const MyCalendar = props => (
  
  <div className="calendar">
    <BigCalendar
      views={['month', 'week', 'day']}
      events={myEventsList}
      startAccessor='startDate'
      endAccessor='endDate'
      formats={formats}
    />
  </div>
);
export default MyCalendar;