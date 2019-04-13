import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
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

const styles = theme => ({
  cardFront: {
    minWidth: '285px',
    maxWidth: '310px',
    border: '2px solid lightgrey',
    width: '45%',
    borderRadius: '4%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    height: '350px'
  },
  cardBack: {
    minWidth: '275px',
    maxWidth: '300px',
    border: '2px solid lightgrey',
    width: '45%',
    borderRadius: '4%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    height: '445px'
  },
  container: {
    width: '90%'
  },
  title: {
    fontSize: '1.6rem',
    display: 'flex',
    justifyContent: 'space-between'
  },
  pos: {
    border: '1px solid black',
    marginTop: '8px',
    width: '65%',
    maxWidth: '180px',
    borderRadius: '8%',
    marginBottom: '12px',
    padding: '10px'
  },
  upcoming: {
    border: '1px solid black',
    marginTop: '8px',
    width: '90%',
    borderRadius: '8%',
    marginBottom: '7px',
    padding: '10px'
  },
  button: {
    border: '1px solid lightgrey',
    borderRadius: '6%'
  },
  p: {
    fontSize: 13
  }
});

class TeamCard extends React.Component {
  state = {
    name: this.props.name,
    id: this.props.id,
    coach_name: this.props.coach_name,
    coach_email: this.props.coach_email,
    coach_phone: this.props.coach_phone,
    wins: this.props.wins,
    losses: this.props.losses,
    ties: this.props.ties,
    isFlipped: false,
    containsTies: false,
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

  EditHandler = event => {
    event.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    let teamData = {
      name: this.state.name,
      id: this.state.id,
      coach_name: this.state.coach_name,
      coach_email: this.state.coach_email,
      coach_user_id: null,
      coach_phone: this.state.coach_phone,
      wins: this.state.wins,
      losses: this.state.losses,
      ties: this.state.ties
    };
    this.context.editTeamInLeague(teamData, this.props.index, this.state.id);
    if(this.state.ties > 0) {
      this.setState({ 
        containsTies: true
      })
    };
  };

  componentDidMount() {
    if(this.state.ties > 0) {
      this.setState({ 
        containsTies: true
      })
    }
  }

  render() {
    const { classes } = this.props;
    //     let teamNameShort = this.state.name;
    // if(teamNameShort.length > 12) { teamNameShort = teamNameShort.substring(0,11)}
    // This will keep team name from Breaking Card styling by Showing Only first 12 characters for team Name without altering team name.
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
                {this.state.name}
                  <EditIcon onClick={this.ClickHandler} />
              </Typography>
              <Typography className={classes.p}>
                Name: {this.state.coach_name}
                <br />
                Email: {this.state.coach_email}
                <br />
                Phone #: {this.state.coach_phone}
              </Typography>
              <Typography
                className={classes.pos}
                style={{ display: this.state.containsTies ? 'none' : 'block' }}
              >
                Record:
                <br />
                Wins: {this.state.wins}
                <br />
                Losses: {this.state.losses}
              </Typography>
              <Typography
                className={classes.pos}
                style={{ display: this.state.containsTies ? 'block' : 'none' }}
              >
                Record:
                <br />
                Wins: {this.state.wins}
                <br />
                Losses: {this.state.losses}
                <br />
                Ties: {this.state.ties}
              </Typography>
              <Typography className={classes.upcoming}>
                Upcoming:
                <br />
                July 20th 7pm vs Woodside Warriors
                <br />
                Game 2
              </Typography>
              {/* Still not quite Sure how we are going to do the upcoming games part. */}
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
                  <InputLabel htmlFor="name">Team Name: {this.state.name}</InputLabel>
                  <Input
                    id="name"
                    name="name"
                    onChange={this.InputHandler}
                    autoFocus
                  />
                </FormControl>
                <FormControl margin="none" fullWidth>
                  <InputLabel htmlFor="coach_name">
                    Coach Name: {this.state.coach_name}
                  </InputLabel>
                  <Input
                    id="coach_name"
                    name="coach_name"
                    onChange={this.InputHandler}
                  />
                </FormControl>
                <FormControl margin="none" fullWidth>
                  <InputLabel htmlFor="coach_email">
                    Coach Email: {this.state.coach_email}
                  </InputLabel>
                  <Input
                    id="coach_email"
                    name="coach_email"
                    onChange={this.InputHandler}
                  />
                </FormControl>
                <FormControl margin="none">
                  <InputLabel htmlFor="coach_phone">
                    Coach #: {this.state.coach_phone}
                  </InputLabel>
                  <Input
                    id="coach_phone"
                    name="coach_phone"
                    onChange={this.InputHandler}
                  />
                </FormControl>
                <FormControl margin="none">
                  <InputLabel htmlFor="wins">Wins: {this.state.wins}</InputLabel>
                  <Input id="wins" name="wins" onChange={this.InputHandler} />
                </FormControl>
                <FormControl margin="none">
                  <InputLabel htmlFor="losses">Losses: {this.state.losses}</InputLabel>
                  <Input
                    id="losses"
                    name="losses"
                    onChange={this.InputHandler}
                  />
                </FormControl>
                <FormControl margin="none" display="none">
                  <InputLabel htmlFor="ties">Ties: {this.state.ties}</InputLabel>
                  <Input id="ties" name="ties" onChange={this.InputHandler} />
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
