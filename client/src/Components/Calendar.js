import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import './Calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.less';
require('react-big-calendar/lib/css/react-big-calendar.css');

BigCalendar.momentLocalizer(moment);

// temporarily rendering JSON to test calendar
const myEventsList = [
  {
    id: 0,
    title: '고소영: Physics 12',
    allDay: false,
    start: new Date(2018, 1, 1),
    end: new Date(2018, 1, 1),
  },
  {
    id: 1,
    title: '이지은: English 11',
    allDay: false,
    startDate: new Date(2018, 1, 4),
    endDate: new Date(2018, 1, 4),
  },
  {
    id: 1,
    title: '공서영: English 12',
    allDay: false,
    startDate: new Date(2018, 1, 4),
    endDate: new Date(2018, 1, 4),
  },
  {
    id: 2,
    title: '원빈: Pre-Calculus',
    allDay: false,
    startDate: new Date(2018, 1, 14),
    endDate: new Date(2018, 1, 14),
  },
]

// format display of day of week
const formats = {
  weekdayFormat: 'ddd',
}

const DragAndDropCalendar = withDragAndDrop(BigCalendar)

class MyCalendar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: myEventsList,
    }
    console.log(this.state.events)

  }
  moveEvent = ({event, start, end}) => {
    const {events} = this.state
    const idx = events.indexOf(event)
    const updatedEvent = {...event, start, end}
    const nextEvents = [...events]
    nextEvents.splice(idx, 1, updatedEvent)
    this.setState({
      events: nextEvents,
    })
    alert(`${event.title} was moved to ${event.start}`)
  }
  resizeEvent = (resizeType, {event, start, end}) => {
    const {events} = this.state
    const nextEvents = events.map(existingEvent => {
      return existingEvent.id === event.id ? {...existingEvent, start, end} : existingEvent
    })
    this.setState({
      events: nextEvents,
    })
  }
  render() {
    return (
      <div className="calendar">
        <DragAndDropCalendar
        selectable
        resizable
        views={['month', 'week', 'day']}
        formats={formats}
        events = {this.state.events}
        startAccessor="start"
        endAccessor="end"
        onEventDrop = {this.moveEvent}
        onEventResize = {this.resizeEvent}
        defaultView="month"
        />
      </div>
    )
  }
}






// // rendering the calendar
// const MyCalendar = props => (
  
//   <div className="calendar">
//     <BigCalendar
//       views={['month', 'week', 'day']}
//       events={myEventsList}
//       startAccessor='startDate'
//       endAccessor='endDate'
//       formats={formats}
//     />
//   </div>
// );
export default MyCalendar;