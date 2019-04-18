import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link, Redirect } from 'react-router-dom';
import HomeDrawer from './HomeDrawer';
import AdminDrawer from './AdminDrawer';
import CoachDrawer from './CoachDrawer';
import { AppContext } from '../Context/AppContext';
import WeatherWidget from '../Weather/WeatherWidget';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    backgroundColor: '#1565c0',
    // backgroundColor: '#6573c3',

    [theme.breakpoints.up('sm')]: {
      // width: `calc(100% - ${drawerWidth}px)`
      width: '100%',
      zIndex: theme.zIndex.drawer + 1
    }
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  button: {
    color: 'white'
  },
  // toolbar: theme.mixins.toolbar,
  toolbar: {
    height: 63,
    textAlign: 'right'
  },
  closeButton: {
    cursor: 'pointer',
    padding: 15,
    paddingLeft: 35,
    fontSize: '2rem'
  },
  drawerPaper: {
    width: '100%',
    backgroundColor: '#E2ECF7',
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth
    }
  },
  weather: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      marginRight: '3%'
    }
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  selected: {
    color: 'white',
    borderBottom: '1px solid white',
    borderRadius: 0
  },
  nested: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: 40
  }
});

class DashboardNavbar extends React.Component {
  state = {
    anchorEl: null,
    mobileOpen: false,
    // admin: false,
    // coach: false,
    logout: false,
    settings: false
  };

  static contextType = AppContext;

  componentDidMount() {
    const token = localStorage.getItem('jwt') || this.context.signOut();
    if (token) {
      this.context.signin();
    }

    // This is where an axios request would be done to get the user's info so the correct leagues and teams show up in the lists.
    // state would also include user settings, and other info on the user (global state?)
    const { admin, coach } = this.props.data;
    this.setState({
      admin,
      coach
    });
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ [event.currentTarget.id]: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null, mobileOpen: false });
  };

  handleSettings = () => {
    this.setState({ settings: !this.state.settings });
    this.handleClose();
  };

  handleClick = e => {
    this.setState({ [e.currentTarget.id]: !this.state[e.currentTarget.id] });
  };

  logout = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('leagues');
    localStorage.removeItem('teams');
    localStorage.removeItem('teams_by_league');
    localStorage.removeItem('schedule_by_league');
    localStorage.removeItem('cancellations_by_league');
    this.setState({ logout: true });
    this.context.signOut();
  };

  render() {
    const { classes, theme } = this.props;
    const { anchorEl, mobileOpen, admin, coach } = this.state;
    const open = Boolean(anchorEl);

    const drawer = (
      <div>
        <div className={classes.toolbar}>
          {mobileOpen ? (
            <CloseIcon
              className={classes.closeButton}
              onClick={this.handleDrawerToggle}
            />
          ) : null}
        </div>
        <Divider />
        {!admin && !coach && (
          <HomeDrawer
            classes={classes}
            leagues={this.context.state.leagues}
            teams={this.context.state.teams}
            handleClose={this.handleClose}
            displayBilling={this.props.displayBilling}
          />
        )}
        {admin && !coach && (
          <AdminDrawer
            handleClose={this.handleClose}
            displayAdminContent={this.props.displayAdminContent}
            leagues={this.context.state.leagues}
            teams={this.context.state.teams}
          />
        )}
        {coach && !admin && (
          <CoachDrawer
            handleClose={this.handleClose}
            displayCoachContent={this.props.displayCoachContent}
            teams={this.context.state.teams}
          />
        )}
      </div>
    );
    if (this.state.logout) {
      return <Redirect to="/" />;
    }

    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              onClick={this.handleDrawerToggle}
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              <Link
                to="/"
                style={{
                  color: '#fff',
                  backgroundColor: '#333',
                  padding: 10,
                  fontFamily: 'Audiowide',
                  borderRadius: 5
                }}
              >
                LM
              </Link>
            </Typography>
            {/* <AppContext.Consumer>
              {context => ( */}
            <Typography variant="h6" color="inherit" className={classes.grow}>
              {this.context.state.username}
            </Typography>
            {/* )}
            </AppContext.Consumer> */}
            <div className={classes.weather}>
              <WeatherWidget />
            </div>
            <Link to="/dashboard">
              <Button
                className={!admin && !coach ? classes.selected : classes.button}
                onClick={this.homeView}
              >
                Home
              </Button>
            </Link>

            <div>
              <IconButton
                id="anchorEl"
                aria-owns={open ? 'menu-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleSettings}>
                  <Link to="/settings">Account Settings</Link>
                </MenuItem>
                <MenuItem onClick={this.handleClose}>
                  Billing Information
                </MenuItem>

                <MenuItem onClick={this.logout}>Log Out</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>

        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
      </div>
    );
  }
}

DashboardNavbar.contextType = AppContext;

DashboardNavbar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(DashboardNavbar);
