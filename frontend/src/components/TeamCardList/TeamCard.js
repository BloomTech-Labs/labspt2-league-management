import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';
import ReactCardFlip from 'react-card-flip';
import { AppContext } from '../Context/AppContext';
import UserSearch from './UserSearch.js';

const styles = theme => ({
  cardFront: {
    // minWidth: '285px',
    // maxWidth: '285px',
    width: 285,
    borderRadius: '10px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    boxShadow: '1px 1px 4px #333, 2px 2px 7px #1565c0',
    minHeight: '330px',
    // backgroundColor: '#E2ECF7',
    backgroundColor: '#1565c0dd',
    // backgroundColor: '#33A1FD',
    padding: 0,
    margin: 0,
    height: 'auto',
    marginBottom: '20px'
  },
  cardBack: {
    // minWidth: '275px',
    // maxWidth: '300px',
    minWidth: '285px',
    maxWidth: '320px',
    width: '45%',
    borderRadius: '10px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    // boxShadow: '1px 1px 4px #333, 2px 2px 7px #ef6c00',
    boxShadow: '1px 1px 4px #333, 2px 2px 7px #1565c0',
    minHeight: '375px',
    backgroundColor: '#E2ECF7',
    // backgroundColor: '#33A1FD',
    padding: 0,
    margin: 0,
    marginRight: -35,
    height: 'auto'
  },
  container: {
    width: '100%',
    padding: '15px'
  },
  textField: {
    borderRadius: 6,
    boxShadow: '1px 1px 2px #333, 2px 2px 3px #1565c0cc',
    height: 'auto'
  },
  textFieldBack: {
    borderRadius: 6,
    boxShadow: '1px 1px 2px #333, 2px 2px 3px #1565c0cc',
    position: 'relative'
  },
  title: {
    fontSize: '1.6rem',
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: 'Montserrat',
    color: 'white',
    textShadow: '1px 2px 3px #111',
    marginBottom: 8
  },
  button: {
    // border: '1px solid #3BE566',
    backgroundColor: '#24D830',
    borderRadius: '8px',
    fontFamily: 'Montserrat',
    '&:hover': {
      backgroundColor: '#32C156'
    }
  },
  coachInfo: {
    // border: '1px solid red',
    backgroundColor: 'white',
    borderRadius: 7,
    height: 100,
    color: '#333',
    padding: 5,
    textShadow: '1px 1px 2px #aaa'
  },
  header: {
    display: 'inline-block',
    padding: '0 3px',
    marginBottom: 8,
    borderBottom: '1px solid #999',
    fontSize: '1rem'
  },
  coachInfoContent: {
    // color: '#333'
    marginBottom: 7,
    fontSize: '.9rem'
  },
  record: {
    display: 'flex',
    backgroundColor: 'white',
    borderRadius: 7,
    color: '#333',
    marginTop: 12,
    textShadow: '1px 1px 2px #aaa'
  },
  recordContent: {
    fontSize: '.9rem',
    marginRight: 10,
    padding: '10px 5px'
  },
  upcomingGames: {
    backgroundColor: 'white',
    borderRadius: 7,
    color: '#333',
    marginTop: 12,
    padding: 5,
    height: 130,
    textShadow: '1px 1px 2px #aaa'
  },
  game: {
    marginTop: 2,
    marginBottom: 5
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
    users: [],
    coachNameExists: false,
    coachEmailExists: false,
    coachPhoneExists: false
  };

  ClickHandler = event => {
    event.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  };

  InputHandler = event => {
    event.preventDefault();
    const target = event.target;
    this.setState({ [target.name]: target.value });
  };
  async GetUsers() {
    await axios
      .get('/search/users')
      .then(response => {
        let users = [];
        users = response.data;
        let coachEmail = this.state.coach_email;
        const coachId = users.find(x => x.email === coachEmail).id;
        this.setState({
          users: response.data,
          coach_user_id: coachId
        });
      })
      .catch(error => console.log(error));
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

    if (this.state.coach_name !== '' && this.state.coach_name !== null) {
      this.setState({
        coachNameExists: true
      });
    }
    if (this.state.coach_name === '') {
      this.setState({
        coachNameExists: false
      });
    }
    if (this.state.coach_email !== '' && this.state.coach_email !== null) {
      this.setState({
        coachEmailExists: true
      });
    }
    if (this.state.coach_email === '') {
      this.setState({
        coachEmailExists: false
      });
    }
    if (this.state.coach_phone !== '' && this.state.coach_phone !== null) {
      this.setState({
        coachPhoneExists: true
      });
    }
    if (this.state.coach_phone === '') {
      this.setState({
        coachPhoneExists: false
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
    // let editedTeamSchedule = this.state.teamSchedule;
    let editedTeamSchedule = this.state.teamSchedule.filter(
      game => new Date(game.start_time) > new Date()
    );

    // console.log('schedule: ', editedTeamSchedule);
    // console.log(this.state.teamSchedule.map(game => new Date(game.start_time)));
    // console.log(new Date());
    // console.log(
    //   'Games after today: ',
    //   this.state.teamSchedule.filter(
    //     game => new Date(game.start_time) > new Date()
    //   )
    // );

    const lid = this.context.state.leagues[this.props.index].id;
    // for (let i = 0; i < editedTeamSchedule.length; i++) {
    //   editedTeamSchedule.splice(i, 1);
    // }
    // if (editedTeamSchedule.length > 2) {
    //   editedTeamSchedule.length = 2;
    // }
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
          game1Hours -= 12;
          game1Time = game1Hours + ':' + game1Minutes;
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
          game2Hours -= 12;
          game2Time = game2Hours + ':' + game2Minutes;
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

    if (this.state.coach_name !== '' && this.state.coach_name !== null) {
      this.setState({
        coachNameExists: true
      });
    }
    if (this.state.coach_email !== '' && this.state.coach_email !== null) {
      this.setState({
        coachEmailExists: true
      });
    }
    if (this.state.coach_phone !== '' && this.state.coach_phone !== null) {
      this.setState({
        coachPhoneExists: true
      });
    }
  };

  handleChange = name => (event, { newValue }) => {
    this.setState({
      [name]: newValue
    });
  };

  render() {
    const { classes } = this.props;
    const {
      name,
      coach_name,
      coach_email,
      coach_phone,
      wins,
      losses,
      ties
    } = this.state;

    const labelStyle = {
      color: 'rgb(20,20,20)',
      textAlign: 'center',
      fontFamily: 'Monserrat',
      fontSize: '1.2rem',
      backgroundColor: '#E2ECF7',
      padding: '0px 5px'
    };

    const inputStyle = {
      color: '#333',
      fontFamily: 'Monserrat',
      fontSize: '0.9rem'
    };

    const inputStyleBack = {
      color: '#333',
      fontFamily: 'Monserrat',
      fontSize: '0.9rem'
    };

    return (
      <div>
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipDirection="horizontal"
        >
          {/* Card only flips when EditIcon is clicked. */}
          <Card className={classes.cardFront} key="front">
            <CardContent className={classes.container}>
              <Typography className={classes.title}>
                {name}
                <EditIcon
                  onClick={this.ClickHandler}
                  style={{ cursor: 'pointer' }}
                />
              </Typography>

              <div className={classes.coachInfo}>
                <p className={classes.header}>Coach Info</p>
                <p className={classes.coachInfoContent}>
                  <span style={{ fontWeight: '600' }}>Name:</span>{' '}
                  {coach_name || 'Not yet entered'}
                </p>
                <p className={classes.coachInfoContent}>
                  <span style={{ fontWeight: '600' }}>Email:</span>{' '}
                  {coach_email || 'Not yet entered'}
                </p>
                <p className={classes.coachInfoContent}>
                  <span style={{ fontWeight: '600' }}>Phone:</span>{' '}
                  {coach_phone || 'Not yet entered'}
                </p>
              </div>

              <div className={classes.record}>
                <p className={classes.recordContent}>Wins: {wins}</p>
                <p className={classes.recordContent}>Losses: {losses}</p>
                <p
                  className={classes.recordContent}
                  style={ties < 1 ? { display: 'none' } : null}
                >
                  Ties: {ties}
                </p>
              </div>

              <div className={classes.upcomingGames}>
                <p className={classes.header}>Upcoming Games</p>
                <p
                  className={classes.game}
                  style={(this.state.scheduleGame1 === false || this.state.scheduleGame1.game1Month === null) ? { display: 'none' } : null}
                >
                  <span style={{ fontWeight: '600' }}>
                    {this.state.scheduleGame1.game1Month}
                    {'  '}
                    {this.state.scheduleGame1.game1Day}
                    {'  '}
                    {this.state.scheduleGame1.game1Time}
                  </span>{' '}
                  vs{'  '}
                  {this.state.scheduleGame1.game1Opp}
                </p>
                <p
                  className={classes.game}
                  style={(this.state.scheduleGame2 === false || this.state.scheduleGame2.game2Month === null) ? { display: 'none' } : null}
                >
                  <span style={{ fontWeight: '600' }}>
                    {this.state.scheduleGame2.game2Month}
                    {'  '}
                    {this.state.scheduleGame2.game2Day}
                    {'  '}
                    {this.state.scheduleGame2.game2Time}
                  </span>{' '}
                  vs{'  '}
                  {this.state.scheduleGame2.game2Opp}
                </p>
                <p
                  className={classes.game}
                  style={
                    !this.state.seasonComplete ? { display: 'none' } : null
                  }
                >
                  Season Completed
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className={classes.cardBack} key="back">
            <CardContent className={classes.container}>
              <form onSubmit={this.EditHandler}>
                <TextField
                  fullWidth
                  label="Team Name"
                  id="name"
                  name="name"
                  value={this.state.name}
                  onChange={this.InputHandler}
                  autofocus
                  className={classes.textFieldBack}
                  margin="dense"
                  variant="outlined"
                  InputProps={{
                    style: inputStyleBack
                  }}
                  InputLabelProps={{
                    style: labelStyle,
                    shrink: true
                  }}
                />

                <TextField
                  fullWidth
                  label="Coach Name"
                  id="coach_name"
                  name="coach_name"
                  value={coach_name}
                  onChange={this.InputHandler}
                  className={classes.textFieldBack}
                  margin="dense"
                  variant="outlined"
                  InputProps={{
                    style: inputStyleBack
                  }}
                  InputLabelProps={{
                    style: labelStyle,
                    shrink: true
                  }}
                />

                <UserSearch
                  name="coach_email"
                  value={coach_email}
                  handleChange={this.handleChange}
                  coach_email={coach_email}
                />

                <TextField
                  fullWidth
                  label="Coach Phone"
                  id="coach_phone"
                  name="coach_phone"
                  value={coach_phone}
                  onChange={this.InputHandler}
                  className={classes.textFieldBack}
                  margin="dense"
                  variant="outlined"
                  InputProps={{
                    style: inputStyleBack
                  }}
                  InputLabelProps={{
                    style: labelStyle,
                    shrink: true
                  }}
                />

                <TextField
                  fullWidth
                  label="Wins"
                  id="wins"
                  name="wins"
                  value={wins}
                  onChange={this.InputHandler}
                  className={classes.textFieldBack}
                  margin="dense"
                  variant="outlined"
                  InputProps={{
                    style: inputStyleBack
                  }}
                  InputLabelProps={{
                    style: labelStyle,
                    shrink: true
                  }}
                />

                <TextField
                  fullWidth
                  label="Losses"
                  id="losses"
                  name="losses"
                  value={losses}
                  onChange={this.InputHandler}
                  className={classes.textFieldBack}
                  margin="dense"
                  variant="outlined"
                  InputProps={{
                    style: inputStyleBack
                  }}
                  InputLabelProps={{
                    style: labelStyle,
                    shrink: true
                  }}
                />

                <TextField
                  fullWidth
                  label="Ties"
                  id="ties"
                  name="ties"
                  value={ties}
                  onChange={this.InputHandler}
                  className={classes.textFieldBack}
                  margin="dense"
                  variant="outlined"
                  InputProps={{
                    style: inputStyleBack
                  }}
                  InputLabelProps={{
                    style: labelStyle,
                    shrink: true
                  }}
                />
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
                Save Team
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
