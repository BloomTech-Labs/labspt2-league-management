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
    teams: [],
    schedule: []
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
      // Remove team, check box has been deselected
      const newTeams = currentTeams.filter(team => team.teamName !== teamName);
      this.setState({
        teams: newTeams
      });
    } else {
      // Add team to schedule
      currentTeams.push({ teamName: teamName, played: [], homeGames: 0, numOfByes: 0, isBye: false });
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
    const teams = this.state.teams;
    // Add bye week if odd amount of teams
    if(teams.length % 2 !== 0){
      teams.push({teamName: 'Bye Week', played: [], homeGames: 0, numOfByes: 0, isBye: true});
    }

    const games = this.state.numberOfGames;
    const numOfTeams = teams.length;
    const schedule = [];

    // Create all game matchups for each team to play each other team
    const allGames = [];
    for(let i = 0; i < numOfTeams; i++){
      for(let j = i + 1; j < numOfTeams; j++){
        allGames.push(i);
        allGames.push(j);
      }
    }

    // Setup empty 2D array to store the matchups for one round by weeks
    const matchUpsByWeek = []
    for(let i = 0; i < numOfTeams - 1; i++){
      matchUpsByWeek.push([]);
    }

    // Push created games in to week separated matchups
    // Each set of teams in order is a game
    let currentWeek = 0
    for(let i = 0; i < allGames.length; i += 2){
      while(matchUpsByWeek[currentWeek].includes(allGames[i]) || matchUpsByWeek[currentWeek].includes(allGames[i + 1])){
        currentWeek++;
        currentWeek = currentWeek === matchUpsByWeek.length ? 0 : currentWeek;
      }
      
      matchUpsByWeek[currentWeek].push(allGames[i]);
      matchUpsByWeek[currentWeek].push(allGames[i + 1]);

      currentWeek++;
      currentWeek = currentWeek === matchUpsByWeek.length ? 0 : currentWeek;
    }

    // Compile Schedule
    let randomWeeks = [];
    let randomGameOrderPerWeek = [];
    currentWeek = 0;
    for(let i = 0; i < games; i++){
      // Check if its a new round
      // If it is reset the round variables
      // And generate new randoms to combat patterns showing up
      if(i % (numOfTeams - 1) === 0){
        randomWeeks = [];
        randomGameOrderPerWeek = [];
        currentWeek = 0;
        // Creates random weeks for one round of games
        for(let j = 0; j < numOfTeams - 1; j++){
          let rand = Math.abs(Math.trunc(Math.random() * numOfTeams - 1));
          while(randomWeeks.indexOf(rand) !== -1){
            rand = Math.abs(Math.trunc(Math.random() * numOfTeams - 1));
          }
          randomWeeks.push(rand);
        }

        // Randomize order of games per week
        // For one round of games
        for(let j = 0; j < numOfTeams; j++){
          randomGameOrderPerWeek.push([]);
          for(let k = 0; k < Math.trunc(numOfTeams / 2); k++){
            let rand = Math.trunc(Math.random() * Math.trunc(numOfTeams / 2));
            while(randomGameOrderPerWeek[j].indexOf(rand) !== -1){
              rand = Math.trunc(Math.random() * Math.trunc(numOfTeams / 2));
            }
            randomGameOrderPerWeek[j].push(rand);
          }
        }
      }
      
      // Set a weeks worth of games using the random numbers generated
      const week = randomWeeks[currentWeek];
      const weekSchedule = [];
      for(let j = 0; j < Math.trunc(numOfTeams / 2); j++){
        const team1 = matchUpsByWeek[week][randomGameOrderPerWeek[week][j] * 2];
        const team2 = matchUpsByWeek[week][randomGameOrderPerWeek[week][j] * 2 + 1];

        // TODO: FIX THIS HOME AND AWAY STILL NOT WORKING 100% OF THE TIME
        // This sets the bye week, when odd number of teams and sets home/away teams
        if(teams[team1].isBye || teams[team2].isBye){
          if(teams[team1].isBye){
            teams[team2].numOfByes++;
            weekSchedule.push({away: 'Bye Week', home: team2})
          }

          else{
            teams[team1].numOfByes++;
            weekSchedule.push({away: 'Bye Week', home: team1})
          }
        }

        else if(teams[team1].homeGames < teams[team2].homeGames){
          teams[team1].homeGames++;
          weekSchedule.push({away: team2, home: team1});
        }

        else{
          teams[team2].homeGames++;
          weekSchedule.push({away: team1, home: team2});
        }

        // FOR TESTING
        teams[team1].played.push(team2);
        teams[team2].played.push(team1);
      }

      // Push the weekly schedule to the main schedule
      schedule.push(weekSchedule);
      currentWeek++;
    }

    console.log(schedule);

    this.setState({
      schedule: schedule
    });
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