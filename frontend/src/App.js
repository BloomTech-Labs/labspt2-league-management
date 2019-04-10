import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';
import { AppContext } from './components/Context/AppContext';
import LandingPage from './components/LandingPage';
import Search from './components/Search/Search';

import AdminDashboard from './components/Dashboards/AdminDashboard';
import CoachDashboard from './components/Dashboards/CoachDashboard';
import HomeDashboard from './components/Dashboards/HomeDashboard';
import UserSettings from './components/UserSettings/UserSettings';
import Authorize from './components/Authorize';
import Signup from './components/SignUp.js';
import Signin from './components/SignIn.js';
import LeagueSetup from './components/Admin/LeagueSetup';

class App extends Component {
  render() {
    // console.log(AppContext.Consumer);
    const homepage = props => {
      return <Redirect to="/" />;
    };
    return (
      // <AppContext.Consumer>
      //   {context => {
      // return (
      <>
        {/* PUBLIC ROUTES*/}
        <Route
          exact
          path="/"
          component={LandingPage} // Wait to pull in Griffin's changes
          // render={props => <LandingPage context={context} />}
        />
        <Route path="/search" component={Search} />
        <Route path="/signup" component={Signup} />
        <Route
          path="/signin"
          component={Signin}
          // render={props => (
          //   <Signin
          //     signin={context.signin}
          //     getLeagues={context.getLeagues}
          //     getTeams={context.getTeams}
          //   />
          // )}
        />
        <Route
          path="/authorize"
          component={Authorize}
          // render={props => <Authorize signin={context.signin} />}
        />
        {/* PROTECTED ROUTES*/}

        <Route
          exact
          path="/dashboard"
          component={this.context.state.loggedIn ? HomeDashboard : homepage}
        />

        <Route
          path="/settings"
          component={this.context.state.loggedIn ? UserSettings : homepage}
        />
        <Route
          exact
          path="/dashboard/admin"
          component={this.context.state.loggedIn ? AdminDashboard : homepage}
        />
        <Route
          path="/dashboard/coach"
          component={this.context.state.loggedIn ? CoachDashboard : homepage}
        />
        <Route
          path="/dashboard/admin/setup"
          component={this.context.state.loggedIn ? LeagueSetup : homepage}
        />
      </>
    );
    // }}
    // </AppContext.Consumer>

    // admin dashboard - restricted
    // coach dashboard - restricted
    // create league form - restricted
    // public calendars
    // );
  }
}
App.contextType = AppContext;

export default App;
