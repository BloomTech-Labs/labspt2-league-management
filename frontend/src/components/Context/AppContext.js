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
    publicEvents: [],
    events: [],
    leagues: JSON.parse(localStorage.getItem('leagues')) || [],
    teams: JSON.parse(localStorage.getItem('teams')) || [],
    teams_by_league: JSON.parse(localStorage.getItem('teams_by_league')) || [],
    schedule_by_league:
      JSON.parse(localStorage.getItem('schedule_by_league')) || [],
    schedule_by_team:
      JSON.parse(localStorage.getItem('schedule_by_team')) || [],
    cancellations_by_league: []
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
                leagues.forEach(league => {
                  axios
                    .get(`/leagues/${league.id}/teams`, options)
                    .then(res => {
                      const teams = res.data;
                      const joined = this.state.teams_by_league.concat({
                        league_id: league.id,
                        teams
                      });
                      localStorage.setItem(
                        'teams_by_league',
                        JSON.stringify(joined)
                      );
                      this.setState({
                        teams_by_league: joined
                      });
                    })
                    .catch(err => {
                      console.log('error from getTeams by league id', err);
                    });
                  axios
                    .get(`/leagues/${league.id}/schedule`, options)
                    .then(res => {
                      const games = res.data;
                      console.log('schedule', res.data);
                      const scheduleJoined = this.state.schedule_by_league.concat(
                        {
                          league_id: league.id,
                          games
                        }
                      );
                      localStorage.setItem(
                        'schedule_by_league',
                        JSON.stringify(scheduleJoined)
                      );
                      this.setState({
                        schedule_by_league: scheduleJoined
                      });
                    })
                    .catch(err => {
                      console.log('error from getTeams by league id', err);
                    });
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
                const teams = res.data;
                localStorage.setItem('teams', JSON.stringify(res.data));
                teams.forEach(team => {
                  axios
                    .get(`/teams/${team.id}/schedule`, options)
                    .then(res => {
                      const games = res.data;
                      const joined = this.state.schedule_by_team.concat({
                        team_id: team.id,
                        games
                      });
                      localStorage.setItem(
                        'schedule_by_team',
                        JSON.stringify(joined)
                      );
                      this.setState({
                        schedule_by_team: joined
                      });
                    })
                    .catch(err => {
                      console.log('error from getTeams by league id', err);
                    });
                });
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
              teams_game_count: 6,
              game_length: 2,
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
          },
          createTeamInLeague: (teamName, index, cb) => {
            const token = localStorage.getItem('jwt') || this.signOut();
            const lid = this.state.leagues[index].id;
            const endpoint = `/leagues/${lid}/teams`;
            let team = {
              name: teamName,
              league_id: lid,
              coach_user_id: null,
              coach_name: null,
              coach_email: null,
              coach_phone: null,
              wins: 0,
              losses: 0,
              ties: 0
            };
            const options = {
              headers: {
                authorization: token
              }
            };
            axios
              .post(endpoint, team, options)
              .then(res => {
                team = res.data;
                let joined;
                if (this.state.teams_by_league.find(x => x.league_id === lid)) {
                  const foundIndex = this.state.teams_by_league.findIndex(
                    x => x.league_id === lid
                  );
                  const league = this.state.teams_by_league.splice(
                    foundIndex,
                    1
                  );

                  const teams = league[0].teams.concat(team);
                  joined = this.state.teams_by_league.concat({
                    league_id: lid,
                    teams: teams
                  });
                } else {
                  joined = this.state.teams_by_league.concat({
                    league_id: lid,
                    teams: team
                  });
                }
                localStorage.setItem('teams_by_league', JSON.stringify(joined));
                this.setState({
                  teams_by_league: joined
                });
                cb();
              })
              .catch(err => {
                console.log('error from createTeamInLeague', err);
              });
          },
          editTeamInLeague: (teamData, index, tid) => {
            const token = localStorage.getItem('jwt') || this.signOut();
            const leagues = JSON.parse(localStorage.getItem('leagues'));
            const lid = leagues[index].id;
            const endpoint = `/leagues/${lid}/teams/${tid}`;
            const options = {
              headers: {
                authorization: token
              }
            };
            axios
              .put(endpoint, teamData, options)
              .then(res => {
                const team = res.data;
                const teams_by_league = JSON.parse(
                  localStorage.getItem('teams_by_league')
                );
                const foundIndex = teams_by_league.findIndex(
                  x => x.league_id === lid
                );
                const teamIndex = teams_by_league[foundIndex].teams.findIndex(
                  x => x.id === tid
                );
                teams_by_league[foundIndex].teams[teamIndex] = team[0];
                localStorage.setItem(
                  'teams_by_league',
                  JSON.stringify(teams_by_league)
                );
                this.setState({ teams_by_league });
              })
              .catch(err => {
                console.log('error from editTeamInLeague', err);
              });
          },
          createScheduleInLeague: (games, index, cb) => {
            const token = localStorage.getItem('jwt') || this.signOut();
            const lid = this.state.leagues[index].id;
            const endpoint = `/leagues/${lid}/schedule`;
            const options = {
              headers: {
                authorization: token
              }
            };

            axios
              .post(endpoint, games, options)
              .then(res => {
                games = res.data;
                console.log(res.data);
                console.log(games);
                // this is just to remove the specific schedule from local storage if it exists
                if (
                  this.state.schedule_by_league.find(x => x.league_id === lid)
                ) {
                  const foundIndex = this.state.schedule_by_league.findIndex(
                    x => x.league_id === lid
                  );
                  const league = this.state.teams_by_league.splice(
                    foundIndex,
                    1
                  );
                }
                // and we update the array to contain the new values
                const joined = this.state.schedule_by_league.concat({
                  league_id: lid,
                  games: games
                });
                // then we put it back in to local storage with the update
                localStorage.setItem(
                  'schedule_by_league',
                  JSON.stringify(joined)
                );
                this.setState({
                  schedule_by_league: joined
                });
                cb();
              })
              .catch(err => {
                console.log('error from createScheduleInLeague', err);
              });
          },
          editGame: (game, league_id, home_team_name, away_team_name, cb) => {
            const token = localStorage.getItem('jwt') || this.signOut();
            const lid = league_id;
            const gid = game.id;
            const endpoint = `/leagues/${lid}/schedule/${gid}`;
            const options = {
              headers: {
                authorization: token
              }
            };
            axios
              .put(endpoint, game, options)
              .then(res => {
                // if (
                //   this.state.schedule_by_league.find(x => x.league_id === lid)
                // ) {
                const foundIndex = this.state.schedule_by_league.findIndex(
                  x => x.league_id === lid
                );
                const league = this.state.schedule_by_league.splice(
                  foundIndex,
                  1
                )[0];
                console.log(league.games);
                const foundGameIndex = league.games.findIndex(
                  x => x.id === gid
                );
                game.home_team_name = home_team_name;
                game.away_team_name = away_team_name;
                league.games[foundGameIndex] = game;
                // const game = league.games.splice(
                //   foundGameIndex,
                //   1
                // );
                // }
                // and we update the array to contain the new values
                const joined = this.state.schedule_by_league.concat({
                  league_id: league.league_id,
                  games: league.games
                });
                // then we put it back in to local storage with the update
                localStorage.setItem(
                  'schedule_by_league',
                  JSON.stringify(joined)
                );
                this.setState({
                  schedule_by_league: joined
                });
                cb();
                // const league = this.state.leagues;
                // leagues[index] = league;
                // localStorage.setItem('leagues', JSON.stringify(leagues));
                // this.setState({ leagues });
                // cb();
              })
              .catch(err => {
                console.log('error from editGame', err);
              });
          }
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
