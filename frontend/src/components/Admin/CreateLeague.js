import 'date-fns';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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

// Get this from the context
const loadedTeams = [
  'Valley Vipers',
  'Woodside Warriors',
  'Bay Brawlers',
  'Back Alley Snakes',
  'Big City Boys',
  'Comeback Kids',
  'Another Team',
  "Bill's Ballers",
  'Yet Another Team'
];

// change all the state variables to match naming in db on backend
// load the league settings and league teams data into state from context
// debug algorithm
// push to context function which makes axios call and updates localstorage
// redirect to admin dashboard with proper league loaded


const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday'];
const WEEK_END = ['Saturday', 'Sunday'];

class CreateLeague extends Component {
  state = {
    name: 'League Name',
    start_day: new Date('March 29, 2019 09:30:00'),
    leagueEndDate: new Date('May 10, 2019 09:30:00'),
    teams_game_count: 4,
    gamesPlayedConcurrently: 1,
    gamesPerTeamPerWeek: 1,
    game_length: 2,
    weekday: true,
    weekend: true,
    weekdayStartTimes: [
      new Date('January 1, 2019 09:00:00'),
      new Date('January 1, 2019 09:00:00'),
      new Date('January 1, 2019 09:00:00'),
      new Date('January 1, 2019 09:00:00'),
      new Date('January 1, 2019 09:00:00')
    ],
    weekdayEndTimes: [
      new Date('January 1, 2019 11:00:00'),
      new Date('January 1, 2019 11:00:00'),
      new Date('January 1, 2019 11:00:00'),
      new Date('January 1, 2019 11:00:00'),
      new Date('January 1, 2019 11:00:00')
    ],
    weekendStartTimes: [
      new Date('January 1, 2019 09:00:00'),
      new Date('January 1, 2019 09:00:00')
    ],
    weekendEndTimes: [
      new Date('January 1, 2019 11:00:00'),
      new Date('January 1, 2019 11:00:00')
    ],
    // When team is selected add to this array
    oddNumOfTeams: false, // For error handling
    toManyGamesPerWeek: false, // For error handling
    seasonOverrun: false,
    teams: [],
    schedule: []
  };

  // addRemoveTeam = teamName => event => {
  //   // Check if team needs removed
  //   const currentTeams = this.state.teams.slice();

  //   if (
  //     this.state.teams.find(function(element) {
  //       return element.teamName === teamName;
  //     })
  //   ) {
  //     // Remove team, check box has been deselected
  //     const newTeams = currentTeams.filter(team => team.teamName !== teamName);
  //     this.setState({
  //       teams: newTeams
  //     });
  //   } else {
  //     // Add team to schedule
  //     currentTeams.push({
  //       teamName: teamName,
  //       played: [],
  //       homeGames: 0,
  //       numOfByes: 0,
  //       isBye: false
  //     });
  //     this.setState({
  //       teams: currentTeams
  //     });
  //   }
  // };

