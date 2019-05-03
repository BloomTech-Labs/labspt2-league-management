import 'date-fns';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker
} from 'material-ui-pickers';
import { AppContext } from '../Context/AppContext';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    minWidth: 300,
    margin: '0 auto',
    textAlign: 'center',
    fontFamily: 'Montserrat'
  },
  leagueName: {
    fontSize: '1.8rem',
    [theme.breakpoints.down(600)]: {
      marginTop: 10
    }
  },
  startDate: {
    width: '40%',
    margin: '35px auto'
  },
  inputFields: {
    // border: '1px solid red',
    marginBottom: 25,
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  input: {
    width: '40%'
  },
  formControl: {
    margin: theme.spacing.unit * 3
  },
  dayOfWeek: {
    borderBottom: '1px solid #333',
    width: '50%',
    margin: '0 auto',
    // color: 'red'
    padding: 10,
    fontSize: '1.2rem'
  },
  timePicker: {
    // border: '1px solid red',
    width: '48%',
    margin: '30px 0%'
    // padding: '10px 2%',
  },
  timePickerCluster: {
    display: 'flex',
    justifyContent: 'space-between'
    // border: '1px solid #333',
  },
  day_time: {
    boxShadow: '1px 1px 3px #1565c0, 1px 1px 2px #333',
    padding: '10px 3%',
    marginBottom: '20px',
    borderRadius: 7,
    backgroundColor: '#fafafa'
  },
  btn: {
    marginBottom: 30
  },
  btnTop: {
    width: '6%',
    minWidth: '75px'
    // position: 'absolute',
    // left: '87%'
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    paddingRight: 18
  }
});

class LeagueSetupSettings extends Component {
  state = {
    name: 'League Name'
  };

  inputHandler = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  inputDatetimeHandler = (name, datetime) => {
    this.setState({ [name]: datetime.toString() });
  };

