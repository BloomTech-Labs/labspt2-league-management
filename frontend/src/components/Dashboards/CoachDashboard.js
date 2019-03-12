import React, { Component } from 'react';
import DashboardNavbar from './DashboardNavbar';
import CoachCalendar from '../Calendars/CoachCalendar';
import { AppContext } from '../Context/AppContext';

class CoachDashboard extends Component {
  state = {
    admin: false,
    coach: true,
    calendar: true,
    dashboard: false
  };

  displayCoachContent = e => {
    this.setState({
      calendar: false,
      dashboard: false
    });
    this.setState({ [e.currentTarget.id]: true });
  };
  render() {
    const { calendar, dashboard } = this.state;
    return (
      <AppContext.Consumer>
        {context => (
          <>
            <DashboardNavbar
              data={this.state}
              displayCoachContent={this.displayCoachContent}
            />
            <div style={{ margin: '100px 80px 20px 280px' }}>
              {calendar && <CoachCalendar context={context} />}
              {dashboard && <div>Dashboard</div>}
            </div>
          </>
        )}
      </AppContext.Consumer>
    );
  }
}

export default CoachDashboard;
