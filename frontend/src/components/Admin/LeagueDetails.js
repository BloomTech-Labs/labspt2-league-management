import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { AppContext } from '../Context/AppContext';

const styles = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    backgroundColor: '#eeeeee'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '20%',
    minWidth: 200
  },
  time: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
    borderBottom: '1px solid darkgray',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 50
  },
  day: {
    width: '20%',
    minWidth: '15%',
    paddingLeft: 50
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});

const pullTime = datetime => {
  const time = datetime.substr(16, 5);
  if (time.substr(0, 2) > 12) {
    return `${time.substr(0, 2) - 12}:${time.substr(3, 2)} PM`;
  } else {
    if (time.substr(0, 2) > 9) {
      return `${time.substr(0, 2)}:${time.substr(3, 2)} AM`;
    }
    return `${time.substr(1, 1)}:${time.substr(3, 2)} AM`;
  }
};

const pullDate = datetime => {
  return datetime.substr(4, 11);
};

class LeagueDetails extends React.Component {
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    const {
      name,
      start_day,
      teams_game_count,
      game_length,
      monday_start_time,
      monday_end_time,
      tuesday_start_time,
      tuesday_end_time,
      wednesday_start_time,
      wednesday_end_time,
      thursday_start_time,
      thursday_end_time,
      friday_start_time,
      friday_end_time,
      saturday_start_time,
      saturday_end_time,
      sunday_start_time,
      sunday_end_time
    } = this.props.league;
    console.log(this.context);
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-read-only-input"
          label="League Name"
          defaultValue={name}
          className={classes.textField}
          margin="normal"
          InputProps={{
            readOnly: true
          }}
          variant="outlined"
        />

        <TextField
          id="outlined-read-only-input"
          label="Start Date"
          defaultValue={start_day ? pullDate(start_day) : 'No date set'}
          className={classes.textField}
          margin="normal"
          InputProps={{
            readOnly: true
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-read-only-input"
          label="Number of games per team"
          defaultValue={teams_game_count || 'Not set'}
          className={classes.textField}
          margin="normal"
          InputProps={{
            readOnly: true
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-read-only-input"
          label="Game Length"
          defaultValue={game_length ? `${game_length} hours` : 'Not set'}
          className={classes.textField}
          margin="normal"
          InputProps={{
            readOnly: true
          }}
          variant="outlined"
        />
        <div className={classes.time}>
          <p className={classes.day}>Monday</p>
          <TextField
            id="outlined-read-only-input"
            label="Start"
            defaultValue={
              monday_start_time ? pullTime(monday_start_time) : 'Not set'
            }
            className={classes.textField}
            margin="normal"
            InputProps={{
              readOnly: true
            }}
            variant="outlined"
          />
          <TextField
            id="outlined-read-only-input"
            label="End"
            defaultValue={
              monday_end_time ? pullTime(monday_end_time) : 'Not set'
            }
            className={classes.textField}
            margin="normal"
            InputProps={{
              readOnly: true
            }}
            variant="outlined"
          />
        </div>
        <div className={classes.time}>
          <p className={classes.day}>Tuesday</p>
          <TextField
            id="outlined-read-only-input"
            label="Start"
            defaultValue={
              tuesday_start_time ? pullTime(tuesday_start_time) : 'Not set'
            }
            className={classes.textField}
            margin="normal"
            InputProps={{
              readOnly: true
            }}
            variant="outlined"
          />
          <TextField
            id="outlined-read-only-input"
            label="End"
            defaultValue={
              tuesday_end_time ? pullTime(tuesday_end_time) : 'Not set'
            }
            className={classes.textField}
            margin="normal"
            InputProps={{
              readOnly: true
            }}
            variant="outlined"
          />
        </div>
        <div className={classes.time}>
          <p className={classes.day}>Wednesday</p>
          <TextField
            id="outlined-read-only-input"
            label="Start"
            defaultValue={
              wednesday_start_time ? pullTime(wednesday_start_time) : 'Not set'
            }
            className={classes.textField}
            margin="normal"
            InputProps={{
              readOnly: true
            }}
            variant="outlined"
          />
          <TextField
            id="outlined-read-only-input"
            label="End"
            defaultValue={
              wednesday_end_time ? pullTime(wednesday_end_time) : 'Not set'
            }
            className={classes.textField}
            margin="normal"
            InputProps={{
              readOnly: true
            }}
            variant="outlined"
          />
        </div>
        <div className={classes.time}>
          <p className={classes.day}>Thursday</p>
          <TextField
            id="outlined-read-only-input"
            label="Start"
            defaultValue={
              thursday_start_time ? pullTime(thursday_start_time) : 'Not set'
            }
            className={classes.textField}
            margin="normal"
            InputProps={{
              readOnly: true
            }}
            variant="outlined"
          />
          <TextField
            id="outlined-read-only-input"
            label="End"
            defaultValue={
              thursday_end_time ? pullTime(thursday_end_time) : 'Not set'
            }
            className={classes.textField}
            margin="normal"
            InputProps={{
              readOnly: true
            }}
            variant="outlined"
          />
        </div>
        <div className={classes.time}>
          <p className={classes.day}>Friday</p>
          <TextField
            id="outlined-read-only-input"
            label="Start"
            defaultValue={
              friday_start_time ? pullTime(friday_start_time) : 'Not set'
            }
            className={classes.textField}
            margin="normal"
            InputProps={{
              readOnly: true
            }}
            variant="outlined"
          />
          <TextField
            id="outlined-read-only-input"
            label="End"
            defaultValue={
              friday_end_time ? pullTime(friday_end_time) : 'Not set'
            }
            className={classes.textField}
            margin="normal"
            InputProps={{
              readOnly: true
            }}
            variant="outlined"
          />
        </div>
        <div className={classes.time}>
          <p className={classes.day}>Saturday</p>
          <TextField
            id="outlined-read-only-input"
            label="Start"
            defaultValue={
              saturday_start_time ? pullTime(saturday_start_time) : 'Not set'
            }
            className={classes.textField}
            margin="normal"
            InputProps={{
              readOnly: true
            }}
            variant="outlined"
          />
          <TextField
            id="outlined-read-only-input"
            label="End"
            defaultValue={
              saturday_end_time ? pullTime(saturday_end_time) : 'Not set'
            }
            className={classes.textField}
            margin="normal"
            InputProps={{
              readOnly: true
            }}
            variant="outlined"
          />
        </div>
        <div className={classes.time}>
          <p className={classes.day}>Sunday</p>
          <TextField
            id="outlined-read-only-input"
            label="Start"
            defaultValue={
              sunday_start_time ? pullTime(sunday_start_time) : 'Not set'
            }
            className={classes.textField}
            margin="normal"
            InputProps={{
              readOnly: true
            }}
            variant="outlined"
          />
          <TextField
            id="outlined-read-only-input"
            label="End"
            defaultValue={
              sunday_end_time ? pullTime(sunday_end_time) : 'Not set'
            }
            className={classes.textField}
            margin="normal"
            InputProps={{
              readOnly: true
            }}
            variant="outlined"
          />
        </div>
      </form>
    );
  }
}

LeagueDetails.contextType = AppContext;

LeagueDetails.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LeagueDetails);
