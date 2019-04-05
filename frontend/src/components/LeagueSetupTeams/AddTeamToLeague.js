import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import { AppContext } from '../Context/AppContext';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', 
    width: '100%',
    minWidth: '200px',
  },
  form: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '60%',
    marginRight: '8%',
  },
  submit: {
    width: '20%',
  }
});

class AddTeamToLeague extends React.Component {
  state = {
    name: '',
    league_id: null,
    coach_user_id: null,
    coach_name: null,
    coach_email: null,
    coach_phone: null,
    wins: 0,
    losses: 0,
    ties: 0
  };

  InputHandler = event => {
    event.preventDefault();
    const target = event.target;
    this.setState({ [target.name]: target.value });
  };

  // SubmitHandler = event => {
  //   event.preventDefault();
  //   // const endpoint: `/leagues/${this.props.league_id}/teams`;
  //   axios.post(endpoint)
  //     .then(res => {

  //       this.setState({ })
  //     })
  // }

  render() {
    const { classes } = this.props;
    console.log('context check in AddTeamsToLeague', this.context);

    return (
      <div className={classes.main}>
        <CssBaseline />
        <form className={classes.form} onSubmit={this.submitHandler}>
          <FormControl className={classes.input} margin="normal" required>
            <InputLabel htmlFor="name">Team Name</InputLabel>
            <Input id="name" name="name" onChange={this.InputHandler} />
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            className={classes.submit}
            color="primary"
          >
            Add Team
          </Button>
        </form>
      </div>
    );
  }
}

AddTeamToLeague.contextType = AppContext;

export default withStyles(styles)(AddTeamToLeague);
