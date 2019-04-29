import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountBox from '@material-ui/icons/AccountBox';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link, Redirect } from 'react-router-dom';
import WeatherWidget from '../Weather/WeatherWidget';
import { AppContext } from '../Context/AppContext';
import Search from '../Search/Search';

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
    // border: '1px solid white'
  },
  closeButton: {
    cursor: 'pointer',
    padding: 15,
    paddingLeft: 35,
    fontSize: '2rem'
  },
  drawerPaper: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth
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
    alignItems: 'center'
  },
  toolbarLeftContent: {
    display: 'flex',
    alignItems: 'center'
  },
  // page logo
  logo: {
    color: '#fff',
    backgroundColor: '#333',
    padding: 5,
    borderRadius: 5,
    fontFamily: 'Graduate',
    fontWeight: 'bold',
    fontSize: '1.8rem'
  },
  // account icon
  accountIcon: {
    fontSize: '3.4rem'
  },
});

class Navbar extends React.Component {
  state = {
    anchorEl: null,
    mobileOpen: false,
    logout: false,
    settings: false
  };

  componentDidMount() {
    const token = localStorage.getItem('jwt') || this.props.context.signOut();
    if (token) {
      this.context.signin();
    }
  }

  //   handleDrawerToggle = () => {
  //     this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  //   };

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
    this.setState({ logout: true });
    this.props.context.signOut();
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    if (this.state.logout) {
      return <Redirect to="/" />;
    }

    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            {/* <IconButton
              className={classes.menuButton}
              color="inherit"
              onClick={this.handleDrawerToggle}
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton> */}
            <div className={classes.toolbarRightContent}>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                <Link to="/" className={classes.logo}>
                  LM
                </Link>
              </Typography>

              {/* <Link to="/dashboard">
                <Button className={classes.button} onClick={this.homeView}>
                  Home
                </Button>
              </Link> */}
            </div>

            <div className={classes.toolbarCenterContent}>
              <div className={classes.search}>
                <Search />
              </div>
            </div>

            <div className={classes.toolbarRightContent}>
              <div className={classes.weather}>
                <WeatherWidget />
              </div>

              <div>
                <IconButton
                  id="anchorEl"
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                <AccountBox className={classes.accountIcon} />
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
                    <Link to="/settings">User Settings</Link>
                  </MenuItem>
                  <MenuItem onClick={this.logout}>Log Out</MenuItem>
                </Menu>
              </div>
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
