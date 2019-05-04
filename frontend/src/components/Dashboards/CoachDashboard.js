import React, { Component } from 'react';
import DashboardNavbar from './DashboardNavbar';
import CoachCalendar from '../Calendars/CoachCalendar';
import PublicCalendar from '../Calendars/PublicCalendar';
import CoachCancellationList from '../Cancellations/CoachCancellationList';
import { AppContext } from '../Context/AppContext';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  content: {
    marginTop: 50,
    fontFamily: 'Montserrat',
    backgroundColor: '#eee',
    height: 'auto',
    minHeight: 'calc(100vh - 63px)',

    [theme.breakpoints.up('sm')]: {
      margin: '63px 0px 00px 240px'
    }
  }
});

class CoachDashboard extends Component {
  state = {
    admin: false,
    coach: true,
    calendar: true,
    cancellations: false,
    teamIndex: this.props.location.state.teamIndex,
    teamId: this.props.location.state.teamId
  };

  displayCoachContent = e => {
    this.setState({
      calendar: false,
      cancellations: false
    });
    this.setState({ [e.currentTarget.id]: true });
  };

  render() {
    const { classes } = this.props;
    const { calendar, cancellations, teamIndex, teamId } = this.state;

    return (
      // <AppContext.Consumer>
      //   {context => (
      <>
        <DashboardNavbar
          data={this.state}
          displayCoachContent={this.displayCoachContent}
          // context={context}
        />
        <div className={classes.content}>
          {calendar && <CoachCalendar index={teamIndex} teamId={teamId} />}
          {cancellations && <CoachCancellationList index={teamIndex} />}
        </div>
      </>
    );
    //   </AppContext.Consumer>
    // );
  }
}

CoachDashboard.contextType = AppContext;

export default withStyles(styles, { withTheme: true })(
  withRouter(CoachDashboard)
);
