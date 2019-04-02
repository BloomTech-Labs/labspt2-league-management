import React, { Component } from 'react';
import { AppContext } from '../Context/AppContext';
import Navbar from '../Dashboards/Navbar';import PropTypes from "prop-types";
// import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
// import FormLabel from "@material-ui/core/FormLabel";
// import FormControl from "@material-ui/core/FormControl";
// import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing.unit * 3
  }
});

// Get this from the context
const loadedTeams = [
  "Valley Vipers",
  "Woodside Warriors",
  "Bay Brawlers",
  "Back Alley Snakes",
  "Big City Boys",
  "Comeback Kids",
  "Another Team",
  "Bill's Ballers",
  "Yet Another Team"
];

const WEEK_DAYS = ["Monday", "Tuesday", "Wednesday", "Thurday", "Friday"];
const WEEK_END = ["Saturday", "Sunday"];

class SetupLeagueForm extends Component {
  state = {};

  componentDidMount() {
    console.log(this.context);
  }

  render() {
    return (
    <div>
      <Navbar
        data={this.state}
        displayAdminContent={this.displayAdminContent}
        context={this.context}
      />
      <br />
      <br />
      <br /><div>
          <Paper square>
            <Tabs
              value={this.state.leagueType}
              indicatorColor="primary"
              textColor="primary"
              onChange={this.setLeagueType}
            >
              <Tab label="Kids" />
              <Tab label="Adult" />
              <Tab label="Co-ed" />
            </Tabs>
          </Paper>
        </div>

        <div>
          <h2>Games</h2>
          <TextField
            variant="outlined"
            type="number"
            label="Total Number of Games"
            value={this.state.numberOfGames}
            onChange={this.setGameData("numberOfGames")}
          />
          <TextField
            variant="outlined"
            type="number"
            label="Length of Games"
            value={this.state.lengthOfGames}
            onChange={this.setGameData("lengthOfGames")}
          />
          <TextField
            variant="outlined"
            type="number"
            label="Concurrent Games"
            value={this.state.gamesPlayedConcurrently}
            onChange={this.setGameData("gamesPlayedConcurrently")}
          />
          <TextField
            variant="outlined"
            type="number"
            label="Games per Team per Week"
            value={this.state.gamesPerTeamPerWeek}
            onChange={this.setGameData("gamesPerTeamPerWeek")}
          />
          {this.state.toManyGamesPerWeek ? <div>More games scheduled per week then time slots available</div> : null}
          <FormControlLabel
            control={
              <Switch
                checked={this.state.weekday}
                onChange={this.setGameDays("weekday")}
                value={this.state.weekday}
                color="primary"
              />
            }
            label="Weekday"
          />
          {this.state.weekday
            ? WEEK_DAYS.map((day, index) => {
                return (
                  <div key={day}>
                    <div>{day}</div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <TimePicker
                          margin="normal"
                          label="Start Time"
                          value={this.state.weekdayStartTimes[index]}
                          onChange={time=>this.setWeekDayStartTime(index, time)}
                        />
                        <TimePicker
                          margin="normal"
                          label="End Time"
                          value={this.state.weekdayEndTimes[index]}
                          onChange={time=>this.setWeekDayEndTime(index, time)}
                        />
                    </MuiPickersUtilsProvider>
                  </div>
                );
              })
            : null}
          <FormControlLabel
            control={
              <Switch
                checked={this.state.weekend}
                onChange={this.setGameDays("weekend")}
                value={this.state.weekend}
                color="primary"
              />
            }
            label="Weekend"
          />
          {this.state.weekend
            ? WEEK_END.map((day, index) => {
                return (
                  <div key={day}>
                    <div>{day}</div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <TimePicker
                          margin="normal"
                          label="Start Time"
                          value={this.state.weekendStartTimes[index]}
                          onChange={time=>this.setWeekEndStartTime(index, time)}
                        />
                        <TimePicker
                          margin="normal"
                          label="End Time"
                          value={this.state.weekendEndTimes[index]}
                          onChange={time=>this.setWeekEndEndTime(index, time)}
                        />
                    </MuiPickersUtilsProvider>
                  </div>
                );
              })
            : null}
        </div>

        <div>
          <h2>Teams</h2>
          {this.state.oddNumOfTeams ? <div>Please select an even number of teams</div> : null}
          {loadedTeams.map((team, index) => {
            return (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={
                      this.state.teams.findIndex(function(element) {
                        return element.teamName === team;
                      }) !== -1
                    }
                    onChange={this.addRemoveTeam(team)}
                    value={team}
                  />
                }
                label={team}
              />
            );
          })}
        </div>

        <div>
          <h2>Season</h2>
          {this.state.seasonOverrun ? <div>The total number of weeks exceeds the league end date</div> : null}
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                margin="normal"
                label="Start Date"
                value={this.state.leagueStartDate}
                onChange={this.setStartDate}
              />
              <DatePicker
                margin="normal"
                label="End Date"
                value={this.state.leagueEndDate}
                onChange={this.setEndDate}
              />
          </MuiPickersUtilsProvider>
        </div>

        <div>
          <Button variant="contained" color="primary" onClick={this.generateSchedule}>Generate Schedule</Button>
        </div>
    </div>
    );
  }
}

SetupLeagueForm.contextType = AppContext;

SetupLeagueForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SetupLeagueForm);
