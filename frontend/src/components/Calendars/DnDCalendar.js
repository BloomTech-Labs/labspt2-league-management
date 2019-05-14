import React, { Component } from 'react';
import Calendar from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

import '../../App.css';
// import './dndCalendar.css';
import './calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { AppContext } from '../Context/AppContext';
import { DoneOutlined } from '@material-ui/icons';

const localizer = Calendar.momentLocalizer(moment);

const DnDCalendar = withDragAndDrop(Calendar);

class DragAndDropCalendar extends Component {
  state = {
    isLoading: true,
    games: []
  };

  componentDidMount() {
    this.showGames();
  }

  showGames = async () => {
    const lid = this.context.state.leagues[this.props.index].id;

    if (this.context.state.schedule_by_league.find(x => x.league_id === lid)) {
      const games = this.context.state.schedule_by_league.find(
        x => x.league_id === lid
      ).games;
      await this.setState({
        games: games.rows || games
      });
    }

    const displayEvents = this.state.games.map(event => {
      event.start = new Date(event.start_time);
      event.end = new Date(event.end_time);
      event.title = !event.cancelled
        ? `${event.away_team_name} vs ${event.home_team_name}`
        : `${event.away_team_name} vs ${event.home_team_name} CANCELLED`;
      return event;
    });

    await this.setState({
      games: displayEvents,
      isLoading: false
    });
  };

  // ========== DRAG AND DROP FUNCTIONS START HERE ==========

  onEventChange = async ({ event, start, end, allDay }) => {
    const lid = this.context.state.leagues[this.props.index].id;
    const index = this.state.games.indexOf(event);
    await this.setState(state => {
      state.games[index].start = start;
      state.games[index].end = end;
      return { games: state.games };
    });

    const updatedEvent = {
      id: event.id,
      league_id: event.league_id,
      home_team_id: event.home_team_id,
      away_team_id: event.away_team_id,
      start_time: event.start,
      end_time: event.end,
      location_id: event.location_id,
      cancelled: event.cancelled
    };

    await this.context.editGame(
      updatedEvent,
      lid,
      event.home_team_name,
      event.away_team_name,
      () => {
        return null;
      }
    );
  };

  // ========== DRAG AND DROP FUNCTIONS END HERE ==========

  customEventPropGetter = event => {
    if (!event.cancelled) {
      return {
        style: {
          color: '#333',
          textAlign: 'center',
          boxShadow: '0px 0px 5px #ef6c00',
          margin: '0 5px',
          fontFamily: 'Montserrat',
          border: '1px solid #ef6c00',
          backgroundColor: 'rgba(220, 220, 220, .9)'
        }
      };
    } else {
      return {
        style: {
          color: '#222',
          textAlign: 'center',
          boxShadow: '1px 1px 5px black',
          backgroundColor: '#aaa',
          margin: '0 5px',
          fontFamily: 'Montserrat'
        }
      };
    }
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
        {/* <header className="App-header">
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
        </Button> */}
        <div className="topBar">
          {/* <div className="topBar-text">Update Mode</div> */}
          <div className="doneBtn" onClick={this.props.toggleEdit}>
            <DoneOutlined />
          </div>
        </div>
        <DnDCalendar
          localizer={localizer}
          min={new Date(2019, 0, 0, 8, 0)}
          max={new Date(2019, 0, 0, 23, 0)}
          defaultDate={new Date()}
          defaultView="week"
          events={this.state.games}
          onEventDrop={this.onEventChange}
          onEventResize={this.onEventChange}
          resizable
          style={{
            height: '83vh',
            padding: '10px .5%',
            fontFamily: 'Montserrat',
            backgroundColor: 'white'
          }}
          eventPropGetter={this.customEventPropGetter}
        />
      </div>
    );
  }
}

DragAndDropCalendar.contextType = AppContext;

export default DragAndDropCalendar;
