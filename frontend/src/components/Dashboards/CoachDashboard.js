import React, { Component } from 'react';
import DashboardNavbar from './DashboardNavbar';

class CoachDashboard extends Component {
  state = {
    admin: false,
    coach: true,
    calendar: true,
    dashboard: false
  };

  displayCoachContent = e => {
    console.log(e.currentTarget.id);
    this.setState({
      calendar: false,
      dashboard: false
    });
    this.setState({ [e.currentTarget.id]: true });
  };
  render() {
    const { calendar, dashboard } = this.state;
    return (
      <>
        <DashboardNavbar
          data={this.state}
          displayCoachContent={this.displayCoachContent}
        />
        <div style={{ margin: '100px 80px 20px 280px' }}>
          {calendar && <div>Calendar</div>}
          {dashboard && <div>Dashboard</div>}
        </div>
      </>
    );
  }
}

export default CoachDashboard;
