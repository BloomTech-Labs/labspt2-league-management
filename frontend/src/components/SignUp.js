import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Navbar from './Dashboards/Navbar';

import { AppContext } from './Context/AppContext';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    // marginTop: theme.spacing.unit * 8,
    marginTop: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  message: {
    color: 'red',
    marginTop: theme.spacing.unit
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

class Signup extends React.Component {
  state = {
    username: '',
    password: '',
    email: '',
    first_name: '',
    last_name: '',
    phone: '',
    message: '',
    focus: 1,
    error: 0
  };

  InputHandler = event => {
    event.preventDefault();
    const target = event.target;
    this.setState({
      [target.name]: target.value,
      error: 0,
      message: ''
    });
  };

  SubmitHandler = event => {
    event.preventDefault();

    const {
      username,
      password,
      email,
      first_name,
      last_name,
      phone
    } = this.state;

    if (!username) {
      this.setState({
        message: 'Username cannot be empty',
        focus: 1,
        error: 1
      });
    } else if (!password) {
      this.setState({
        message: 'Password cannot be empty',
        focus: 2,
        error: 2
      });
    } else if (!email) {
      this.setState({
        message: 'Email cannot be empty',
        focus: 3,
        error: 3
      });
    } else if (!first_name) {
      this.setState({
        message: 'First Name cannot be empty',
        focus: 4,
        error: 4
      });
    } else if (!last_name) {
      this.setState({
        message: 'Last Name cannot be empty',
        focus: 5,
        error: 5
      });
    } else {
      const endpoint = '/auth/register';
      const profile = {
        username,
        password,
        email,
        first_name,
        last_name,
        phone
      };
      axios
        .post(endpoint, profile)
        .then(res => {
          localStorage.setItem('jwt', res.data.token);
          this.props.history.push('/signin');
        })
        .catch(err => {
          this.setState({
            message: 'Unable to create profile'
          });
        });
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <Navbar />
        <CssBaseline />
        <Paper className={classes.paper}>
          {/* <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar> */}
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <p className={classes.message}>{this.state.message}</p>
          <form className={classes.form} onSubmit={this.SubmitHandler}>
            <FormControl
              margin="normal"
              // required
              fullWidth
              error={this.state.error === 1 ? true : false}
            >
              <InputLabel htmlFor="username">Username</InputLabel>
              <Input
                id="username"
                name="username"
                onChange={this.InputHandler}
                autoFocus
              />
            </FormControl>
            <FormControl
              margin="normal"
              // required
              fullWidth
              error={this.state.error === 2 ? true : false}
            >
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input id="email" name="email" onChange={this.InputHandler} />
            </FormControl>
            <FormControl
              margin="normal"
              // required
              fullWidth
              error={this.state.error === 3 ? true : false}
            >
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                id="password"
                name="password"
                type="password"
                onChange={this.InputHandler}
              />
            </FormControl>
            <FormControl
              margin="normal"
              // required
              fullWidth
              error={this.state.error === 4 ? true : false}
            >
              <InputLabel htmlFor="first_name">First Name</InputLabel>
              <Input
                id="first_name"
                name="first_name"
                onChange={this.InputHandler}
              />
            </FormControl>
            <FormControl
              margin="normal"
              // required
              fullWidth
              error={this.state.error === 5 ? true : false}
            >
              <InputLabel htmlFor="last_name">Last Name</InputLabel>
              <Input
                id="last_name"
                name="last_name"
                onChange={this.InputHandler}
              />
            </FormControl>
            <FormControl
              margin="normal"
              // required
              fullWidth
              error={this.state.error === 6 ? true : false}
            >
              <InputLabel htmlFor="phone">Phone # Ex: 1234567890</InputLabel>
              <Input id="phone" name="phone" onChange={this.InputHandler} />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign up
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

Signup.contextType = AppContext;

Signup.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Signup);
