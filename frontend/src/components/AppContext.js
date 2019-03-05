import React, { Component } from 'react';

export const AppContext = React.createContext();

export default class AppProvider extends Component {
  state = {
    username: 'User',
    admin: false,
    coach: false
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
