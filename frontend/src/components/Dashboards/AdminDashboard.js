import React, { Component } from 'react';
import DashboardNavbar from './DashboardNavbar';

class AdminDashboard extends Component {
  state = {
    admin: true,
    coach: false,
    calendar: true,
    teamList: false,
    leagueSettings: false,
    editSchedule: false,
    cancellationRequests: false
  };

  displayAdminContent = e => {
    console.log(e.currentTarget.id);
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
      <>
        <DashboardNavbar
          data={this.state}
          displayAdminContent={this.displayAdminContent}
        />
        <div style={{ margin: '100px 80px 20px 280px' }}>
          {calendar && <div>calendar</div>}
          {teamList && <div>Team List</div>}
          {leagueSettings && <div>League Settings</div>}
          {editSchedule && <div>Edit Schedule</div>}
          {cancellationRequests && <div>Cancellation Requests</div>}
        </div>
      </>
    );
  }
}

export default AdminDashboard;
