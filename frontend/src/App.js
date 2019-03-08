import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';
import { AppContext } from './components/Context/AppContext';
import LandingPage from './components/LandingPage';

import AdminDashboard from './components/Dashboards/AdminDashboard';
import CoachDashboard from './components/Dashboards/CoachDashboard';
import HomeDashboard from './components/Dashboards/HomeDashboard';
import Signup from './components/SignUp.js';
import Signin from './components/SignIn.js';

class App extends Component {
  render() {
    // console.log(AppContext.Consumer);
    return (
      <AppContext.Consumer>
        {context => (
          <>
            {/* PUBLIC ROUTES*/}
            <Route
              exact
              path="/"
              render={props => <LandingPage context={context} />}
            />
            <Route path="/signup" component={Signup} />
            <Route
              path="/signin"
              render={props => <Signin signin={context.signin} />}
            />

            {/* PROTECTED ROUTES*/}
            {context.state.loggedIn ? (
              <Route
                path="/dashboard"
                render={props => (
                  <HomeDashboard username={context.state.username} />
                )}
              />
            ) : (
              <Route
                path="/dashboard"
                render={props => {
                  return <Redirect to="/" />;
                }}
              />
            )}

            <Route path="/dashboard/admin" component={AdminDashboard} />
            <Route path="/dashboard/coach" component={CoachDashboard} />
          </>
        )}
      </AppContext.Consumer>

      // admin dashboard - restricted
      // coach dashboard - restricted
      // create league form - restricted
      // public calendars
    );
  }
}

export default App;
