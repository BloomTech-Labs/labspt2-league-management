import React, { Component } from 'react';
import Calendar from 'react-big-calendar';
import moment from 'moment';
import { AppContext } from '../Context/AppContext';
// import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../../App.css';
import './calendar.css';
// import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';

const localizer = Calendar.momentLocalizer(moment);

class CoachCalendar extends Component {
  state = {
    isLoading: true,
    games: []
  };

  componentDidMount() {
    this.showGames();
    // console.log(this.context.state.teams[this.props.index].name);
    localStorage.setItem(
      'teamName',
      this.context.state.teams[this.props.index].name
    );
  }

  showGames = async () => {
    const lid = this.context.state.teams[this.props.index].league_id;
    if (this.context.state.schedule_by_league.find(x => x.league_id === lid)) {
      const games = this.context.state.schedule_by_league.find(
        x => x.league_id === lid
      ).games;
      await this.setState({
        games: games.rows || games
      });
    }

    const displayEvents = await this.state.games.map(event => {
      event.start = new Date(event.start_time);
      event.end = new Date(event.end_time);
      event.title = !event.cancelled
        ? `${event.away_team_name} vs ${event.home_team_name}`
        : `${event.away_team_name} vs ${event.home_team_name} CANCELLED`;
      return event;
    });
    await this.setState({ publicEvents: displayEvents, isLoading: false });
    // const { publicEvents } = this.props.context.state;

    // const displayEvents = publicEvents.map(event => {
    //   event.start = new Date(event.start);
    //   event.end = new Date(event.end);
    //   return event;
    // });
    // setTimeout(() => {
    //   this.setState({ publicEvents: displayEvents, isLoading: false });
    // }, 500);
  };

  customEventPropGetter = event => {
    if (event.cancelled) {
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
    } else if (
      event.home_team_id === this.props.teamId ||
      event.away_team_id === this.props.teamId
    ) {
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
        color: '#fff',
        textAlign: 'center',
        boxShadow: '1px 1px 5px black',
        backgroundColor: '#ef6c00ed',
        margin: '0 5px',
        fontFamily: 'Montserrat'
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
          style={{
            height: '83vh',
            padding: '10px .5%',
            fontFamily: 'Montserrat',
            backgroundColor: 'white'
          }}
        />
      </div>
    );
  }
}

CoachCalendar.contextType = AppContext;

export default CoachCalendar;
