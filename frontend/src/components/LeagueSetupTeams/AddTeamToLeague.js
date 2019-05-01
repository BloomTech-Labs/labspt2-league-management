import React from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';

const styles = theme => ({
  main: {
    display: 'block',
    width: '100%',
    minWidth: '200px'
  },
  form: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    width: '60%',
    marginRight: '8%'
  },
  submit: {
    width: '20%'
  }
});

const AddTeamToLeague = props => {
  return (
    <div className={props.classes.main}>
      <CssBaseline />
      <form className={props.classes.form} onSubmit={props.SubmitHandler}>
        <FormControl className={props.classes.input} margin="normal" required>
          <InputLabel htmlFor="name">Team Name</InputLabel>
          <Input
            id="name"
            name="name"
            value={props.name}
            placeholder=""
            onChange={props.InputHandler}
            autoFocus
          />
        </FormControl>
        <Button
          variant="contained"
          className={props.classes.submit}
          color="primary"
          onClick={props.SubmitHandler}
        >
          Add Team
        </Button>
      </form>
    </div>
  );
};

export default withStyles(styles)(AddTeamToLeague);
