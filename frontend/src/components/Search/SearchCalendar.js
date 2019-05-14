import React, { Component } from 'react';
import Calendar from 'react-big-calendar';
import moment from 'moment';
import axios from 'axios';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../../App.css';
import '../Calendars/calendar.css';
import SearchNavbar from './SearchNavbar.js';
import { withStyles } from '@material-ui/core/styles';

const localizer = Calendar.momentLocalizer(moment);

const styles = theme => ({
  cardFront: {
    minWidth: '285px',
    maxWidth: '320px',
    // border: '1px solid lightgrey',
    width: '45%',
    borderRadius: '10px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    boxShadow: '1px 1px 4px #333, 2px 2px 7px #1565c0',
    minHeight: '350px'
  },
  cardBack: {
    minWidth: '275px',
    maxWidth: '300px',
    // border: '2px solid lightgrey',
    width: '45%',
    borderRadius: '10px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    boxShadow: '1px 1px 4px #333, 2px 2px 7px #ef6c00',
    height: '445px'
  },
  container: {
    width: '90%'
  },
  title: {
    fontSize: '1.6rem',
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: 'Montserrat'
  },
  pos: {
    border: '1px solid black',
    marginTop: '12px',
    width: '65%',
    margin: '0 auto',
    maxWidth: '180px',
    borderRadius: '15px',
    marginBottom: '12px',
    padding: '10px',
    fontFamily: 'Montserrat'
  },
  upcoming: {
    border: '1px solid black',
    marginTop: '8px',
    // width: '95%',
    margin: '0 auto',
    borderRadius: '15px',
    // marginBottom: '5px',
    padding: '10px',
    fontFamily: 'Montserrat'
  },
  button: {
    border: '1px solid lightgrey',
    borderRadius: '8px',
    fontFamily: 'Montserrat'
  },
  p: {
    fontSize: 13,
    fontFamily: 'Montserrat'
  },
  content: {
    marginTop: 50,
    fontFamily: 'Montserrat',
    backgroundColor: '#eee',
    height: 'auto',
    minHeight: 'calc(100vh - 63px)',
    paddingTop: 20
  }
});

class SearchCalendar extends Component {
  state = {
    isLoading: true,
    games: [],
    publicLeagues: [],
    lid: 0
  };

  async componentDidMount() {
    if (this.props.location.state !== undefined) {
      await this.publicShowGames();
      // await console.log(this.state.games);
      await this.displayEvents();
      // await console.log(this.state.games);
    } else {
      await this.getPublicLeagues();
      // await console.log(this.state.games);
      await this.getThisLeague();
      // await console.log(this.state.games);
      await this.displayEvents();
      // await console.log(this.state.games);
    }
  }

  async displayEvents() {
    // console.log('displayEvents', this.state.games);
    // await console.log(this.state.games);
    if (this.state.games.rows) {
      const displayedEvents = await this.state.games.rows.map(event => {
        event.start = new Date(event.start_time);
        event.end = new Date(event.end_time);
        event.title = !event.cancelled
          ? `${event.away_team_name} vs ${event.home_team_name}`
          : `${event.away_team_name} vs ${event.home_team_name} CANCELLED`;
        return event;
      });
      await this.setState({ publicEvents: displayedEvents, isLoading: false });
      // console.log(displayedEvents);
      // await console.log(this.state.publicLeagues);
    } else {
      const displayedEvents = await this.state.games.map(event => {
        event.start = new Date(event.start_time);
        event.end = new Date(event.end_time);
        event.title = !event.cancelled
          ? `${event.away_team_name} vs ${event.home_team_name}`
          : `${event.away_team_name} vs ${event.home_team_name} CANCELLED`;
        return event;
      });
      await this.setState({ publicEvents: displayedEvents, isLoading: false });
      // console.log(displayedEvents);
      // await console.log(this.state.publicLeagues);
    }
  }

  async getThisLeague() {
    // console.log('window.location.pathname', window.location.pathname);
    let pathName = window.location.pathname.slice(
      16,
      window.location.pathname.length - 1
    );
    // console.log('pathName', pathName);
    let lid = pathName.substr(0, pathName.indexOf('/'));
    // console.log('lid', lid);

    await axios
      .get(`/search/${lid}/schedule`)
      .then(res => {
        const schedule = res.data;
        // console.log(schedule);
        // console.log(schedule.rows);
        this.setState({
          games: schedule
        });
      })
      .catch(err => {
        console.log('error from Axios call in publicShowGames', err);
      });
  }

  async getPublicLeagues() {
    await axios
      .get('/search')
      .then(response => {
        // console.log(response.data);
        this.setState({
          publicLeagues: response.data
        });
        // console.log(this.state.publicLeagues);
      })
      .catch(error => console.log(error));
  }

  async publicShowGames() {
    // console.log(this.props.location.state.publicLeagues);
    const lid = this.props.location.state.lid;
    // console.log(lid);
    await axios
      .get(`/search/${lid}/schedule`)
      .then(res => {
        const schedule = res.data;
        this.setState({
          games: schedule
        });
      })
      .catch(err => {
        console.log('error from Axios call in publicShowGames', err);
      });
  }

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
    const { classes } = this.props;
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
      <div className={classes.content}>
        <SearchNavbar />
        <Calendar
          localizer={localizer}
          min={new Date(2019, 0, 0, 8, 0)}
          max={new Date(2019, 0, 0, 23, 0)}
          defaultDate={new Date()}
          defaultView="week"
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
  }
}

export default withStyles(styles)(SearchCalendar);
