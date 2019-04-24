import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import ReactCardFlip from 'react-card-flip';
import { AppContext } from '../Context/AppContext';
import UserSearch from './UserSearch.js';

const styles = theme => ({
  cardFront: {
    minWidth: '285px',
    maxWidth: '320px',
    // border: '1px solid lightgrey',
    width: '45%',
    borderRadius: '10px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    boxShadow: '1px 1px 4px #333, 2px 2px 7px #1565c0',
    minHeight: '350px'
  },
  cardBack: {
    minWidth: '275px',
    maxWidth: '300px',
    // border: '2px solid lightgrey',
    width: '45%',
    borderRadius: '10px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    boxShadow: '1px 1px 4px #333, 2px 2px 7px #ef6c00',
    height: '445px'
  },
  container: {
    width: '90%'
  },
  title: {
    fontSize: '1.6rem',
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: 'Montserrat'
  },
  pos: {
    border: '1px solid black',
    marginTop: '12px',
    width: '65%',
    margin: '0 auto',
    maxWidth: '180px',
    borderRadius: '15px',
    marginBottom: '12px',
    padding: '10px',
    fontFamily: 'Montserrat'
  },
  upcoming: {
    border: '1px solid black',
    marginTop: '8px',
    // width: '95%',
    margin: '0 auto',
    borderRadius: '15px',
    // marginBottom: '5px',
    padding: '10px',
    fontFamily: 'Montserrat'
  },
  button: {
    border: '1px solid lightgrey',
    borderRadius: '8px',
    fontFamily: 'Montserrat'
  },
  p: {
    fontSize: 13,
    fontFamily: 'Montserrat'
  }
});

class TeamCard extends React.Component {
  state = {
    name: this.props.name,
    id: this.props.id,
    coach_name: this.props.coach_name || '',
    coach_email: this.props.coach_email || '',
    coach_phone: this.props.coach_phone || '',
    wins: this.props.wins,
    losses: this.props.losses,
    ties: this.props.ties,
    isFlipped: false,
    containsTies: false,
    teamSchedule: [],
    scheduleGame1: {
      game1Month: null,
      game1Day: null,
      game1Time: null,
      game1Opp: null
    },
    scheduleGame2: {
      game2Month: null,
      game2Day: null,
      game2Time: null,
      game2Opp: null
    },
    game1Exists: false,
    bothGamesExist: false,
    seasonComplete: false,
    users: []
  };

  ClickHandler = event => {
    event.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  };

  InputHandler = event => {
    event.preventDefault();
    const target = event.target;
    this.setState({ [target.name]: target.value });
    console.log('Something', target.value);
  };
  async GetUsers() {
    await axios
      .get('/search/users')
      .then(response => {
        let users = [];
        users = response.data;
        let coachEmail = this.state.coach_email;
        const coachId = users.find(x => x.email === coachEmail).id;
        console.log(coachId);
        this.setState({
          users: response.data,
          coach_user_id: coachId
        });
        console.log(this.state.users);
        console.log(this.state.users[1]);
      })
      .catch(error => console.log(error));
    console.log(this.state.users);
  }

  EditHandler = async event => {
    event.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    if (this.state.coach_email !== '') {
      await this.GetUsers();
    }
    let teamData = {
      name: this.state.name,
      id: this.state.id,
      coach_name: this.state.coach_name,
      coach_email: this.state.coach_email,
      coach_user_id: this.state.coach_user_id || null,
      coach_phone: this.state.coach_phone,
      wins: this.state.wins,
      losses: this.state.losses,
      ties: this.state.ties
    };
    await console.log(teamData);
    await this.context.editTeamInLeague(
      teamData,
      this.props.index,
      this.state.id
    );
    if (this.state.ties > 0) {
      this.setState({
        containsTies: true
      });
    }
  };

  getTeamSchedule() {
    const lid = this.context.state.leagues[this.props.index].id;
    const teamSchedule = [];
    if (this.context.state.schedule_by_league.find(x => x.league_id === lid)) {
      const leagueSchedule = this.context.state.schedule_by_league.find(
        x => x.league_id === lid
      ).games;
      for (let i = 0; i < leagueSchedule.length; i++) {
        if (leagueSchedule[i].home_team_id === this.state.id) {
          teamSchedule.push(leagueSchedule[i]);
        }
        if (leagueSchedule[i].away_team_id === this.state.id) {
          teamSchedule.push(leagueSchedule[i]);
        }
      }
    }
    this.setState({
      teamSchedule
    });
  }

