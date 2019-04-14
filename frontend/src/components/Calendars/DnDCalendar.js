import React, { Component } from 'react';
import Calendar from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

import '../../App.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Button } from '@material-ui/core';
import { AppContext } from '../Context/AppContext';

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
    console.log('this.context.state ', this.context.state);
    const lid = this.context.state.leagues[this.props.index].id;
    console.log('league id: ', lid);

    if (this.context.state.schedule_by_league.find(x => x.league_id === lid)) {
      const games = this.context.state.schedule_by_league.find(
        x => x.league_id === lid
      ).games;
      await this.setState({
        games
      });
    }

    const displayEvents = this.state.games.map(event => {
      event.start = new Date(event.start_time);
      event.end = new Date(event.end_time);
      event.title = `${event.away_team_name} vs ${event.home_team_name}`;
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
    // console.log(start);
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
          style={{ height: '80vh', padding: '10px' }}
        />
      </div>
    );
  }
}

DragAndDropCalendar.contextType = AppContext;

export default DragAndDropCalendar;
