import 'date-fns';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import classNames from "classnames";
import { withStyles } from '@material-ui/core/styles';
// import FormLabel from "@material-ui/core/FormLabel";
// import FormControl from "@material-ui/core/FormControl";
// import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker
} from 'material-ui-pickers';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    display: 'flex'
  },
  formControl: {
    margin: theme.spacing.unit * 3
  }
});

const DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thurday',
  'Friday',
  'Saturday',
  'Sunday'
];

class LeagueSetupSettings extends Component {
  state = {
    name: 'League Name',
    start_day: new Date('March 29, 2019 09:30:00'),
    teams_game_count: 4,
    game_length: 2,
    weekday: true,
    weekend: true,
    monday_start_time: '',
    monday_end_time: '',
    tuesday_start_time: '',
    tuesday_end_time: '',
    wednesday_start_time: '',
    wednesday_end_time: '',
    thursday_start_time: '',
    thursday_end_time: '',
    friday_start_time: '',
    friday_end_time: '',
    saturday_start_time: '',
    saturday_end_time: '',
    sunday_start_time: '',
    sunday_end_time: ''
  };

  setGameData = stateName => event => {
    this.setState({ [stateName]: event.target.value });
  };

  setGameDays = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  setStartTime = time => {
    times[index] = time;
    this.setState({ weekendStartTimes: times });
  };

  // NEED TO CHECK THAT END TIME IS GREATER THEN START TIME
  setWeekEndEndTime = (index, time) => {
    const times = [...this.state.weekendEndTimes];
    times[index] = time;
    this.setState({ weekendEndTimes: times });
  };

  setWeekDayStartTime = (index, time) => {
    const times = [...this.state.weekdayStartTimes];
    times[index] = time;
    this.setState({ weekdayStartTimes: times });
  };

  // NEED TO CHECK THAT END TIME IS GREATER THEN START TIME
  setWeekDayEndTime = (index, time) => {
    const times = [...this.state.weekdayEndTimes];
    times[index] = time;
    this.setState({ weekdayEndTimes: times });
  };

  setStartDate = date => {
    console.log(date);
    this.setState({ leagueStartDate: date });
  };

  render() {
    return (
      <div>
        <h1 onClick={this.showState}>{this.state.leagueName}</h1>

        <div>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              margin="normal"
              label="Start Date"
              value={this.state.start_day}
              onChange={this.setStartDate}
            />
          </MuiPickersUtilsProvider>
        </div>
        <div>
          <TextField
            variant="outlined"
            type="number"
            label="Total Number of Games Per Team"
            value={this.state.numberOfGames}
            onChange={this.setGameData('numberOfGames')}
          />
          <TextField
            variant="outlined"
            type="number"
            label="Length of Games (Hours)"
            value={this.state.lengthOfGames}
            onChange={this.setGameData('lengthOfGames')}
          />

          {DAYS.map((day, index) => {
            return (
              <div key={day}>
                <div>{day}</div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <TimePicker
                    margin="normal"
                    label="Start Time"
                    name={`${day.toLowerCase()}_start_time`}
                    value={this.state.weekdayStartTimes[index]}
                    onChange={time => this.setWeekDayStartTime(index, time)}
                  />
                  <TimePicker
                    margin="normal"
                    label="End Time"
                    name={`${day.toLowerCase()}_end_time`}
                    value={this.state.weekdayEndTimes[index]}
                    onChange={time => this.setWeekDayEndTime(index, time)}
                  />
                </MuiPickersUtilsProvider>
              </div>
            );
          })}
        </div>

        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={this.generateSchedule}
          >
            Generate Schedule
          </Button>
        </div>
      </div>
    );
  }
}

LeagueSetupSettings.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LeagueSetupSettings);
