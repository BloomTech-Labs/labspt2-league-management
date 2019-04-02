import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';
import { AppContext } from './components/Context/AppContext';
import LandingPage from './components/LandingPage';

import AdminDashboard from './components/Dashboards/AdminDashboard';
import CoachDashboard from './components/Dashboards/CoachDashboard';
import HomeDashboard from './components/Dashboards/HomeDashboard';
import UserSettings from './components/UserSettings/UserSettings';
import Authorize from './components/Authorize';
import Signup from './components/SignUp.js';
import Signin from './components/SignIn.js';
import Search from './components/Search/Search';
import PublicCalendar from './components/Calendars/PublicCalendar';


class App extends Component {
  render() {
    // console.log(AppContext.Consumer);
    return (
      <AppContext.Consumer>
        {context => {
          const homepage = props => {
            return <Redirect to="/" />;
          };
          return (
            <>
              {/* PUBLIC ROUTES*/}
              <Route
                exact
                path="/"
                render={props => <LandingPage context={context} />}
              />
              <Route path="/search" component={Search} />
              <Route path="/schedule" component={PublicCalendar} />
              <Route path="/signup" component={Signup} />
              <Route
                path="/signin"
                render={props => <Signin signin={context.signin} />}
              />
              <Route 
                path="/authorize"
                render={props => <Authorize signin={context.signin} />}
              />
              {/* PROTECTED ROUTES*/}

              <Route
                exact
                path="/dashboard"
                render={
                  context.state.loggedIn
                    ? props => (
                        <HomeDashboard
                          username={context.state.username}
                          context={context}
                        />
                      )
                    : homepage
                }
              />

              <Route
                path="/settings"
                render={
                  context.state.loggedIn
                    ? props => <UserSettings context={context} />
                    : homepage
                }
              />
              <Route
                path="/dashboard/admin"
                render={
                  context.state.loggedIn
                    ? props => <AdminDashboard />
                    : homepage
                }
              />
              <Route
                path="/dashboard/coach"
                render={
                  context.state.loggedIn
                    ? props => <CoachDashboard />
                    : homepage
                }
              />
            </>
          );
        }}
      </AppContext.Consumer>

      // admin dashboard - restricted
      // coach dashboard - restricted
      // create league form - restricted
      // public calendars
    );
  }
}

export default App;
