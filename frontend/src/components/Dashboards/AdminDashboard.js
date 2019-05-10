import { withStyles } from '@material-ui/core/styles';
import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router';
import LeagueDetails from '../Admin/LeagueDetails';
import DnDCalendar from '../Calendars/DnDCalendar';
import PublicCalendar from '../Calendars/PublicCalendar';
import { AppContext } from '../Context/AppContext';
import TeamCardList from '../TeamCardList/TeamCardList.js';
import DashboardNavbar from './DashboardNavbar';
import AdminCancellationList from '../Cancellations/AdminCancellationList';

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
    // backgroundColor: '#1565c0',
    height: 'auto',
    minHeight: 'calc(100vh - 63px)',

    [theme.breakpoints.up('sm')]: {
      margin: '63px 0px 0px 240px'
    }
  }
});

class AdminDashboard extends Component {
  state = {
    admin: true,
    coach: false,
    calendar: false,
    edit: false,
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

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit });
  };

  render() {
    const { classes } = this.props;
    // const { leagueIndex } = this.state;
    const {
      calendar,
      edit,
      teamList,
      leagueSettings,
      editSchedule,
      cancellationRequests,
      leagueIndex
    } = this.state;
    const league = this.context.state.leagues[leagueIndex];

    if (!this.context.state.schedule_by_league[leagueIndex].games.length) {
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
          {calendar && !edit ? (
            <PublicCalendar index={leagueIndex} toggleEdit={this.toggleEdit} />
          ) : null}
          {calendar && edit ? (
            <DnDCalendar index={leagueIndex} toggleEdit={this.toggleEdit} />
          ) : null}
          {teamList && <TeamCardList index={leagueIndex} />}
          {leagueSettings && <LeagueDetails league={league} />}
          {/* {editSchedule && <DnDCalendar index={leagueIndex} />} */}
          {cancellationRequests && (
            <AdminCancellationList index={leagueIndex} />
          )}
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
