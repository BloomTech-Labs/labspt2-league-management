import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import { AppContext } from './components/AppContext';

class App extends Component {
  render() {
    return (
      <div className="App">
        <>
          {/* <Route exact path="/" render={props => <LandingPage {...props} />} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} /> */}
        </>
      </div>
    );
  }
}

export default App;
