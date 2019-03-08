import React, { Component } from 'react';
import DashboardNavbar from './DashboardNavbar';

class HomeDashboard extends Component {
  state = {
    admin: false,
    coach: false
  };
  render() {
    return <DashboardNavbar data={this.state} username={this.props.username} />;
  }
}

export default HomeDashboard;
