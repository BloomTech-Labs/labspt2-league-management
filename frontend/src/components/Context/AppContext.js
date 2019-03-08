import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';

export const AppContext = React.createContext();

export default class AppProvider extends Component {
  state = {
    username: 'User',
    admin: false,
    coach: false,
    loggedIn: false
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
          signedOut: () => {
            this.setState({ loggedIn: false, username: null });
          }
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
