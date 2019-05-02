import React from 'react';
import ShowTeams from './ShowTeams.js';
import AddTeamToLeague from './AddTeamToLeague.js';
import { AppContext } from '../Context/AppContext';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    marginTop: '100px',
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: '80%',
      minWidth: '200px',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  input: {
    width: '60%',
    marginRight: '7.5%'
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  },
  btns: {
    marginTop: 10
  },
  btnTop: {
    width: '6%',
    minWidth: '75px'
    // position: 'relative',
    // left: '88%'
  },
  btnTopLeft: {
    width: '6%',
    minWidth: '75px'
    // position: 'relative',
    // left: '21%'
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'space-between'
    // paddingRight: 18
  }
});

class LeagueSetupTeams extends React.Component {
  state = {
    teams: [],
    name: ''
  };

  InputHandler = event => {
    event.preventDefault();
    const target = event.target;
    this.setState({ [target.name]: target.value });
  };

  SubmitHandler = event => {
    event.preventDefault();
    if (this.state.name !== '') {
      this.context.createTeamInLeague(this.state.name, this.props.index, () => {
        const lid = this.context.state.leagues[this.props.index].id;
        if (this.context.state.teams_by_league.find(x => x.league_id === lid)) {
          const teams = this.context.state.teams_by_league.find(
            x => x.league_id === lid
          ).teams;
          this.setState({
            name: '',
            teams
          });
        }
      });
    }
  };

  componentDidMount() {
    const lid = this.context.state.leagues[this.props.index].id;
    if (this.context.state.teams_by_league.find(x => x.league_id === lid)) {
      const teams = this.context.state.teams_by_league.find(
        x => x.league_id === lid
      ).teams;
      this.setState({
        teams
      });
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <>
        <div className={classes.btnContainer}>
          <Button
            className={classes.btnTopLeft}
            variant="contained"
            disabled={this.props.activeStep === 0}
            onClick={() => {
              this.props.back(this.state, this.props.index);
            }}
            className={classes.button}
          >
            Back
          </Button>
          <Button
            className={classes.btnTop}
            variant="contained"
            color="primary"
            onClick={() => {
              this.props.next(this.state, this.props.index);
            }}
          >
            Next
          </Button>
        </div>
        <div className={classes.main}>
          <CssBaseline />
          <Paper className={classes.paper}>
            <p>
              Please enter team names. You will be able to add more details and
              edit teams after initial setup.
            </p>
            <AddTeamToLeague
              InputHandler={this.InputHandler}
              name={this.state.name}
              SubmitHandler={this.SubmitHandler}
            />
            <ShowTeams teams={this.state.teams} />
            <div className={classes.btns}>
              <Button
                disabled={this.props.activeStep === 0}
                onClick={() => {
                  this.props.back(this.state, this.props.index);
                }}
                className={classes.button}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  this.props.next(this.state, this.props.index);
                }}
              >
                Next
              </Button>
            </div>
          </Paper>
        </div>
      </>
    );
  }
}

LeagueSetupTeams.contextType = AppContext;

export default withStyles(styles)(LeagueSetupTeams);
