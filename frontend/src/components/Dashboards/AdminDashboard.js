import React, { Component } from 'react';
import DashboardNavbar from './DashboardNavbar';
import PublicCalendar from '../Calendars/PublicCalendar';
import DnDCalendar from '../Calendars/DnDCalendar';
import { AppContext } from '../Context/AppContext';
// import CreateLeague from '../Admin/CreateLeague';
import LeagueSetupSettings from '../CreateLeague/LeagueSetupSettings';
import TeamCardList from '../TeamCardList/TeamCardList.js';
import LeagueDetails from '../Admin/LeagueDetails';
import axios from 'axios';
import { withRouter, Redirect } from 'react-router';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  content: {
    // marginLeft: drawerWidth,
    // backgroundColor: '#1565c0',
    margin: '75px 10px 10px 10px',
    // backgroundColor: '#6573c3',

    [theme.breakpoints.up('sm')]: {
      // width: `calc(100% - ${drawerWidth}px)`
      margin: '75px 20px 20px 260px'
      // zIndex: theme.zIndex.drawer + 1
    }
  }
});

class AdminDashboard extends Component {
  state = {
    admin: true,
    coach: false,
    calendar: false,
    teamList: false,
    leagueSettings: true,
    editSchedule: false,
    cancellationRequests: false,
    // leagueId: this.props.location.state.leagueId,
    leagueIndex: this.props.location.state.leagueIndex
    // leagueName: this.context.state.leagueName
    // id: this.context.id
  };

  displayAdminContent = e => {
    this.setState({
      calendar: false,
      teamList: false,
      leagueSettings: false,
      editSchedule: false,
      cancellationRequests: false
    });
    this.setState({ [e.currentTarget.id]: true });
  };

  render() {
    const { classes, theme } = this.props;
    // const { leagueIndex } = this.state;
    const {
      calendar,
      teamList,
      leagueSettings,
      editSchedule,
      cancellationRequests,
      leagueIndex
    } = this.state;
    // console.log(this.context.state.leagues);
    // console.log(this.context.state.leagues[this.state.leagueIndex]);
    const league = this.context.state.leagues[leagueIndex];

    if (!this.context.state.schedule_by_league[leagueIndex]) {
      return (
        <Redirect
          to={{
            pathname: '/dashboard/admin/setup',
            state: {
              leagueIndex: leagueIndex
            }
          }}
        />
      );
    }

    return (
      // <AppContext.Consumer>
      //   {context => (
      <>
        <DashboardNavbar
          data={this.state}
          displayAdminContent={this.displayAdminContent}
          // context={context}
        />
        <div
          className={classes.content}
          // style={{
          //   margin: '100px 40px 20px 280px'
          // }}
        >
          {calendar && <PublicCalendar index={leagueIndex} />}
          {teamList && <TeamCardList index={leagueIndex} />}
          {leagueSettings && <LeagueDetails league={league} />}
          {editSchedule && <DnDCalendar index={leagueIndex} />}
          {cancellationRequests && <div>Cancellation Requests</div>}
        </div>
      </>
      //   )}
      // </AppContext.Consumer>
    );
  }
}

AdminDashboard.contextType = AppContext;

export default withStyles(styles, { withTheme: true })(
  withRouter(AdminDashboard)
);
