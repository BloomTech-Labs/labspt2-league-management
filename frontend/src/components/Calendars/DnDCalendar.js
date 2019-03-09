import React, { Component } from 'react';
import Calendar from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

import '../../App.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Button } from '@material-ui/core';

const localizer = Calendar.momentLocalizer(moment);

const DnDCalendar = withDragAndDrop(Calendar);

class DragAndDropCalendar extends Component {
  state = {
    //   events: [],
    isLoading: true
  };

  componentDidMount() {
    this.retrieveGames();
  }

  updateEvents = () => {
    // SEND LOCAL STATE BACK TO CONTEXT, THEN CONTEXT STATE WILL BE UPDATED WITH THIS LOCAL STATE
    // console.log(this.state.events);
    this.props.context.updateEvents();
  };

  retrieveGames = async () => {
    // GRAB EVENTS FROM DATABASE TO SET GLOBAL STATE
    await this.props.context.getEvents();

    // GRAB EVENTS FROM GLOBAL STATE TO SET LOCAL STATE
    await this.showGames();
    // console.log(this.state);
  };

  showGames = () => {
    const { events } = this.props.context.state;

    const displayEvents = events.map(event => {
      event.start = new Date(event.start);
      event.end = new Date(event.end);
      return event;
    });
    setTimeout(() => {
      this.setState({ events: displayEvents, isLoading: false });
    }, 500);
  };

  // ========== DRAG AND DROP FUNCTIONS START HERE ==========

  onEventResize = ({ event, start, end, allDay }) => {
    const index = this.state.events.indexOf(event);

    this.setState(state => {
      state.events[index].start = start;
      state.events[index].end = end;
      return { events: state.events };
    });
  };

  onEventDrop = ({ event, start, end, allDay }) => {
    const index = this.state.events.indexOf(event);
    // console.log(start);
    this.setState(state => {
      state.events[index].start = start;
      state.events[index].end = end;
      return { events: state.events };
    });
  };

  // ========== DRAG AND DROP FUNCTIONS END HERE ==========

  render() {
    if (this.state.isLoading) {
      return (
        <div className="App">
          {/* <header className="App-header" style={{ height: '10vh' }}>
            <h1 className="App-title">League Name Here</h1>
          </header> */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#333',
              height: '90vh'
            }}
          >
            Loading...
          </div>
        </div>
      );
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">League Name Here</h1>
        </header>

        <Button
          onClick={this.updateEvents}
          style={{
            border: '1px solid black',
            marginTop: '8px',
            backgroundColor: 'limegreen'
          }}
        >
          Save Changes
        </Button>
        <DnDCalendar
          localizer={localizer}
          min={new Date(2019, 0, 0, 8, 0)}
          max={new Date(2019, 0, 0, 23, 0)}
          defaultDate={new Date()}
          defaultView="week"
          events={this.state.events}
          onEventDrop={this.onEventDrop}
          onEventResize={this.onEventResize}
          resizable
          style={{ height: '80vh', padding: '10px' }}
        />
      </div>
    );
  }
}

export default DragAndDropCalendar;
