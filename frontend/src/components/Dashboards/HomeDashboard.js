import React, { Component } from 'react';
import DashboardNavbar from './DashboardNavbar';
import ChooseLeague from '../CreateLeague/ChooseLeague';
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
      margin: '63px 0px 0px 240px'
    }
  }
});

class HomeDashboard extends Component {
  state = {
    admin: false,
    coach: false,
    chooseLeague: false
  };

  componentDidMount() {
    localStorage.removeItem('leagues');
    localStorage.removeItem('teams');
    localStorage.removeItem('teams_by_league');
    localStorage.removeItem('schedule_by_league');
    localStorage.removeItem('schedule_by_team');
    localStorage.removeItem('cancellations_by_league');
    this.context.getLeagues();
    this.context.getTeams();
  }

  displayBilling = e => {
    e.preventDefault();
    this.setState({ chooseLeague: !this.state.chooseLeague });
  };

  render() {
    const { classes } = this.props;
    const { chooseLeague } = this.state;
    return (
      <>
        <DashboardNavbar
          data={this.state}
          // username={this.context.username}
          displayBilling={this.displayBilling}
          // context={this.props.context}
        />
        <div
          className={classes.content}
          // style={{
          //   margin: '100px 40px 20px 280px'
          // }}
        >
          {/* {chooseLeague && <ChooseLeague />} */}
          <ChooseLeague />
        </div>
      </>
    );
  }
}

HomeDashboard.contextType = AppContext;

export default withStyles(styles, { withTheme: true })(HomeDashboard);
