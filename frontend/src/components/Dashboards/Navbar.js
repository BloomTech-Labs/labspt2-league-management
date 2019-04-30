import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import Search from '../Search/Search';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: '#1565c0',
    [theme.breakpoints.up('sm')]: {
      // width: `calc(100% - ${drawerWidth}px)`
      width: '100%',
      zIndex: theme.zIndex.drawer + 1
    }
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  // toolbar: theme.mixins.toolbar,
  toolbar: {
    height: 60,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  toolbarRightContent: {
    display: 'flex',
    alignItems: 'center'
  },
  toolbarCenterContent: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    left: 'calc(50% - 200px)',
    [theme.breakpoints.down('sm')]: {
      left: 'calc(50% - 200px)'
    },
    [theme.breakpoints.down('xs')]: {
      left: 'calc(50% - 145px)'
    }
  },
  toolbarLeftContent: {
    display: 'flex',
    alignItems: 'center'
  },
  // page logo
  logo: {
    color: '#fff',
    backgroundColor: '#333',
    padding: 7,
    borderRadius: 5,
    // fontFamily: 'Graduate',
    fontFamily: 'Audiowide',
    fontWeight: 'bold',
    fontSize: '1.4rem'
  },
  // account icon
  accountIcon: {
    fontSize: '3.4rem'
  },
  lpLink: {
    color: '#ffffff'
  },
  button: {
    color: 'white',
    fontSize: '1rem'
  }
});

class Navbar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <div className={classes.toolbarRightContent}>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                <Link to="/" className={classes.logo}>
                  LM
                </Link>
              </Typography>
            </div>

            <div className={classes.toolbarCenterContent}>
              <div className={classes.search}>
                <Search />
              </div>
            </div>

            <div className={classes.toolbarRightContent}>
              {!this.props.loggedIn ? (
                <>
                  <Link to="/signin" className={classes.lpLink}>
                    <Button className={classes.button}>Sign In</Button>
                  </Link>
                  <Link to="/signup" className={classes.lpLink}>
                    <Button className={classes.button}>Sign Up</Button>
                  </Link>
                </>
              ) : (
                <Link to="/dashboard">
                  <Button className={classes.button} onClick={this.homeView}>
                    Home
                  </Button>
                </Link>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navbar.contextType = AppContext;

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Navbar);
