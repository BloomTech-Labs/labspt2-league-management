import React, { Component } from 'react';
import Calendar from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

import '../../App.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = Calendar.momentLocalizer(moment);

const DnDCalendar = withDragAndDrop(Calendar);

// const events = [
//   {
//     id: '1',
//     start: 'mar 4 2019 10: 00: 00',
//     end: 'mar 4 2019 12: 00: 00',
//     title: 'Team 1 vs Team 2'
//   },
//   {
//     id: '2',
//     start: 'mar 5 2019 12: 00: 00',
//     end: 'mar 5 2019 14: 00: 00',
//     title: 'Team 3 vs Team 4'
//   },
//   {
//     id: '3',
//     start: 'mar 6 2019 10: 00: 00',
//     end: 'mar 6 2019 12: 00: 00',
//     title: 'Team 5 vs Team 6'
//   }
// ];

class DragAndDropCalendar extends Component {
  state = {
    events: [],
    isLoading: true
  };

  async componentDidMount() {
    const getGames = await this.props.context.getEvents();
    const populateCalendar = await this.showGames();
  }

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

  onEventResize = ({ event, start, end, allDay }) => {
    const index = this.state.events.indexOf(event);

    this.setState(state => {
      state.events[index].start = start;
      state.events[index].end = end;
      return { events: state.events };
    });
  };

  onEventDrop = async ({ event, start, end, allDay }) => {
    const index = this.state.events.indexOf(event);
    // console.log(start);
    const setLocal = await this.setState(state => {
      state.events[index].start = start;
      state.events[index].end = end;
      return { events: state.events };
    });
    const setGlobal = await this.updateEvents();
  };

  updateEvents = () => {
    console.log(this.state.events);
    this.props.context.updateEvents(this.state.events);
  };

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