  displayGames() {
    let editedTeamSchedule = this.state.teamSchedule;
    const lid = this.context.state.leagues[this.props.index].id;
    for (let i = 0; i < editedTeamSchedule.length; i++) {
      let today = new Date();
      editedTeamSchedule.splice(i, 1);
    }
    if (editedTeamSchedule.length > 2) {
      editedTeamSchedule.length = 2;
    }
    if (editedTeamSchedule[0]) {
      let game1Opp;
      // Opponent Testing
      if (this.context.state.teams_by_league.find(x => x.league_id === lid)) {
        const teamsInLeague = this.context.state.teams_by_league.find(
          x => x.league_id === lid
        ).teams;
        if (editedTeamSchedule[0].home_team_id !== this.state.id) {
          const OppTeamIndex = teamsInLeague.findIndex(
            x => x.id === editedTeamSchedule[0].home_team_id
          );
          game1Opp = teamsInLeague[OppTeamIndex].name;
        } else if (editedTeamSchedule[0].away_team_id !== this.state.id) {
          const OppTeamIndex = teamsInLeague.findIndex(
            x => x.id === editedTeamSchedule[0].away_team_id
          );
          game1Opp = teamsInLeague[OppTeamIndex].name;
        }
        const game1 = new Date(editedTeamSchedule[0].start_time);
        let options = { month: 'long' };
        let game1Month = new Intl.DateTimeFormat('en-US', options).format(
          game1
        );
        let game1Day = game1.getDate();
        let game1Hours = game1.getHours();
        let game1Minutes = game1.getMinutes();
        if (game1Minutes < 10) {
          game1Minutes = '0' + game1Minutes;
        }
        let game1Time = game1Hours + ':' + game1Minutes;
        if (game1Hours < 12) {
          game1Time += ' AM';
        }

        if (game1Hours > 12) {
          game1Time += ' PM';
        }

        let scheduleGame1 = {
          game1Month,
          game1Day,
          game1Time,
          game1Opp
        };
        this.setState({
          scheduleGame1
        });
      }
    }

    if (editedTeamSchedule[1]) {
      let game2Opp;

      // Opponent Testing
      if (this.context.state.teams_by_league.find(x => x.league_id === lid)) {
        const teamsInLeague = this.context.state.teams_by_league.find(
          x => x.league_id === lid
        ).teams;
        if (editedTeamSchedule[1].home_team_id !== this.state.id) {
          const OppTeamIndex = teamsInLeague.findIndex(
            x => x.id === editedTeamSchedule[1].home_team_id
          );
          game2Opp = teamsInLeague[OppTeamIndex].name;
        } else if (editedTeamSchedule[1].away_team_id !== this.state.id) {
          const OppTeamIndex = teamsInLeague.findIndex(
            x => x.id === editedTeamSchedule[1].away_team_id
          );
          game2Opp = teamsInLeague[OppTeamIndex].name;
        }
        const game2 = new Date(editedTeamSchedule[1].start_time);
        let options = { month: 'long' };

        let game2Month = new Intl.DateTimeFormat('en-US', options).format(
          game2
        );
        let game2Day = game2.getDate();
        let game2Hours = game2.getHours();
        let game2Minutes = game2.getMinutes();
        if (game2Minutes < 10) {
          game2Minutes = '0' + game2Minutes;
        }
        let game2Time = game2Hours + ':' + game2Minutes;
        if (game2Hours < 12) {
          game2Time += ' AM';
        }
        if (game2Hours > 12) {
          game2Time += ' PM';
        }

        let scheduleGame2 = {
          game2Month,
          game2Day,
          game2Time,
          game2Opp
        };
        this.setState({
          scheduleGame2
        });
      }
    }
  }

  componentDidMount = async () => {
    if (this.state.ties > 0) {
      this.setState({
        containsTies: true
      });
    }
    await this.getTeamSchedule();
    await this.displayGames();
    if (
      this.state.scheduleGame1.game1Month &&
      this.state.scheduleGame2.game2Month
    ) {
      this.setState({
        bothGamesExist: true
      });
    } else if (this.state.scheduleGame1.game1Month) {
      this.setState({
        game1Exists: true
      });
    } else {
      this.setState({
        seasonComplete: true
      });
    }
  };

  handleChange = name => (event, { newValue }) => {
    this.setState({
      [name]: newValue
    });
    console.log('newValue in UserSearch', newValue);
  };

