import 'date-fns';
import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
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

// Load this in axios
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

class CreateLeague extends Component {
  state = {
    leagueName: "League Name",
    leagueType: 0, // 0 = kid 1 = adult 2 = co-ed
    leagueStartDate: new Date(),
    leagueEndDate: new Date(),
    numberOfGames: 0,
    lengthOfGames: 0,
    weekday: false,
    weekend: false,
    weekdayStartTimes: [new Date("January 1, 2019 00:00:00"),new Date("January 1, 2019 00:00:00"),new Date("January 1, 2019 00:00:00"),new Date("January 1, 2019 00:00:00"),new Date("January 1, 2019 00:00:00")],
    weekdayEndTimes: [new Date("January 1, 2019 00:00:00"),new Date("January 1, 2019 00:00:00"),new Date("January 1, 2019 00:00:00"),new Date("January 1, 2019 00:00:00"),new Date("January 1, 2019 00:00:00")],
    weekendStartTimes: [new Date("January 1, 2019 00:00:00"), new Date("January 1, 2019 00:00:00")],
    weekendEndTimes: [new Date("January 1, 2019 00:00:00"), new Date("January 1, 2019 00:00:00")],
    // When team is selected add to this array
    teams: []
  };

  showState = () => {
    // console.log(this.state.teams);
    // console.log(this.state.weekday);
    // console.log(this.state.weekend);
    console.log(this.state.weekdayStartTimes);
    console.log(this.state.weekdayEndTimes);
    console.log(this.state.weekendStartTimes);
    console.log(this.state.weekendEndTimes);
    // console.log(this.state.leagueType);
    // console.log(this.state.leagueStartDate);
    // console.log(this.state.leagueEndDate);
  };

  addTeam = teamName => event => {
    // Check if team needs removed
    const currentTeams = this.state.teams;

    if (
      this.state.teams.find(function(element) {
        return element.teamName === teamName;
      })
    ) {
      const newTeams = currentTeams.filter(team => team.teamName !== teamName);
      this.setState({
        teams: newTeams
      });
    } else {
      currentTeams.push({ teamName: teamName, played: [] });
      this.setState({
        teams: currentTeams
      });
    }
  };

  setGames = () => event => {
    this.setState({ numberOfGames: event.target.value });
  };

  setLength = () => event => {
    this.setState({ lengthOfGames: event.target.value });
  };

  setGameDays = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  setWeekEndStartTime = (index, time) => {
    const times = [...this.state.weekendStartTimes];
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

  setLeagueType = (event, value) => {
    if (this.state.leagueType !== value) {
      this.setState({ leagueType: value });
    }
  };

  setStartDate = date => {
    console.log(date);
    this.setState({ leagueStartDate: date });
  };

  setEndDate = date => {
    this.setState({ leagueEndDate: date });
  };

  generateSchedule = ()=>{
    console.log(this.state.teams);

    const randomValues = [];

    const games = this.state.numberOfGames;
    const numOfTeams = this.state.teams.length;
    const repeatGames = Math.ceil(games / numOfTeams);

    for(let i = 0; i < games; i++){
      randomValues.push([]);
      for(let j = 0; j < numOfTeams; j++){
        let rand = Math.trunc(Math.random() * numOfTeams);
        while(randomValues[i].indexOf(rand) !== -1){
          rand = Math.trunc(Math.random() * numOfTeams);
        }
        randomValues[i].push(rand);
      }
    }

    console.log(randomValues);

    // Create temp team storage
    const teams = []
    for(let i = 0; i < this.state.teams.length; i++){
      teams.push({name: this.state.teams[i], played: []})
    }

    console.log(teams);

    const schedule = [];

    for(let i = 0; i < games; i++){
      for(let j = 0; j < Math.floor(numOfTeams / 2); j++){
        let team1Offset = 0;
        while(randomValues[i][team1Offset] === null){
          team1Offset++;
        }
        const team1 = randomValues[i][team1Offset];
        randomValues[i][team1Offset] = null;

        let team2Offset = 0;
        while(randomValues[i][team2Offset] === null){
          team2Offset++;
        }
        const team2 = randomValues[i][team2Offset];
        randomValues[i][team2Offset] = null;

        teams[team1].played.push(team2);
        teams[team2].played.push(team1);

        schedule.push([{team1, team2}]);
      }
    }

    console.log(schedule);
  }

  render() {
    return (
      <div>
        <h1 onClick={this.showState}>{this.state.leagueName}</h1>

        <div>
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
            label="Number"
            value={this.state.numberOfGames}
            onChange={this.setGames()}
          />
          <TextField
            variant="outlined"
            type="number"
            label="Length"
            value={this.state.lengthOfGames}
            onChange={this.setLength()}
          />
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
                    onChange={this.addTeam(team)}
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

CreateLeague.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CreateLeague);