import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';

export const AppContext = React.createContext();

export default class AppProvider extends Component {
  state = {
    username: 'User',
    admin: false,
    coach: false,
    loggedIn: false,
    events: [
      {
        id: '1',
        start: 'mar 4 2019 10: 00: 00',
        end: 'mar 4 2019 12: 00: 00',
        title: 'Team 1 vs Team 2'
      },
      {
        id: '2',
        start: 'mar 5 2019 12: 00: 00',
        end: 'mar 5 2019 14: 00: 00',
        title: 'Team 3 vs Team 4'
      },
      {
        id: '3',
        start: 'mar 6 2019 10: 00: 00',
        end: 'mar 6 2019 12: 00: 00',
        title: 'Team 5 vs Team 6'
      }
    ]
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          signin: () => {
            const token = localStorage.getItem('jwt');
            let username = null;
            if (token) {
              const decoded = jwt_decode(token);
              username = decoded.username;
              console.log('decoded jwt: ', decoded);
            }
            this.setState({ loggedIn: true, username: username });
          },
          signedIn: username => {
            this.setState({ loggedIn: true, username });
          },
          signOut: () => {
            this.setState({ loggedIn: false, username: null });
          },
          getEvents: () => {
            console.log(
              'An axios request will need to be done here to pull events from DB'
            );
            // this.setState({
            //   events: []
            // });
          },
          updateEvents: updates => {
            console.log('made it to context update function');
            this.setState({ events: updates });
            console.log('global events:', this.state.events);
          }
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
