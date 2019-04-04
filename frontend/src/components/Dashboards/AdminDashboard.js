import React, { Component } from 'react';
import DashboardNavbar from './DashboardNavbar';
import PublicCalendar from '../Calendars/PublicCalendar';
import DnDCalendar from '../Calendars/DnDCalendar';
import { AppContext } from '../Context/AppContext';
import CreateLeague from '../Admin/CreateLeague';
import TeamCardList from '../TeamCardList/TeamCardList.js';
import axios from 'axios';
import { withRouter } from "react-router";

class AdminDashboard extends Component {
  state = {
    admin: true,
    coach: false,
    calendar: true,
    teamList: false,
    leagueSettings: false,
    editSchedule: false,
    cancellationRequests: false,
    leagueIndex: this.props.location.state.leagueIndex,
    leagues: this.props.context.state.leagues,
    leagueInfo: this.props.context.state.leagues[this.props.location.state.leagueIndex]
  };

  displayAdminContent = e => {
    // console.log(e.currentTarget.id);
    this.setState({
      calendar: false,
      teamList: false,
      leagueSettings: false,
      editSchedule: false,
      cancellationRequests: false
    });
    this.setState({ [e.currentTarget.id]: true });
  };

  render() {
    const {
      calendar,
      teamList,
      leagueSettings,
      editSchedule,
      cancellationRequests,
      leagueInfo
    } = this.state;
    console.log('Grabbing individual league info in AdminDashboard', this.state.leagueIndex);
    console.log('Test 2', this.props.context.state.leagues[this.props.location.state.leagueIndex]);
    console.log('league State in AdminDashboard', this.props.context.state.leagues);
    console.log('TestRun getLeagueInfo', leagueInfo);
    console.log('leagues', this.state.leagues);
    // this.getLeagueInfo();
    console.log('TestRun #2', this.state.leagueInfo);
    return (
      <AppContext.Consumer>
        {context => (
          <>
            <DashboardNavbar
              data={this.state}
              displayAdminContent={this.displayAdminContent}
              context={context}
            />
            <div
              style={{
                margin: '100px 40px 20px 280px'
              }}
            >
              {calendar && <PublicCalendar context={context} leagueInfo={this.state.leagueInfo} />}
              {teamList && <TeamCardList 
              // context={context} 
              />}
              {leagueSettings && <CreateLeague context={context} />}
              {editSchedule && <DnDCalendar context={context} />}
              {cancellationRequests && <div>Cancellation Requests</div>}
            </div>
          </>
        )}
      </AppContext.Consumer>
    );
  }
}

export default withRouter(AdminDashboard);
