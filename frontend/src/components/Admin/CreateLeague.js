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
    numberOfGames: 0,
    lengthOfGames: 0,
    weekday: false,
    weekend: false,
    weekdayStartTimes: ["", "", "", "", ""],
    weekdayEndTimes: ["", "", "", "", ""],
    weekendStartTimes: ["", ""],
    weekendEndTimes: ["", ""],
    // When team is selected add to this array
    teams: []
  };

  showState = () => {
    // console.log(this.state.teams);
    // console.log(this.state.weekday);
    // console.log(this.state.weekend);
    // console.log(this.state.weekdayStartTimes);
    // console.log(this.state.weekdayEndTimes);
    // console.log(this.state.weekendStartTimes);
    // console.log(this.state.weekendEndTimes);
    console.log(this.state.leagueType);
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

  setWeekEndStartTime = index => event => {
    const times = [...this.state.weekendStartTimes];
    times[index] = event.target.value;
    this.setState({ weekendStartTimes: times });
  };

  // NEED TO CHECK THAT END TIME IS GREATER THEN START TIME
  setWeekEndEndTime = index => event => {
    const times = [...this.state.weekendEndTimes];
    times[index] = event.target.value;
    this.setState({ weekendEndTimes: times });
  };

  setWeekDayStartTime = index => event => {
    const times = [...this.state.weekdayStartTimes];
    times[index] = event.target.value;
    this.setState({ weekdayStartTimes: times });
  };

  // NEED TO CHECK THAT END TIME IS GREATER THEN START TIME
  setWeekDayEndTime = index => event => {
    const times = [...this.state.weekdayEndTimes];
    times[index] = event.target.value;
    this.setState({ weekdayEndTimes: times });
  };

  setLeagueType = (event, value) => {
    if (this.state.leagueType !== value) {
      this.setState({ leagueType: value });
    }
  };

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
                    <TextField
                      label="Start Time"
                      type="time"
                      defaultValue="--:--"
                      value={this.state.weekdayStartTimes[index]}
                      onChange={this.setWeekDayStartTime(index)}
                      InputLabelProps={{
                        shrink: true
                      }}
                      inputProps={{
                        step: 300 // 5 min
                      }}
                    />
                    <TextField
                      label="End Time"
                      type="time"
                      defaultValue="--:--"
                      value={this.state.weekdayEndTimes[index]}
                      onChange={this.setWeekDayEndTime(index)}
                      InputLabelProps={{
                        shrink: true
                      }}
                      inputProps={{
                        step: 300 // 5 min
                      }}
                    />
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
                    <TextField
                      label="Start Time"
                      type="time"
                      defaultValue="--:--"
                      value={this.state.weekendStartTimes[index]}
                      onChange={this.setWeekEndStartTime(index)}
                      InputLabelProps={{
                        shrink: true
                      }}
                      inputProps={{
                        step: 300 // 5 min
                      }}
                    />
                    <TextField
                      label="End Time"
                      type="time"
                      defaultValue="--:--"
                      value={this.state.weekendEndTimes[index]}
                      onChange={this.setWeekEndEndTime(index)}
                      InputLabelProps={{
                        shrink: true
                      }}
                      inputProps={{
                        step: 300 // 5 min
                      }}
                    />
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
          <div>Start Date</div>
          <div>End Date</div>
        </div>

        <div>
          <button>Generate Schedule</button>
        </div>
      </div>
    );
  }
}

CreateLeague.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CreateLeague);