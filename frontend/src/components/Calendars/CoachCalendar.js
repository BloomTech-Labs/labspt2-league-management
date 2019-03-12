import React, { Component } from 'react';
import Calendar from 'react-big-calendar';
import moment from 'moment';
// import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import '../../App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';

const localizer = Calendar.momentLocalizer(moment);

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

class CoachCalendar extends Component {
  state = {
    // events: [],
    isLoading: true
  };

  //   componentDidMount() {
  //     console.log(events);
  //     const displayEvents = events.map(event => {
  //       event.start = new Date(event.start);
  //       event.end = new Date(event.end);
  //       return event;
  //     });
  //     setTimeout(() => {
  //       this.setState({ events: displayEvents, isLoading: false });
  //     }, 500);
  //   }
  componentDidMount() {
    this.retrieveGames();
  }

  retrieveGames = async () => {
    // GRAB EVENTS FROM DATABASE TO SET GLOBAL STATE
    await this.props.context.getEvents();

    // GRAB EVENTS FROM GLOBAL STATE TO SET LOCAL STATE
    await this.showGames();
  };

  showGames = () => {
    const { publicEvents } = this.props.context.state;

    const displayEvents = publicEvents.map(event => {
      event.start = new Date(event.start);
      event.end = new Date(event.end);
      return event;
    });
    setTimeout(() => {
      this.setState({ publicEvents: displayEvents, isLoading: false });
    }, 500);
  };

  customEventPropGetter = event => {
    if (event.id === '2') {
      console.log(event);
      return {
        style: {
          backgroundColor: 'yellow',
          color: '#333',
          border: '1px solid #333',
          textAlign: 'center',
          boxShadow: '1px 1px 5px black',
          margin: '0 5px'
          //   paddingTop: '10px',
          //   lineHeight: '48px'
        }
      };
    }
    return {
      style: {
        //   backgroundColor: '#ffc851',
        //   color: '#333',
        //   border: '1px solid #333',
        textAlign: 'center',
        boxShadow: '1px 1px 5px black',
        margin: '0 5px',
        paddingTop: '10px',
        lineHeight: '28px'
      }
    };
  };

  render() {
    if (this.state.isLoading) {
      return (
        <div className="App">
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
        {/* <header className="App-header" style={{ height: '10vh' }}>
          <h1 className="App-title">League Name Here</h1>
        </header> */}

        <Calendar
          localizer={localizer}
          min={new Date(2019, 0, 0, 8, 0)}
          max={new Date(2019, 0, 0, 23, 0)}
          defaultDate={new Date()}
          defaultView="week"
          events={this.state.publicEvents}
          eventPropGetter={this.customEventPropGetter}
          style={{ height: '80vh', padding: '10px' }}
        />
      </div>
    );
  }
}

export default CoachCalendar;
