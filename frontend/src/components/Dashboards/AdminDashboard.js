import React, { Component } from 'react';
import DashboardNavbar from './DashboardNavbar';
import PublicCalendar from '../Calendars/PublicCalendar';
import DnDCalendar from '../Calendars/DnDCalendar';
import { AppContext } from '../Context/AppContext';
import CreateLeague from '../Admin/CreateLeague';

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
            />
            <div
              style={{
                margin: '100px 40px 20px 280px'
              }}
            >
              {calendar && <PublicCalendar context={context} />}
              {teamList && <div>Team List</div>}
              {leagueSettings && <CreateLeague context={context}/>}
              {editSchedule && <DnDCalendar context={context} />}
              {cancellationRequests && <div>Cancellation Requests</div>}
            </div>
          </>
        )}
      </AppContext.Consumer>
    );
  }
}

export default AdminDashboard;
