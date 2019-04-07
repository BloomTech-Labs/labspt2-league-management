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
    teams: JSON.parse(localStorage.getItem('teams')) || [],
    teams_by_league: JSON.parse(localStorage.getItem('teams_by_league')) || []
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
            console.log('getLeagues()');
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
                const leagues = res.data;
                localStorage.setItem('leagues', JSON.stringify(leagues));
                leagues.forEach((league) => {
                  axios.get(`/leagues/${league.id}/teams`, options)
                    .then(res => {
                      const teams = res.data;
                      const joined = this.state.teams_by_league.concat({
                        league_id: league.id, teams
                      });
                      localStorage.setItem('teams_by_league', JSON.stringify(joined));
                      this.setState({
                        teams_by_league: joined
                      });
                    })
                    .catch(err => {
                      console.log('error from getTeams by league id', err);
                    })
                });
                this.setState({ leagues });
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
              name: leagueName,
              start_day: new Date().toString(), // using date only
              teams_game_count: null,
              game_length: null,
              monday_start_time: 'January 1, 2019 17:00:00',
              monday_end_time: 'January 1, 2019 21:00:00', // using time only
              tuesday_start_time: 'January 1, 2019 17:00:00', // using time only
              tuesday_end_time: 'January 1, 2019 21:00:00', // using time only
              wednesday_start_time: 'January 1, 2019 17:00:00', // using time only
              wednesday_end_time: 'January 1, 2019 21:00:00', // using time only
              thursday_start_time: 'January 1, 2019 17:00:00', // using time only
              thursday_end_time: 'January 1, 2019 21:00:00', // using time only
              friday_start_time: 'January 1, 2019 17:00:00', // using time only
              friday_end_time: 'January 1, 2019 21:00:00', // using time only
              saturday_start_time: 'January 1, 2019 09:00:00', // using time only
              saturday_end_time: 'January 1, 2019 21:00:00', // using time only
              sunday_start_time: 'January 1, 2019 09:00:00', // using time only
              sunday_end_time: 'January 1, 2019 21:00:00' // using time only
            };
            const options = {
              headers: {
                authorization: token
              }
            };
            axios
              .post(endpoint, league, options)
              .then(res => {
                league = res.data;
                const joined = this.state.leagues.concat(league);
                const index = joined.length - 1;
                localStorage.setItem('leagues', JSON.stringify(joined));
                this.setState({
                  leagues: joined
                });
                cb(index);
              })
              .catch(err => {
                console.log('error from createLeague', err);
              });
          },
          editLeague: (leagueSettings, index, cb) => {
            const lid = this.state.leagues[index].id;

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
                localStorage.setItem('leagues', JSON.stringify(leagues));
                this.setState({ leagues });
                cb();
              })
              .catch(err => {
                console.log('error from editLeague', err);
              });
          }
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
