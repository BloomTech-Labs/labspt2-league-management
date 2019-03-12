import React, { Component } from 'react';
import DashboardNavbar from './DashboardNavbar';
// import AppContext from '../Context/AppContext';

class HomeDashboard extends Component {
  state = {
    admin: false,
    coach: false
  };

  render() {
    return (
      <DashboardNavbar
        data={this.state}
        username={this.props.username}
        context={this.props.context}
      />
    );
  }
}

export default HomeDashboard;
