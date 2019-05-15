import React, { Component } from 'react';
import Calendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../../App.css';
import './calendar.css';
import { AppContext } from '../Context/AppContext';
import DragAndDropCalendar from './DnDCalendar';
import { EditOutlined } from '@material-ui/icons';
import windowSize from 'react-window-size';

const localizer = Calendar.momentLocalizer(moment);

class PublicCalendar extends Component {
  state = {
    isLoading: true,
    edit: false,
    games: []
  };

  componentDidMount() {
    this.showGames();
  }

  findDefaultCalendarView() {
    const width = this.props.windowWidth;
    return width > 1250 ? 'week' : 'day';
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

    const displayEvents = await this.state.games.map(event => {
      // console.log(event);
      event.start = new Date(event.start_time);
      event.end = new Date(event.end_time);
      event.title = !event.cancelled
        ? `${event.away_team_name} vs ${event.home_team_name}`
        : `${event.away_team_name} vs ${event.home_team_name} CANCELLED`;
      return event;
    });
    await this.setState({ publicEvents: displayEvents, isLoading: false });
  };

  customEventPropGetter = event => {
    if (!event.cancelled) {
      return {
        style: {
          color: '#fff',
          textAlign: 'center',
          boxShadow: '1px 1px 5px black',
          backgroundColor: '#ef6c00ed',
          margin: '0 5px',
          fontFamily: 'Montserrat'
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
    if (!this.state.edit) {
      return (
        <div className="App">
          <div className="updateBtn" onClick={this.props.toggleEdit}>
            <EditOutlined />
          </div>
          <Calendar
            localizer={localizer}
            min={new Date(2019, 0, 0, 8, 0)}
            max={new Date(2019, 0, 0, 23, 0)}
            defaultDate={new Date()}
            defaultView={this.findDefaultCalendarView()}
            events={this.state.publicEvents}
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
    } else {
      return <DragAndDropCalendar />;
    }
  }
}

PublicCalendar.contextType = AppContext;

export default windowSize(PublicCalendar);