  componentDidMount() {
    this.setState({ ...this.context.state.leagues[this.props.index] });
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <div className={classes.btnContainer}>
          <Button
            className={classes.btnTop}
            variant="contained"
            color="primary"
            onClick={() => {
              this.props.next(this.state, this.props.index);
            }}
          >
            Next
          </Button>
        </div>
        <div className={classes.root}>
          <div className={classes.leagueName}>{this.state.name}</div>

          <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                margin="normal"
                className={classes.startDate}
                label="League Start Date"
                name="start_day"
                value={new Date(this.state.start_day)}
                onChange={date => this.inputDatetimeHandler('start_day', date)}
              />
            </MuiPickersUtilsProvider>
          </div>
          <div className={classes.inputFields}>
            <TextField
              className={classes.input}
              variant="outlined"
              type="number"
              label="Total Number of Games Per Team"
              name="teams_game_count"
              value={this.state.teams_game_count}
              onChange={this.inputHandler}
              InputLabelProps={{
                shrink: true
              }}
              InputProps={{ color: 'red' }}
              margin="normal"
            />
            <TextField
              className={classes.input}
              variant="outlined"
              type="number"
              label="Length of Games (Hours)"
              name="game_length"
              value={this.state.game_length}
              onChange={this.inputHandler}
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
            />
          </div>

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div className={classes.day_time}>
              <div className={classes.dayOfWeek}>Monday</div>
              <div className={classes.timePickerCluster}>
                <TimePicker
                  className={classes.timePicker}
                  margin="normal"
                  label="Start Time"
                  name="monday_start_time"
                  value={new Date(this.state.monday_start_time)}
                  onChange={date =>
                    this.inputDatetimeHandler('monday_start_time', date)
                  }
                />
                <TimePicker
                  className={classes.timePicker}
                  margin="normal"
                  label="End Time"
                  name="monday_end_time"
                  value={new Date(this.state.monday_end_time)}
                  onChange={date =>
                    this.inputDatetimeHandler('monday_end_time', date)
                  }
                />
              </div>
            </div>
          </MuiPickersUtilsProvider>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div className={classes.day_time}>
              <div className={classes.dayOfWeek}>Tuesday</div>
              <div className={classes.timePickerCluster}>
                <TimePicker
                  className={classes.timePicker}
                  margin="normal"
                  label="Start Time"
                  name="tuesday_start_time"
                  value={new Date(this.state.tuesday_start_time)}
                  onChange={date =>
                    this.inputDatetimeHandler('tuesday_start_time', date)
                  }
                />
                <TimePicker
                  className={classes.timePicker}
                  margin="normal"
                  label="End Time"
                  name="tuesday_end_time"
                  value={new Date(this.state.tuesday_end_time)}
                  onChange={date =>
                    this.inputDatetimeHandler('tuesday_end_time', date)
                  }
                />
              </div>
            </div>
          </MuiPickersUtilsProvider>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div className={classes.day_time}>
              <div className={classes.dayOfWeek}>Wednesday</div>
              <div className={classes.timePickerCluster}>
                <TimePicker
                  className={classes.timePicker}
                  margin="normal"
                  label="Start Time"
                  name="wednesday_start_time"
                  value={new Date(this.state.wednesday_start_time)}
                  onChange={date =>
                    this.inputDatetimeHandler('wednesday_start_time', date)
                  }
                />
                <TimePicker
                  className={classes.timePicker}
                  margin="normal"
                  label="End Time"
                  name="wednesday_end_time"
                  value={new Date(this.state.wednesday_end_time)}
                  onChange={date =>
                    this.inputDatetimeHandler('wednesday_end_time', date)
                  }
                />
              </div>
            </div>
          </MuiPickersUtilsProvider>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div className={classes.day_time}>
              <div className={classes.dayOfWeek}>Thursday</div>
              <div className={classes.timePickerCluster}>
                <TimePicker
                  className={classes.timePicker}
                  margin="normal"
                  label="Start Time"
                  name="thursday_start_time"
                  value={new Date(this.state.thursday_start_time)}
                  onChange={date =>
                    this.inputDatetimeHandler('thursday_start_time', date)
                  }
                />
                <TimePicker
                  className={classes.timePicker}
                  margin="normal"
                  label="End Time"
                  name="thursday_end_time"
                  value={new Date(this.state.thursday_end_time)}
                  onChange={date =>
                    this.inputDatetimeHandler('thursday_end_time', date)
                  }
                />
              </div>
            </div>
          </MuiPickersUtilsProvider>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div className={classes.day_time}>
              <div className={classes.dayOfWeek}>Friday</div>
              <div className={classes.timePickerCluster}>
                <TimePicker
                  className={classes.timePicker}
                  margin="normal"
                  label="Start Time"
                  name="friday_start_time"
                  value={new Date(this.state.friday_start_time)}
                  onChange={date =>
                    this.inputDatetimeHandler('friday_start_time', date)
                  }
                />
                <TimePicker
                  className={classes.timePicker}
                  margin="normal"
                  label="End Time"
                  name="friday_end_time"
                  value={new Date(this.state.friday_end_time)}
                  onChange={date =>
                    this.inputDatetimeHandler('friday_end_time', date)
                  }
                />
              </div>
            </div>
          </MuiPickersUtilsProvider>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div className={classes.day_time}>
              <div className={classes.dayOfWeek}>Saturday</div>
              <div className={classes.timePickerCluster}>
                <TimePicker
                  className={classes.timePicker}
                  margin="normal"
                  label="Start Time"
                  name="saturday_start_time"
                  value={new Date(this.state.saturday_start_time)}
                  onChange={date =>
                    this.inputDatetimeHandler('saturday_start_time', date)
                  }
                />
                <TimePicker
                  className={classes.timePicker}
                  margin="normal"
                  label="End Time"
                  name="saturday_end_time"
                  value={new Date(this.state.saturday_end_time)}
                  onChange={date =>
                    this.inputDatetimeHandler('saturday_end_time', date)
                  }
                />
              </div>
            </div>
          </MuiPickersUtilsProvider>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div className={classes.day_time}>
              <div className={classes.dayOfWeek}>Sunday</div>
              <div className={classes.timePickerCluster}>
                <TimePicker
                  className={classes.timePicker}
                  margin="normal"
                  label="Start Time"
                  name="sunday_start_time"
                  value={new Date(this.state.sunday_start_time)}
                  onChange={date =>
                    this.inputDatetimeHandler('sunday_start_time', date)
                  }
                />
                <TimePicker
                  className={classes.timePicker}
                  margin="normal"
                  label="End Time"
                  name="sunday_end_time"
                  value={new Date(this.state.sunday_end_time)}
                  onChange={date =>
                    this.inputDatetimeHandler('sunday_end_time', date)
                  }
                />
              </div>
            </div>
          </MuiPickersUtilsProvider>
          <Button
            className={classes.btn}
            variant="contained"
            color="primary"
            onClick={() => {
              this.props.next(this.state, this.props.index);
            }}
          >
            Next
          </Button>
        </div>
      </>
    );
  }
}

LeagueSetupSettings.contextType = AppContext;

LeagueSetupSettings.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LeagueSetupSettings);
