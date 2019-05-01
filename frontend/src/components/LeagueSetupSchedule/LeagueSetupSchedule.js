import React from 'react';
import { withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import { AppContext } from '../Context/AppContext';

const styles = theme => ({
  main: {
    width: '60%',
    minWidth: 300,
    margin: '90px auto',
    display: 'flex', // Fix IE 11 issue.
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
    // marginLeft: theme.spacing.unit * 3,
    // marginRight: theme.spacing.unit * 3,
    // marginTop: '200px',
    // border: '1px solid red'
    // [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
    //   width: '80%',
    //   minWidth: '200px',
    //   marginLeft: 'auto',
    //   marginRight: 'auto'
    // }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  button: {
    borderRadius: '7px',
    backgroundColor: 'red',
    width: '200px',
    height: '100px',
    margin: '50px 0'
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  },
  warning: {
    fontSize: '1.5rem',
    borderRadius: '7px',
    lineHeight: '1.3',
    padding: '25px 3%',
    backgroundColor: 'white',
    boxShadow: '1px 2px 3px #333'
    // border: '1px solid red'
  }
});

class LeagueSetupSchedule extends React.Component {
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
  // possible Handlers
  // CDM

  generateSchedule = async () => {
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
        // teams[team1].played.push(team2);
        // teams[team2].played.push(team1);
      }

      // Push the weekly schedule to the main schedule
      schedule.push(weekSchedule);
      currentWeek++;
    }

    await this.setState({
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
          const endTimeHour = +startTimeHour + +this.state.game_length;
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
          const endTimeHour = +startTimeHour + +this.state.game_length;
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

    console.log('Time Slots: ', gameTimeSlotsPerWeek);

    // Sync up league to start on league start day
    // Then run the week from that day of the week thru day - 1
    // Example: league start day = Wednesday, league week is Wednesday thru Tuesday
    const sortDays = function(day1, day2) {
      return day1.dayOfTheWeek - day2.dayOfTheWeek;
    };
    gameTimeSlotsPerWeek = [
      ...gameTimeSlotsPerWeek
        .filter(
          day => day.dayOfTheWeek >= new Date(this.state.start_day).getDay()
        )
        .sort(sortDays),
      ...gameTimeSlotsPerWeek
        .filter(
          day => day.dayOfTheWeek < new Date(this.state.start_day).getDay()
        )
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
      // if (currentGameDate > this.state.leagueEndDate) {
      //   this.setState({
      //     seasonOverrun: true
      //   });
      //   return;
      // }

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
        away_team_id: this.state.teams[allGameMatchUps[i].away].id,
        home_team_id: this.state.teams[allGameMatchUps[i].home].id,
        start_time: gameStartDateTime,
        end_time: gameEndDateTime
      });

      console.log(completedSchedule);

      currentTimeSlot++;
      if (currentTimeSlot >= gamesPerWeek) {
        currentTimeSlot = 0;
      }
    }

    // console.log(this.state.start_day.getDay(), this.state.leagueEndDate);
    // console.log(allGameMatchUps);
    // console.log(gameTimeSlotsPerWeek);
    this.context.createScheduleInLeague(
      completedSchedule,
      this.props.index,
      () => {
        console.log('inside cb');
        this.props.history.push({
          pathname: '/dashboard/admin',
          state: { leagueIndex: this.props.index }
        });
      }
    );
  };

  async componentDidMount() {
    const league = this.context.state.leagues[this.props.index];
    const lid = this.context.state.leagues[this.props.index].id;
    if (this.context.state.teams_by_league.find(x => x.league_id === lid)) {
      const teams = this.context.state.teams_by_league.find(
        x => x.league_id === lid
      ).teams;
      await this.setState({
        teams,
        ...league,
        weekdayStartTimes: [
          new Date(`${league.monday_start_time}`),
          new Date(`${league.tuesday_start_time}`),
          new Date(`${league.wednesday_start_time}`),
          new Date(`${league.thursday_start_time}`),
          new Date(`${league.friday_start_time}`)
        ],
        weekdayEndTimes: [
          new Date(`${league.monday_end_time}`),
          new Date(`${league.tuesday_end_time}`),
          new Date(`${league.wednesday_end_time}`),
          new Date(`${league.thursday_end_time}`),
          new Date(`${league.friday_end_time}`)
        ],
        weekendStartTimes: [
          new Date(`${league.saturday_start_time}`),
          new Date(`${league.sunday_start_time}`)
        ],
        weekendEndTimes: [
          new Date(`${league.saturday_end_time}`),
          new Date(`${league.sunday_end_time}`)
        ]
      });
      await console.log(this.state);
    }
  }
  render() {
    const { classes } = this.props;
    console.log(this.state);
    return (
      <>
        <Button
          variant="contained"
          disabled={this.props.activeStep === 0}
          onClick={() => {
            this.props.back(this.state, this.props.index);
          }}
        >
          Back
        </Button>
        <div className={classes.main}>
          <CssBaseline />
          <p className={classes.warning}>
            {' '}
            Once you generate the schedule, your settings are locked and teams
            can not be added or removed.{' '}
          </p>
          <Button
            onClick={
              this.generateSchedule
              // Magic Button
            }
            className={classes.button}
          >
            Generate
            <br />
            Schedule
          </Button>
          {/* <div>
            <Button
              disabled={this.props.activeStep === 0}
              onClick={() => {
                this.props.back(this.state, this.props.index);
              }}
            >
              Back
            </Button>
            <Button
            variant="contained"
            color="primary"
            onClick={() => {
              this.props.next(this.state, this.props.index);
            }}
          >
            Next
          </Button>
          </div> */}
        </div>
      </>
    );
  }
}

LeagueSetupSchedule.contextType = AppContext;

export default withRouter(withStyles(styles)(LeagueSetupSchedule));