  setGameData = stateName => event => {
    this.setState({ [stateName]: event.target.value });
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

  setStartDate = date => {
    this.setState({ start_day: date });
  };

  setEndDate = date => {
    this.setState({ leagueEndDate: date });
  };

  // ##########################################################
  generateSchedule = () => {
    // If odd number of teams issue warning
    if (this.state.teams.length % 2 !== 0) {
      this.setState({ oddNumOfTeams: true });
      return;
    }

    const teams = this.state.teams.slice();
    // Add bye week if odd amount of teams
    // For now require even number of teams only
    // if(teams.length % 2 !== 0){
    //   teams.push({teamName: 'Bye Week', played: [], homeGames: 0, numOfByes: 0, isBye: true});
    // }

    const games = this.state.teams_game_count;
    const numOfTeams = teams.length;
    const schedule = [];

    // Create all game matchups for each team to play each other team
    const allGames = [];
    for (let i = 0; i < numOfTeams; i++) {
      for (let j = i + 1; j < numOfTeams; j++) {
        allGames.push(i);
        allGames.push(j);
      }
    }

    // Setup empty 2D array to store the matchups for one round by weeks
    const matchUpsByWeek = [];
    for (let i = 0; i < numOfTeams - 1; i++) {
      matchUpsByWeek.push([]);
    }

    // Push created games in to week separated matchups
    // Each set of teams in order is a game
    let currentWeek = 0;
    for (let i = 0; i < allGames.length; i += 2) {
      while (
        matchUpsByWeek[currentWeek].includes(allGames[i]) ||
        matchUpsByWeek[currentWeek].includes(allGames[i + 1])
      ) {
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
    for (let i = 0; i < games; i++) {
      // Check if its a new round
      // If it is reset the round variables
      // And generate new randoms to combat patterns showing up
      if (i % (numOfTeams - 1) === 0) {
        randomWeeks = [];
        randomGameOrderPerWeek = [];
        currentWeek = 0;
        // Creates random weeks for one round of games
        for (let j = 0; j < numOfTeams - 1; j++) {
          let rand = Math.abs(Math.trunc(Math.random() * numOfTeams - 1));
          while (randomWeeks.indexOf(rand) !== -1) {
            rand = Math.abs(Math.trunc(Math.random() * numOfTeams - 1));
          }
          randomWeeks.push(rand);
        }

        // Randomize order of games per week
        // For one round of games
        for (let j = 0; j < numOfTeams; j++) {
          randomGameOrderPerWeek.push([]);
          for (let k = 0; k < Math.trunc(numOfTeams / 2); k++) {
            let rand = Math.trunc(Math.random() * Math.trunc(numOfTeams / 2));
            while (randomGameOrderPerWeek[j].indexOf(rand) !== -1) {
              rand = Math.trunc(Math.random() * Math.trunc(numOfTeams / 2));
            }
            randomGameOrderPerWeek[j].push(rand);
          }
        }
      }

      // Set a weeks worth of games using the random numbers generated
      const week = randomWeeks[currentWeek];
      const weekSchedule = [];
      for (let j = 0; j < Math.trunc(numOfTeams / 2); j++) {
        const team1 = matchUpsByWeek[week][randomGameOrderPerWeek[week][j] * 2];
        const team2 =
          matchUpsByWeek[week][randomGameOrderPerWeek[week][j] * 2 + 1];

        // TODO: FIX THIS HOME AND AWAY STILL NOT WORKING 100% OF THE TIME
        // This sets the bye week, when odd number of teams and sets home/away teams
        // for now requiure even number of teams
        // if(teams[team1].isBye || teams[team2].isBye){
        //   if(teams[team1].isBye){
        //     teams[team2].numOfByes++;
        //     weekSchedule.push({away: 'Bye Week', home: team2})
        //   }

        //   else{
        //     teams[team1].numOfByes++;
        //     weekSchedule.push({away: 'Bye Week', home: team1})
        //   }
        // }

        if (teams[team1].homeGames < teams[team2].homeGames) {
          teams[team1].homeGames++;
          weekSchedule.push({ away: team2, home: team1 });
        } else {
          teams[team2].homeGames++;
          weekSchedule.push({ away: team1, home: team2 });
        }

        // FOR TESTING
        teams[team1].played.push(team2);
        teams[team2].played.push(team1);
      }

      // Push the weekly schedule to the main schedule
      schedule.push(weekSchedule);
      currentWeek++;
    }

    this.setState({
      schedule: schedule
    });
    // #####################################################################################
    // Assign teams to hours available per week
    // Create time slots available for each week
    let gameTimeSlotsPerWeek = [];
    for (let i = 0; i < this.state.weekdayStartTimes.length; i++) {
      const hoursInDay =
        this.state.weekdayEndTimes[i].getHours() +
        this.state.weekdayEndTimes[i].getMinutes() / 60 -
        (this.state.weekdayStartTimes[i].getHours() +
          this.state.weekdayStartTimes[i].getMinutes() / 60);
      const numOfTimeSlots = Math.trunc(hoursInDay / this.state.game_length);

      for (let j = 0; j < numOfTimeSlots; j++) {
        for (let k = 0; k < this.state.gamesPlayedConcurrently; k++) {
          const startTimeHour =
            this.state.weekdayStartTimes[i].getHours() +
            j * this.state.game_length;
          const startTimeMinute = this.state.weekdayStartTimes[i].getMinutes();
          const endTimeHour = startTimeHour + this.state.game_length;
          const endTimeMinute = this.state.weekdayStartTimes[i].getMinutes();

          gameTimeSlotsPerWeek.push({
            dayOfTheWeek: i + 1,
            startTimeHour,
            startTimeMinute,
            endTimeHour,
            endTimeMinute
          });
        }
      }
    }

    for (let i = 0; i < this.state.weekendStartTimes.length; i++) {
      const hoursInDay =
        this.state.weekendEndTimes[i].getHours() +
        this.state.weekendEndTimes[i].getMinutes() / 60 -
        (this.state.weekendStartTimes[i].getHours() +
          this.state.weekendStartTimes[i].getMinutes() / 60);
      const numOfTimeSlots = Math.trunc(hoursInDay / this.state.game_length);

      for (let j = 0; j < numOfTimeSlots; j++) {
        for (let k = 0; k < this.state.gamesPlayedConcurrently; k++) {
          const startTimeHour =
            this.state.weekendStartTimes[i].getHours() +
            j * this.state.game_length;
          const startTimeMinute = this.state.weekendStartTimes[i].getMinutes();
          const endTimeHour = startTimeHour + this.state.game_length;
          const endTimeMinute = this.state.weekendStartTimes[i].getMinutes();

          gameTimeSlotsPerWeek.push({
            dayOfTheWeek: i === 0 ? 6 : 0,
            startTimeHour,
            startTimeMinute,
            endTimeHour,
            endTimeMinute
          });
        }
      }
    }

    // Sync up league to start on league start day
    // Then run the week from that day of the week thru day - 1
    // Example: league start day = Wednesday, league week is Wednesday thru Tuesday
    const sortDays = function(day1, day2) {
      return day1.dayOfTheWeek - day2.dayOfTheWeek;
    };
    gameTimeSlotsPerWeek = [
      ...gameTimeSlotsPerWeek
        .filter(day => day.dayOfTheWeek >= this.state.start_day.getDay())
        .sort(sortDays),
      ...gameTimeSlotsPerWeek
        .filter(day => day.dayOfTheWeek < this.state.start_day.getDay())
        .sort(sortDays)
    ];

    // Fill in complete schedule with games, times and days

    // Create array of all games
    const allGameMatchUps = [];
    for (let i = 0; i < schedule.length; i++) {
      for (let j = 0; j < this.state.teams.length / 2; j++) {
        allGameMatchUps.push(schedule[i][j]);
      }
    }

    // Check that enough time slots per week exist
    const gamesPerWeek =
      (this.state.teams.length / 2) * this.state.gamesPerTeamPerWeek;
    if (gamesPerWeek > gameTimeSlotsPerWeek.length) {
      this.setState({ toManyGamesPerWeek: true });
      return;
    }

    const completedSchedule = [];
    let currentTimeSlot = 0;

    // Set up map to increment the actual day of the calender
    let currentDateOffset = [null, null, null, null, null, null, null];
    let currentDayOffset = gameTimeSlotsPerWeek[0].dayOfTheWeek;
    for (let i = 0; i < 7; i++) {
      currentDateOffset[currentDayOffset] = i;

      currentDayOffset++;
      currentDayOffset = currentDayOffset > 6 ? 0 : currentDayOffset;
    }

    let currentWeekOffset = -1;

    // Combine games with week
    for (let i = 0; i < allGameMatchUps.length; i++) {
      // Convert data back to javascript date
      if (i % gamesPerWeek === 0) {
        currentWeekOffset++;
      }
      const startDate = new Date(this.state.start_day);
      const currentGameDate = new Date(
        startDate.setDate(
          startDate.getDate() +
            currentWeekOffset * 7 +
            currentDateOffset[
              gameTimeSlotsPerWeek[currentTimeSlot].dayOfTheWeek
            ]
        )
      );
      if (currentGameDate > this.state.leagueEndDate) {
        this.setState({
          seasonOverrun: true
        });
        return;
      }

      const gameStartDateTime = new Date(currentGameDate);
      const gameEndDateTime = new Date(currentGameDate);

      gameStartDateTime.setHours(
        gameTimeSlotsPerWeek[currentTimeSlot].startTimeHour
      );
      gameStartDateTime.setMinutes(
        gameTimeSlotsPerWeek[currentTimeSlot].startTimeMinute
      );
      gameEndDateTime.setHours(
        gameTimeSlotsPerWeek[currentTimeSlot].endTimeHour
      );
      gameEndDateTime.setMinutes(
        gameTimeSlotsPerWeek[currentTimeSlot].endTimeMinute
      );

      // Build matchup array with usable data
      completedSchedule.push({
        awayTeamIndex: allGameMatchUps[i].away,
        homeTeamIndex: allGameMatchUps[i].home,
        startTime: gameStartDateTime,
        endTime: gameEndDateTime
      });

      currentTimeSlot++;
      if (currentTimeSlot >= gamesPerWeek) {
        currentTimeSlot = 0;
      }
    }
  };

  render() {
    return (
      <div>
        <h1 onClick={this.showState}>{this.state.name}</h1>
        <div>
          {/* <h2>Season</h2> */}
          {this.state.seasonOverrun ? (
            <div>The total number of weeks exceeds the league end date</div>
          ) : null}
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              margin="normal"
              label="Start Date"
              value={this.state.start_day}
              onChange={this.setStartDate}
            />
            {/* <DatePicker
              margin="normal"
              label="End Date"
              value={this.state.leagueEndDate}
              onChange={this.setEndDate}
            /> */}
          </MuiPickersUtilsProvider>
        </div>
        <div>
          {/* <h2>Games</h2> */}
          <TextField
            variant="outlined"
            type="number"
            label="Total Number of Games Per Team"
            value={this.state.teams_game_count}
            onChange={this.setGameData('teams_game_count')}
          />
          <TextField
            variant="outlined"
            type="number"
            label="Length of Games (Hours)"
            value={this.state.game_length}
            onChange={this.setGameData('game_length')}
          />

          {/* <TextField
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
          /> */}
          {this.state.toManyGamesPerWeek ? (
            <div>More games scheduled per week then time slots available</div>
          ) : null}
          {/* <FormControlLabel
            control={
              <Switch
                checked={this.state.weekday}
                onChange={this.setGameDays('weekday')}
                value={this.state.weekday}
                color="primary"
              />
            }
            label="Weekday"
          /> */}
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
                        onChange={time => this.setWeekDayStartTime(index, time)}
                      />
                      <TimePicker
                        margin="normal"
                        label="End Time"
                        value={this.state.weekdayEndTimes[index]}
                        onChange={time => this.setWeekDayEndTime(index, time)}
                      />
                    </MuiPickersUtilsProvider>
                  </div>
                );
              })
            : null}
          {/* <FormControlLabel
            control={
              <Switch
                checked={this.state.weekend}
                onChange={this.setGameDays('weekend')}
                value={this.state.weekend}
                color="primary"
              />
            }
            label="Weekend"
          /> */}
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
                        onChange={time => this.setWeekEndStartTime(index, time)}
                      />
                      <TimePicker
                        margin="normal"
                        label="End Time"
                        value={this.state.weekendEndTimes[index]}
                        onChange={time => this.setWeekEndEndTime(index, time)}
                      />
                    </MuiPickersUtilsProvider>
                  </div>
                );
              })
            : null}
        </div>

        {/* <div>
          <h2>Teams</h2>
          {this.state.oddNumOfTeams ? (
            <div>Please select an even number of teams</div>
          ) : null}
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
        </div> */}

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

CreateLeague.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CreateLeague);
