import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import withStyles from '@material-ui/core/styles/withStyles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import ReactCardFlip from 'react-card-flip';

const styles = theme => ({
  cardFront: {
    minWidth: '285px',
    maxWidth: '310px',
    width: '45%',
    border: '2px solid lightgrey',
    borderRadius: '4%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    height: '75px'
  },
  cardBack: {
    minWidth: '275px',
    maxWidth: '300px',
    width: '45%',
    border: '2px solid lightgrey',
    borderRadius: '4%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    height: '405px'
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
    borderRadius: '6%',
    textTransform: 'none'
  },
  p: {
    fontSize: 13
  }
});

class NewTeamCard extends React.Component {
  state = {
    name: '',
    coach_email: '',
    coach_phone_number: '',
    wins: 0,
    losses: 0,
    ties: 0,
    isFlipped: false
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

  SubmitHandler = event => {
    event.preventDefault();
    const credentials = this.state;
    const endpoint = '/';
    // const endpoint = '/auth/register';
    axios
      .post(endpoint, credentials)
      .then(res => {
        // localStorage.setItem('jwt', res.data.token);
        // this.props.history.push('/signin');
        // Have to get this part working
      })
      .catch(err => {
        console.log('err from Submit handler in NewTeamCard', err);
      });
  };

  render() {
    const { classes } = this.props;

    return (
      <ReactCardFlip
        isFlipped={this.state.isFlipped}
        flipDirection="horizontal"
      >
        <Card className={classes.cardFront} key="front">
          <CssBaseline />
          <CardActions>
            <Button
              size="large"
              fullWidth
              variant="contained"
              className={classes.button}
              onClick={this.ClickHandler}
            >
              <AddIcon /> Add Team
            </Button>
          </CardActions>
        </Card>

        <Card className={classes.cardBack} key="back">
          <CssBaseline />
          <CardContent className={classes.container}>
            <form onSubmit={this.SubmitHandler}>
              <FormControl margin="none" required fullWidth>
                <InputLabel htmlFor="name">Team Name</InputLabel>
                <Input
                  id="name"
                  name="name"
                  onChange={this.InputHandler}
                  autoFocus
                />
              </FormControl>
              <FormControl margin="none" fullWidth>
                <InputLabel htmlFor="coach_email">Email</InputLabel>
                <Input
                  id="coach_email"
                  name="coach_email"
                  onChange={this.InputHandler}
                />
              </FormControl>
              <FormControl margin="none">
                <InputLabel htmlFor="coach_phone_number">
                  Phone Number
                </InputLabel>
                <Input
                  id="coach_phone_number"
                  name="coach_phone_number"
                  onChange={this.InputHandler}
                />
              </FormControl>
              <FormControl margin="none">
                <InputLabel htmlFor="wins">Wins</InputLabel>
                <Input id="wins" name="wins" onChange={this.InputHandler} />
              </FormControl>
              <FormControl margin="none">
                <InputLabel htmlFor="losses">Losses</InputLabel>
                <Input id="losses" name="losses" onChange={this.InputHandler} />
              </FormControl>
              <FormControl margin="none">
                <InputLabel htmlFor="ties">Ties</InputLabel>
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
            >
              <AddIcon /> Add Team
            </Button>
          </CardActions>
        </Card>
      </ReactCardFlip>
    );
  }
}

NewTeamCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NewTeamCard);
