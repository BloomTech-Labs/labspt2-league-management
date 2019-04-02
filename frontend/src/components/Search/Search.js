import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Divider from '@material-ui/core/Divider';

const styles = {
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 2,
    height: 28,
    margin: 4
  }
};

class Search extends React.Component {
  state = {
    name: '',
    leagues: []
  };

  endpoint =
    process.env.NODE_ENV === 'production'
      ? 'https://league-management.herokuapp.com/search'
      : 'http://localhost:4000/search';

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleSearch = async event => {
    event.preventDefault();
    const { name } = this.state;
    await axios
      .post(this.endpoint, { name: name })
      .then(res => {
        this.setState({
          name: '',
          leagues: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <Paper className={classes.root} elevation={1}>
          <InputBase
            className={classes.input}
            value={this.state.name}
            onChange={this.handleChange('name')}
            placeholder="Search Leagues"
          />
          <Divider className={classes.divider} />
          <IconButton
            className={classes.iconButton}
            onClick={this.handleSearch}
            aria-label="Search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
        {this.state.leagues.map(league => (
          <li key={league.id}>
            League:
            {league.name}
            <br />
            League Creator: First Name:
            {league.first_name}
            <br />
            Last Name:  
            {league.last_name}
          </li>
        ))}
      </>
    );
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Search);
