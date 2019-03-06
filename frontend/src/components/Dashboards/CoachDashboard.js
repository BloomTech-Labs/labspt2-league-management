import React, { Component } from 'react';
import DashboardNavbar from './DashboardNavbar';

class CoachDashboard extends Component {
  state = {
    admin: false,
    coach: true
  };
  render() {
    return <DashboardNavbar data={this.state} />;
  }
}

export default CoachDashboard;
