import React, { Component } from 'react';
import DashboardNavbar from './DashboardNavbar';
import CoachCalendar from '../Calendars/CoachCalendar';
import CoachCancellationList from '../Cancellations/CoachCancellationList';
import { AppContext } from '../Context/AppContext';
import { withRouter } from 'react-router';
import { withStyles } from '@material-ui/core/styles';

class CoachDashboard extends Component {
  state = {
    admin: false,
    coach: true,
    calendar: true,
    cancellations: false,
    teamIndex: this.props.location.state.teamIndex
  };

  displayCoachContent = e => {
    this.setState({
      calendar: false,
      cancellations: false
    });
    this.setState({ [e.currentTarget.id]: true });
  };

  render() {
    console.log(this.state);
    console.log(this.props.location.state);
    const { calendar, cancellations, teamIndex } = this.state;
    return (
      // <AppContext.Consumer>
      //   {context => (
      <>
        <DashboardNavbar
          data={this.state}
          displayCoachContent={this.displayCoachContent}
          // context={context}
        />
        <div style={{ margin: '100px 80px 20px 280px' }}>
          {calendar && <CoachCalendar context={this.context} />}
          {cancellations && <CoachCancellationList index={teamIndex} />}
        </div>
      </>
    );
    //   </AppContext.Consumer>
    // );
  }
}

CoachDashboard.contextType = AppContext;

export default withRouter(CoachDashboard);
