import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

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
  }
});

class SearchNavbar extends React.Component {
  state = {
    anchorEl: null,
    mobileOpen: false,

    settings: false
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

  render() {
    const { classes } = this.props;
    // const { anchorEl } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
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
            <Link to="/">
              <Button className={classes.button} onClick={this.homeView}>
                Home
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

SearchNavbar.contextType = AppContext;

SearchNavbar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(SearchNavbar);
