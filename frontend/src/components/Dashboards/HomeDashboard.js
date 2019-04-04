import React, { Component } from 'react';
import DashboardNavbar from './DashboardNavbar';
import ChooseLeague from '../CreateLeague/ChooseLeague';
// import Billing from '../Billing/Billing';
import AppContext from '../Context/AppContext';

class HomeDashboard extends Component {
  state = {
    admin: false,
    coach: false,
    chooseLeague: false
  };

  displayBilling = e => {
    e.preventDefault();
    this.setState({ chooseLeague: !this.state.chooseLeague });
  };

  render() {
    const { chooseLeague } = this.state;
    console.log('Home Drawer context check', this.props.context.state);
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
          {chooseLeague && <ChooseLeague />}
        </div>
      </>
    );
  }
}

HomeDashboard.contextType = AppContext;

export default HomeDashboard;
