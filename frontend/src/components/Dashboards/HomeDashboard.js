import React, { Component } from 'react';
import DashboardNavbar from './DashboardNavbar';
import ChooseLeague from '../CreateLeague/ChooseLeague';
// import Billing from '../Billing/Billing';
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
    const { classes, theme } = this.props;
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
