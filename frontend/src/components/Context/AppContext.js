import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

export const AppContext = React.createContext();

export default class AppProvider extends Component {
  state = {
    username: null,
    admin: false,
    coach: false,
    loggedIn: true,
    publicEvents: [
      {
        id: '1',
        start: 'mar 4 2019 10: 00: 00',
        end: 'mar 4 2019 12: 00: 00',
        title: 'Team 1 vs Team 2',
        location: 'Park'
      },
      {
        id: '2',
        start: 'mar 5 2019 12: 00: 00',
        end: 'mar 5 2019 14: 00: 00',
        title: 'Team 3 vs Team 4',
        location: 'Park'
      },
      {
        id: '3',
        start: 'mar 6 2019 10: 00: 00',
        end: 'mar 6 2019 12: 00: 00',
        title: ['Team 5 vs Team 6'],
        location: 'Park'
      }
    ],
    events: [
      {
        id: '1',
        start: 'mar 4 2019 10: 00: 00',
        end: 'mar 4 2019 12: 00: 00',
        title: 'Team 1 vs Team 2',
        location: 'Park'
      },
      {
        id: '2',
        start: 'mar 5 2019 12: 00: 00',
        end: 'mar 5 2019 14: 00: 00',
        title: 'Team 3 vs Team 4',
        location: 'Park'
      },
      {
        id: '3',
        start: 'mar 6 2019 10: 00: 00',
        end: 'mar 6 2019 12: 00: 00',
        title: 'Team 5 vs Team 6',
        location: 'Park'
      }
    ],
    leagues: JSON.parse(localStorage.getItem('leagues')) || [],
    teams: JSON.parse(localStorage.getItem('teams')) || []
    // leagueId: 0,
    // teamId: 0
  };

  render() {
    const { events } = this.state;

    return (
      <AppContext.Provider
        value={{
          state: this.state,
          signin: () => {
            const token = localStorage.getItem('jwt');
            // let username = null;
            if (token) {
              const decoded = jwt_decode(token);
              // const username = decoded.user.username;
              // console.log('decoded jwt: ', decoded);
              this.setState({ loggedIn: true });
            }
          },
          signedIn: () => {
            this.setState({ loggedIn: true });
          },
          signOut: () => {
            this.setState({ loggedIn: false });
          },
          getLeagues: () => {
            const token = localStorage.getItem('jwt') || this.signOut();
            const endpoint = '/leagues';
            const options = {
              headers: {
                authorization: token
              }
            };
            axios
              .get(endpoint, options)
              .then(res => {
                localStorage.setItem('leagues', JSON.stringify(res.data));
                this.setState({ leagues: res.data });
              })
              .catch(err => {
                console.log('error from getLeagues', err);
              });
          },
          getTeams: () => {
            const token = localStorage.getItem('jwt') || this.signOut();
            const endpoint = '/teams';
            const options = {
              headers: {
                authorization: token
              }
            };
            axios
              .get(endpoint, options)
              .then(res => {
                localStorage.setItem('teams', JSON.stringify(res.data));
                this.setState({ teams: res.data });
              })
              .catch(err => {
                console.log('error from getTeams', err);
              });
          },
          getEvents: id => {
            // An axios request will need to be done here to pull events from DB
            // this.setState({
            //   events: events
            // });
          },
          updateEvents: () => {
            // console.log('made it to context update function');

            const newEventsArr = JSON.parse(JSON.stringify(events));
            this.setState({ publicEvents: newEventsArr });

            // console.log('global events:', this.state.events);
            // do a put request to update the events on the DB
            // const updateDB = await axios.put()
          },
          createLeague: (leagueName, cb) => {
            const token = localStorage.getItem('jwt') || this.signOut();
            const endpoint = '/leagues';
            let league = {
              name: leagueName
            };
            const options = {
              headers: {
                authorization: token
              }
            };
            axios
              .post(endpoint, league, options)
              .then(res => {
                console.log(res.data);
                league = res.data;
                const joined = this.state.leagues.concat(league);
                const index = joined.length - 1;
                localStorage.setItem('leagues', JSON.stringify(joined));
                // console.log(joined);
                // console.log(joined.length);
                // this.setState({
                //   league_index: index,
                //   leagues: joined
                // });
                cb(index);
              })
              .catch(err => {
                console.log('error from createLeague', err);
                return -1;
              });
          },
          editLeague: (leagueSettings, index) => {
            console.log('AppContext: editLeague()');
            console.log(leagueSettings);
            console.log(this.state);
            console.log(index);
            const lid = this.state.leagues[index].id;
            console.log(lid);

            const token = localStorage.getItem('jwt') || this.signOut();
            const endpoint = `/leagues/${lid}`;
            const options = {
              headers: {
                authorization: token
              }
            };
            axios
              .put(endpoint, leagueSettings, options)
              .then(res => {
                const league = res.data;
                const leagues = this.state.leagues;
                leagues[index] = league;
                console.log(localStorage.getItem('leagues'))
                localStorage.setItem('leagues', JSON.stringify(leagues));
                console.log(localStorage.getItem('leagues'))
                this.setState({ leagues });
                // cb(index);
              })
              .catch(err => {
                console.log('error from createLeague', err);
                return -1;
              });
          }
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
