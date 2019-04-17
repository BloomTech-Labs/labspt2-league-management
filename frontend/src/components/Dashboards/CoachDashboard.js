import React, { Component } from 'react';
import DashboardNavbar from './DashboardNavbar';
import CoachCalendar from '../Calendars/CoachCalendar';
import { AppContext } from '../Context/AppContext';
import { withStyles } from '@material-ui/core/styles';

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
    const { classes, theme } = this.props;
    const { calendar, dashboard } = this.state;
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
          {calendar && <CoachCalendar context={this.context} />}
          {dashboard && <div>Dashboard</div>}
        </div>
      </>
    );
    //   </AppContext.Consumer>
    // );
  }
}

CoachDashboard.contextType = AppContext;

export default withStyles(styles, { withTheme: true })(CoachDashboard);