  render() {
    const { classes } = this.props;
    const {
      name,
      coach_name,
      coach_email,
      coach_phone,
      coach_user_id,
      wins,
      losses,
      ties
    } = this.state;
    return (
      <div>
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipDirection="horizontal"
        >
          {/* Card only flips when EditIcon is clicked. */}
          <Card
            className={classes.cardFront}
            key="front"
            style={{ height: this.state.containsTies ? '365px' : '350px' }}
          >
            <CardContent className={classes.container}>
              <Typography className={classes.title}>
                {name}
                <EditIcon
                  onClick={this.ClickHandler}
                  style={{ cursor: 'pointer' }}
                />
              </Typography>
              <Typography className={classes.p}>
                Name: {coach_name}
                <br />
                Email: {coach_email}
                <br />
                Phone #: {coach_phone}
              </Typography>
              <Typography
                className={classes.pos}
                style={{ display: this.state.containsTies ? 'none' : 'block' }}
              >
                Record:
                <br />
                Wins: {wins}
                <br />
                Losses: {losses}
              </Typography>
              <Typography
                className={classes.pos}
                style={{ display: this.state.containsTies ? 'block' : 'none' }}
              >
                Record:
                <br />
                Wins: {wins}
                <br />
                Losses: {losses}
                <br />
                Ties: {ties}
              </Typography>
              <Typography
                className={classes.upcoming}
                style={{
                  display: this.state.bothGamesExist ? 'block' : 'none'
                }}
              >
                Upcoming Games:
                <br />
                {this.state.scheduleGame1.game1Month}{' '}
                {this.state.scheduleGame1.game1Day}{' '}
                {this.state.scheduleGame1.game1Time} vs{' '}
                {this.state.scheduleGame1.game1Opp}
                <br />
                {this.state.scheduleGame2.game2Month}{' '}
                {this.state.scheduleGame2.game2Day}{' '}
                {this.state.scheduleGame2.game2Time} vs{' '}
                {this.state.scheduleGame2.game2Opp}
              </Typography>

              <Typography
                className={classes.upcoming}
                style={{ display: this.state.game1Exists ? 'block' : 'none' }}
              >
                Upcoming:
                <br />
                {this.state.scheduleGame1.game1Month}{' '}
                {this.state.scheduleGame1.game1Day}{' '}
                {this.state.scheduleGame1.game1Time} vs{' '}
                {this.state.scheduleGame1.game1Opp}
              </Typography>

              <Typography
                className={classes.upcoming}
                style={{
                  display: this.state.seasonComplete ? 'block' : 'none'
                }}
              >
                Season Completed
              </Typography>
            </CardContent>
          </Card>

          <Card className={classes.cardBack} key="back">
            <CssBaseline />
            <CardContent className={classes.container}>
              <form onSubmit={this.EditHandler}>
                <FormControl
                  margin="none"
                  required
                  fullWidth
                  className={classes.title}
                >
                  <InputLabel htmlFor="name">Team Name</InputLabel>
                  <Input
                    id="name"
                    name="name"
                    value={this.state.name}
                    onChange={this.InputHandler}
                    autoFocus
                  />
                </FormControl>
                <FormControl margin="none" fullWidth>
                  <InputLabel htmlFor="coach_name">Coach Name:</InputLabel>
                  <Input
                    id="coach_name"
                    name="coach_name"
                    value={coach_name}
                    onChange={this.InputHandler}
                  />
                </FormControl>
                <FormControl margin="none" fullWidth>
                  <InputLabel htmlFor="coach_email">Coach Email:</InputLabel>
                  <UserSearch
                    id="coach_email"
                    name="coach_email"
                    value={this.state.coach_email}
                    handleChange={this.handleChange}
                    coach_email={coach_email}
                  />
                </FormControl>
                <FormControl margin="none">
                  <InputLabel htmlFor="coach_phone">Coach #:</InputLabel>
                  <Input
                    id="coach_phone"
                    name="coach_phone"
                    value={coach_phone}
                    onChange={this.InputHandler}
                  />
                </FormControl>
                <FormControl margin="none">
                  <InputLabel htmlFor="wins">Wins:</InputLabel>
                  <Input
                    id="wins"
                    name="wins"
                    value={wins}
                    onChange={this.InputHandler}
                  />
                </FormControl>
                <FormControl margin="none">
                  <InputLabel htmlFor="losses">Losses:</InputLabel>
                  <Input
                    id="losses"
                    name="losses"
                    value={this.state.losses}
                    onChange={this.InputHandler}
                  />
                </FormControl>
                <FormControl margin="none" display="none">
                  <InputLabel htmlFor="ties">Ties:</InputLabel>
                  <Input
                    id="ties"
                    name="ties"
                    value={this.state.ties}
                    onChange={this.InputHandler}
                  />
                </FormControl>
              </form>
            </CardContent>
            <CardActions>
              <Button
                size="large"
                fullWidth
                type="submit"
                variant="contained"
                className={classes.button}
                onClick={this.EditHandler}
              >
                Edit Team
              </Button>
            </CardActions>
          </Card>
        </ReactCardFlip>
      </div>
    );
  }
}

TeamCard.propTypes = {
  classes: PropTypes.object.isRequired
};

TeamCard.contextType = AppContext;

export default withStyles(styles)(TeamCard);
