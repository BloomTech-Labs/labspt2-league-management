import React, { Component } from 'react';
import Calendar from 'react-big-calendar';
import moment from 'moment';
import '../../App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { AppContext } from '../Context/AppContext';

const localizer = Calendar.momentLocalizer(moment);

class PublicCalendar extends Component {
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
        games
      });
    }

    const displayEvents = this.state.games.map(event => {
      event.start = new Date(event.start_time);
      event.end = new Date(event.end_time);
      event.title = `Team ${event.away_team_id} vs Team ${event.home_team_id}`;
      return event;
    });
    this.setState({ publicEvents: displayEvents, isLoading: false });
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
        <Calendar
          localizer={localizer}
          min={new Date(2019, 0, 0, 8, 0)}
          max={new Date(2019, 0, 0, 23, 0)}
          defaultDate={new Date()}
          defaultView="week"
          events={this.state.publicEvents}
          style={{ height: '80vh', padding: '10px' }}
        />
      </div>
    );
  }
}

PublicCalendar.contextType = AppContext;

export default PublicCalendar;
