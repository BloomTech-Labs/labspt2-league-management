import React, { Component } from 'react';
import Calendar from 'react-big-calendar';
import moment from 'moment';
import axios from 'axios';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../../App.css';
import '../Calendars/calendar.css';
import { AppContext } from '../Context/AppContext';
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
    } else {
      await this.getPublicLeagues();
      await this.getThisLeague();
      console.log('Oh Shit');
    }
  }

  async getPublicLeagues() {
    await axios
      .get('/search')
      .then(response => {
        console.log(response.data);
        this.setState({
          publicLeagues: response.data
        });
        console.log(this.state.publicLeagues);
      })
      .catch(error => console.log(error));
  }

  async getThisLeague() {
    // parse url to get league ID
    // grab league index (league id - 1) from public Leagues
    // get league ID
    console.log('window.location.pathname', window.location.pathname);
    let pathName = window.location.pathname.slice(
      16,
      window.location.pathname.length - 1
    );
    console.log('pathName', pathName);
    let lid = pathName.substr(0, pathName.indexOf('/'));
    console.log('lid', lid);
    console.log(this.state.publicLeagues[lid - 1]);

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

    await console.log(this.state.games);
    const displayEvents = await this.state.games.map(event => {
      event.start = new Date(event.start_time);
      event.end = new Date(event.end_time);
      event.title = `${event.away_team_name} vs ${event.home_team_name}`;
      return event;
    });
    await this.setState({ publicEvents: displayEvents, isLoading: false });
    console.log(displayEvents);
    // let getLocation = function(href) {
    //   let
    // }
    await console.log(this.state.publicLeagues);
  }

  customEventPropGetter = event => {
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

  async publicShowGames() {
    if (this.props.location.state.publicLeagues) {
      console.log(this.props.location.state.publicLeagues);
      const lid = this.props.location.state.lid;
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

      const displayEvents = await this.state.games.map(event => {
        event.start = new Date(event.start_time);
        event.end = new Date(event.end_time);
        event.title = `${event.away_team_name} vs ${event.home_team_name}`;
        return event;
      });
      await this.setState({ publicEvents: displayEvents, isLoading: false });
      console.log(displayEvents);
    }
  }

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
