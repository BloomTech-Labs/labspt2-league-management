import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    backgroundColor: "#333",
    [theme.breakpoints.up("sm")]: {
      // width: `calc(100% - ${drawerWidth}px)`
      width: "100%",
      zIndex: theme.zIndex.drawer + 1
    }
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  button: {
    color: "white"
    // border: '1px solid white'
  },
  // toolbar: theme.mixins.toolbar,
  toolbar: {
    height: 63,
    textAlign: "right"
  },
  closeButton: {
    cursor: "pointer",
    padding: 15,
    paddingLeft: 35,
    fontSize: "2rem"
  },
  drawerPaper: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth
    }
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  selected: {
    color: "white",
    borderBottom: "1px solid white",
    borderRadius: 0
  },
  nested: {
    flexDirection: "column",
    alignItems: "flex-start",
    paddingLeft: 40
  }
});

class MenuAppBar extends React.Component {
  state = {
    auth: true, // global
    expandLeagues: false,
    expandTeams: false,
    anchorEl: null,
    mobileOpen: false,
    admin: false,
    coach: false,
    leagues: [], // global
    teams: [] // global
  };

  componentDidMount() {
    // This is where an axios request would be done to get the user's info so the correct leagues and teams show up in the lists.
    // state would also include user settings, and other info on the user (global state?)
    const { admin, coach } = this.props.data;
    this.setState({
      leagues: [
        { id: 1, name: "League 1 - Name" },
        { id: 2, name: "League 2 - Name" }
      ],
      teams: [{ id: 1, name: "Team 1" }],
      admin,
      coach,
      expandLeagues: false,
      expandTeams: false
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
    this.setState({ anchorEl: null, adminAnchorEl: null, coachAnchorEl: null });
  };

  handleClick = e => {
    this.setState({ [e.currentTarget.id]: !this.state[e.currentTarget.id] });
  };

  login = () => {
    setTimeout(() => {
      this.setState({ auth: true });
    }, 500);
  };

  logout = () => {
    this.handleClose();
    this.setState({ auth: false });
  };

  // homeView = () => {
  //   this.handleClose();
  //   this.setState({ admin: false, coach: false });
  // };

  setAdmin = () => {
    this.handleClose();
    this.setState({ expandLeagues: false });
  };

  setCoach = () => {
    this.handleClose();
    this.setState({ expandTeams: false });
  };

  render() {
    const { classes, theme } = this.props;
    const {
      auth,
      anchorEl,
      mobileOpen,
      admin,
      coach,
      leagues,
      teams
    } = this.state;
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
          <List>
            <ListItem button key="create">
              <ListItemText primary="Create League" />
            </ListItem>
            <Divider />
            <ListItem
              button
              key="admin"
              id="expandLeagues"
              onClick={this.handleClick}
              color="inherit"
            >
              <ListItemText primary="Manage League" />
              {this.state.expandLeagues ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Divider />
            <Collapse
              in={this.state.expandLeagues}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                {leagues.map(league => (
                  <>
                    <Link to="/dashboard/admin">
                      <ListItem
                        button
                        className={classes.nested}
                        onClick={this.setAdmin}
                      >
                        <ListItemText primary={league.name} />
                      </ListItem>
                    </Link>
                    <Divider />
                  </>
                ))}
              </List>
            </Collapse>
            <ListItem
              button
              key="coach"
              id="expandTeams"
              onClick={this.handleClick}
              color="inherit"
            >
              <ListItemText primary="Manage Team" />
              {this.state.expandTeams ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Divider />
            <Collapse in={this.state.expandTeams} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {teams.map(team => (
                  <>
                    <Link to="/dashboard/coach">
                      <ListItem
                        button
                        className={classes.nested}
                        onClick={this.setCoach}
                      >
                        <ListItemText primary={team.name} />
                      </ListItem>
                    </Link>
                    <Divider />
                  </>
                ))}
              </List>
            </Collapse>
          </List>
        )}
        {admin && !coach && (
          <List>
            {[
              { name: "calendar", text: "Calendar" },
              { name: "teamList", text: "Team List" },
              { name: "leagueSettings", text: "League Settings" },
              { name: "editSchedule", text: "Edit Schedule" },
              { name: "cancellationRequests", text: "Cancellation Requests" }
            ].map((item, index) => (
              <>
                <ListItem
                  button
                  key={item.name}
                  id={item.name}
                  onClick={this.props.displayAdminContent}
                >
                  <ListItemText primary={item.text} />
                </ListItem>
                <Divider />
              </>
            ))}
          </List>
        )}
        {coach && !admin && (
          <List>
            {["Dashboard", "Calendar"].map((text, index) => (
              <>
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
                <Divider />
              </>
            ))}
          </List>
        )}
      </div>
    );

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
              League Management
            </Typography>
            <Link to="/dashboard">
              <Button
                className={!admin && !coach ? classes.selected : classes.button}
                onClick={this.homeView}
              >
                Home
              </Button>
            </Link>
            {/*<Button
              className={admin && !coach ? classes.selected : classes.button}
              onClick={this.setAdmin}
            >
              Admin
            </Button>
            <Button
              className={!admin && coach ? classes.selected : classes.button}
              onClick={this.setCoach}
            >
              Coach
            </Button>*/}
            {!auth && (
              <Button className={classes.button} onClick={this.login}>
                Log In
              </Button>
            )}
            {auth && (
              <div>
                <IconButton
                  id="anchorEl"
                  aria-owns={open ? "menu-appbar" : undefined}
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
                    vertical: "top",
                    horizontal: "right"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  {/*<MenuItem onClick={this.homeView}>Home</MenuItem>*/}
                  <MenuItem onClick={this.handleClose}>
                    Account Settings
                  </MenuItem>
                  <MenuItem onClick={this.handleClose}>
                    Billing Information
                  </MenuItem>
                  <Link to="/">
                    <MenuItem>Log Out</MenuItem>
                  </Link>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
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

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(MenuAppBar);