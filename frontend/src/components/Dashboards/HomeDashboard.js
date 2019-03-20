import React, { Component } from 'react';
import DashboardNavbar from './DashboardNavbar';
import Billing from '../Billing/Billing';
// import AppContext from '../Context/AppContext';

class HomeDashboard extends Component {
  state = {
    admin: false,
    coach: false,
    billing: false
  };

  displayBilling = e => {
    e.preventDefault();
    this.setState({ billing: !this.state.billing });
  };

  render() {
    const { billing } = this.state;
    return (
      <>
        <DashboardNavbar
          data={this.state}
          username={this.props.username}
          displayBilling={this.displayBilling}
          context={this.props.context}
        />
        <div
          style={{
            margin: '100px 40px 20px 280px'
          }}
        >
          {billing && <Billing />}
        </div>
      </>
    );
  }
}

export default HomeDashboard;
