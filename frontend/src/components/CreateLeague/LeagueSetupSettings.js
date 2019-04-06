import 'date-fns';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker
} from 'material-ui-pickers';

const styles = theme => ({
  root: {
    display: 'flex'
  },
  formControl: {
    margin: theme.spacing.unit * 3
  }
});

class LeagueSetupSettings extends Component {
  state = {
    name: 'League Name',
    start_day: 'March 29, 2019 09:30:00', // using date only
    teams_game_count: 4,
    game_length: 2,
    monday_start_time: 'March 29, 2019 09:30:00', // using time only
    monday_end_time: 'March 29, 2019 09:30:00', // using time only
    tuesday_start_time: 'March 29, 2019 09:30:00', // using time only
    tuesday_end_time: 'March 29, 2019 09:30:00', // using time only
    wednesday_start_time: 'March 29, 2019 09:30:00', // using time only
    wednesday_end_time: 'March 29, 2019 09:30:00', // using time only
    thursday_start_time: 'March 29, 2019 09:30:00', // using time only
    thursday_end_time: 'March 29, 2019 09:30:00', // using time only
    friday_start_time: 'March 29, 2019 09:30:00', // using time only
    friday_end_time: 'March 29, 2019 09:30:00', // using time only
    saturday_start_time: 'March 29, 2019 09:30:00', // using time only
    saturday_end_time: 'March 29, 2019 09:30:00', // using time only
    sunday_start_time: 'March 29, 2019 09:30:00', // using time only
    sunday_end_time: 'March 29, 2019 09:30:00' // using time only
  };

  inputHandler = event => {
    event.preventDefault();
    console.log(event);
    this.setState({ [event.target.name]: event.target.value });
  };

  inputDatetimeHandler = (name, datetime) => {
    this.setState({ [name]: datetime.toString() });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>{this.state.name}</h1>

        <div>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              margin="normal"
              label="Start Date"
              name="start_day"
              value={new Date(this.state.start_day)}
              onChange={date => this.inputDatetimeHandler('start_day', date)}
            />
          </MuiPickersUtilsProvider>
        </div>
        <div>
          <TextField
            variant="outlined"
            type="number"
            label="Total Number of Games Per Team"
            name="teams_game_count"
            value={this.state.teams_game_count}
            onChange={this.inputHandler}
          />
          <TextField
            variant="outlined"
            type="number"
            label="Length of Games (Hours)"
            name="game_length"
            value={this.state.game_length}
            onChange={this.inputHandler}
          />
        </div>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div>Monday</div>
          <TimePicker
            margin="normal"
            label="Start Time"
            name="monday_start_time"
            value={new Date(this.state.monday_start_time)}
            onChange={date => this.inputDatetimeHandler('monday_start_time', date)}
          />
          <TimePicker
            margin="normal"
            label="End Time"
            name="monday_end_time"
            value={new Date(this.state.monday_end_time)}
            onChange={date => this.inputDatetimeHandler('monday_end_time', date)}
          />
        </MuiPickersUtilsProvider>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div>Tuesday</div>
          <TimePicker
            margin="normal"
            label="Start Time"
            name="tuesday_start_time"
            value={new Date(this.state.tuesday_start_time)}
            onChange={date => this.inputDatetimeHandler('tuesday_start_time', date)}
          />
          <TimePicker
            margin="normal"
            label="End Time"
            name="tuesday_end_time"
            value={new Date(this.state.tuesday_end_time)}
            onChange={date => this.inputDatetimeHandler('tuesday_end_time', date)}
          />
        </MuiPickersUtilsProvider>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div>Wednesday</div>
          <TimePicker
            margin="normal"
            label="Start Time"
            name="wednesday_start_time"
            value={new Date(this.state.wednesday_start_time)}
            onChange={date => this.inputDatetimeHandler('wednesday_start_time', date)}
          />
          <TimePicker
            margin="normal"
            label="End Time"
            name="wednesday_end_time"
            value={new Date(this.state.wednesday_end_time)}
            onChange={date => this.inputDatetimeHandler('wednesday_end_time', date)}
          />
        </MuiPickersUtilsProvider>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div>Thursday</div>
          <TimePicker
            margin="normal"
            label="Start Time"
            name="thursday_start_time"
            value={new Date(this.state.thursday_start_time)}
            onChange={date => this.inputDatetimeHandler('thursday_start_time', date)}
          />
          <TimePicker
            margin="normal"
            label="End Time"
            name="thursday_end_time"
            value={new Date(this.state.thursday_end_time)}
            onChange={date => this.inputDatetimeHandler('thursday_end_time', date)}
          />
        </MuiPickersUtilsProvider>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div>Friday</div>
          <TimePicker
            margin="normal"
            label="Start Time"
            name="friday_start_time"
            value={new Date(this.state.friday_start_time)}
            onChange={date => this.inputDatetimeHandler('friday_start_time', date)}
          />
          <TimePicker
            margin="normal"
            label="End Time"
            name="friday_end_time"
            value={new Date(this.state.friday_end_time)}
            onChange={date => this.inputDatetimeHandler('friday_end_time', date)}
          />
        </MuiPickersUtilsProvider>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div>Saturday</div>
          <TimePicker
            margin="normal"
            label="Start Time"
            name="saturday_start_time"
            value={new Date(this.state.saturday_start_time)}
            onChange={date => this.inputDatetimeHandler('saturday_start_time', date)}
          />
          <TimePicker
            margin="normal"
            label="End Time"
            name="saturday_end_time"
            value={new Date(this.state.saturday_end_time)}
            onChange={date => this.inputDatetimeHandler('saturday_end_time', date)}
          />
        </MuiPickersUtilsProvider>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div>Sunday</div>
          <TimePicker
            margin="normal"
            label="Start Time"
            name="sunday_start_time"
            value={new Date(this.state.sunday_start_time)}
            onChange={date => this.inputDatetimeHandler('sunday_start_time', date)}
          />
          <TimePicker
            margin="normal"
            label="End Time"
            name="sunday_end_time"
            value={new Date(this.state.sunday_end_time)}
            onChange={date => this.inputDatetimeHandler('sunday_end_time', date)}
          />
        </MuiPickersUtilsProvider>
      </div>
    );
  }
}

LeagueSetupSettings.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LeagueSetupSettings);