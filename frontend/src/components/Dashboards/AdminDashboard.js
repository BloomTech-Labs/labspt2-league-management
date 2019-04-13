import React, { Component } from 'react';
import DashboardNavbar from './DashboardNavbar';
import PublicCalendar from '../Calendars/PublicCalendar';
import DnDCalendar from '../Calendars/DnDCalendar';
import { AppContext } from '../Context/AppContext';
// import CreateLeague from '../Admin/CreateLeague';
import LeagueSetupSettings from '../CreateLeague/LeagueSetupSettings';
import TeamCardList from '../TeamCardList/TeamCardList.js';
import LeagueDetails from '../Admin/LeagueDetails';
import axios from 'axios';
import { withRouter } from 'react-router';

class AdminDashboard extends Component {
  state = {
    admin: true,
    coach: false,
    calendar: false,
    teamList: false,
    leagueSettings: true,
    editSchedule: false,
    cancellationRequests: false,
    // leagueId: this.props.location.state.leagueId,
    leagueIndex: this.props.location.state.leagueIndex
    // leagueName: this.context.state.leagueName
    // id: this.context.id
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
    // const { leagueIndex } = this.state;
    console.log(this.context.state.leagues);
    console.log(this.context.state.leagues[this.state.leagueIndex]);
    const league = this.context.state.leagues[this.state.leagueIndex];
    console.log(league);

    const {
      calendar,
      teamList,
      leagueSettings,
      editSchedule,
      cancellationRequests,
      leagueIndex
    } = this.state;
    return (
      // <AppContext.Consumer>
      //   {context => (
      <>
        <DashboardNavbar
          data={this.state}
          displayAdminContent={this.displayAdminContent}
          // context={context}
        />
        <div
          style={{
            margin: '100px 40px 20px 280px'
          }}
        >
          {calendar && <PublicCalendar index={leagueIndex} />}
          {teamList && <TeamCardList index={leagueIndex} />}
          {leagueSettings && <LeagueDetails league={league} />}
          {editSchedule && <DnDCalendar context={this.context} />}
          {cancellationRequests && <div>Cancellation Requests</div>}
        </div>
      </>
      //   )}
      // </AppContext.Consumer>
    );
  }
}

AdminDashboard.contextType = AppContext;

export default withRouter(AdminDashboard);
