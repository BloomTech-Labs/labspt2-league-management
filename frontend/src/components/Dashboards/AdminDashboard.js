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
    leagueId: this.props.location.state.leagueId,
    leagueIndex: this.props.location.state.leagueIndex,
    leagueName: this.props.location.state.leagueName,
    id: this.props.id
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
      cancellationRequests
    } = this.state;
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
              {calendar && <PublicCalendar context={context} />}
              {teamList && <TeamCardList context={context} />}
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
