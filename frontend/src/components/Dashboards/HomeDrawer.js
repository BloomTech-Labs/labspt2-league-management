import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import { Link } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

class HomeDrawer extends Component {
  state = {
    expandLeagues: false,
    expandTeams: false
  };

  handleClick = e => {
    this.setState({ [e.currentTarget.id]: !this.state[e.currentTarget.id] });
  };

  selectLeague = () => {
    this.props.handleClose();
    this.setState({ expandLeagues: false });
  };

  selectTeam = () => {
    this.props.handleClose();
    this.setState({ expandTeams: false });
  };

  render() {
    const { leagues, teams, classes } = this.props;
    return (
      <List>
        {/* <Link to="/dashboard"> */}{' '}
        {/* This will eventually link to a component that will collect the name of the league and payment information */}
        {/* <ListItem button id="create" onClick={this.props.displayBilling}>
          <ListItemText primary="Create League" />
        </ListItem> */}
        {/* </Link> */}
        {/* <Divider /> */}
        <ListItem
          button
          key="admin"
          id="expandLeagues"
          onClick={this.handleClick}
          color="inherit"
          style={!leagues.length ? { display: 'none' } : null}
        >
          <ListItemText primary="Your Leagues" />
          {this.state.expandLeagues ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Divider />
        <Collapse in={this.state.expandLeagues} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {leagues.map((league, index) => (
              <>
                <Link
                  to={{
                    pathname: '/dashboard/admin',
                    state: {
                      leagueIndex: index
                    }
                  }}
                >
                  <ListItem
                    button
                    className={classes.nested}
                    onClick={this.selectLeague}
                  >
                    <ListItemText
                      id={league.id}
                      leagueIndex={index}
                      primary={league.name}
                    />
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
          style={!teams.length ? { display: 'none' } : null}
        >
          <ListItemText primary="Your Teams" />
          {this.state.expandTeams ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Divider />
        <Collapse in={this.state.expandTeams} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {teams.map((team, index) => {
              const id = team.id;
              return (
                <>
                  <Link
                    to={{
                      pathname: '/dashboard/coach',
                      state: {
                        teamIndex: index,
                        teamId: team.id
                      }
                    }}
                  >
                    <ListItem
                      button
                      className={classes.nested}
                      onClick={this.selectTeam}
                    >
                      <ListItemText
                        id={team.id}
                        teamId={team.id}
                        teamIndex={index}
                        primary={team.name}
                      />
                    </ListItem>
                  </Link>
                  <Divider />
                </>
              );
            })}
          </List>
        </Collapse>
      </List>
    );
  }
}

HomeDrawer.contextType = AppContext;

export default HomeDrawer;
