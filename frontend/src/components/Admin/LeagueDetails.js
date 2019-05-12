import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { AppContext } from '../Context/AppContext';

const styles = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'column',
    flexWrap: 'wrap',
    paddingTop: 30,
    // width: '98%',
    margin: '78px auto 0px auto',
    // backgroundColor: '#fff',
    backgroundColor: '#1565c0'
    // minHeight: 'calc(100vh - 153px)'
  },
  boxContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '100%',
    backgroundColor: '#1565c0',
    minHeight: 280
  },
  box: {
    boxSizing: 'border-box',
    // border: '1px solid #1565c0',
    margin: '10px',
    textAlign: 'center',
    width: '40%',
    // minWidth: 400,
    borderRadius: 9,
    padding: '10px 0 20px 0',
    // backgroundColor: '#1565c0',
    backgroundColor: 'white',
    boxShadow: '0px 15px 8px -12px #333',
    // color: '#fff',
    color: '#555',
    textShadow: '1px 1px 3px #777',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  boxTitle: {
    fontSize: '1.8rem',
    margin: '0 auto',
    width: '80%',
    paddingBottom: 5,
    borderBottom: '1px solid #ccc',
    marginBottom: 25
    // textShadow: '1px 2px 3px #111'
  },
  boxContent: {
    fontSize: '1.2rem'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '20%',
    minWidth: 180,
    backgroundColor: 'white',
    borderRadius: 6,
    boxShadow: '1px 1px 2px #333, 2px 2px 3px #1565c0cc'
  },
  time: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
    borderBottom: '1px solid darkgray',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 50,
    [theme.breakpoints.down('sm')]: {
      // border: '1px solid red',
      flexDirection: 'column',
      margin: 0,
      padding: 0,
      paddingBottom: 20
    }
  },
  days: {
    // border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    // backgroundColor: '#1565c0',
    backgroundColor: 'white',
    marginTop: 30,
    padding: '20px 0 30px 0'
    // flexGrow: 1
  },
  daysTitle: {
    fontSize: '2.5rem',
    textAlign: 'center',
    paddingBottom: 20,
    // color: '#fff',
    color: '#555',
    textShadow: '1px 2px 3px #777'
  },
  week: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingTop: 20
  },
  weekend: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingTop: 15
  },
  day: {
    // border: '1px solid red',
    borderRadius: 9,
    minWidth: 200,
    width: '18.5%',
    margin: '7px .5%',
    textAlign: 'center',
    lineHeight: '2.4rem',
    padding: '12px 0',
    // backgroundColor: 'white',
    backgroundColor: '#1565c0',
    boxShadow: '0px 15px 8px -12px #111',
    textShadow: '1px 2px 3px #111',
    // color: '#444',
    color: '#fff',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
    // width: '20%',
    // minWidth: '15%',
    // paddingLeft: 50,
    // [theme.breakpoints.down('sm')]: {
    //   width: '100%',
    //   padding: 0,
    //   textAlign: 'center'
    // }
  },
  dayTitle: {
    fontSize: '1.6rem'
  },
  dayContent: {
    fontSize: '1.2rem'
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

  componentDidMount() {
    localStorage.setItem('leagueName', this.props.league.name);
  }

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
    const labelStyle = {
      color: 'rgb(20,20,20)',
      textAlign: 'center',
      fontFamily: 'Monserrat',
      fontSize: '1.2rem'
    };
    const inputStyle = {
      color: '#333',
      fontFamily: 'Monserrat',
      fontSize: '1.2rem'
      // paddingLeft: 'calc(20%)'
      // border: '1px solid red'
    };
    return (
      <div className={classes.container}>
        <div className={classes.boxContainer}>
          <div className={classes.box}>
            <div className={classes.boxTitle}>League Name</div>
            <div className={classes.boxContent}>{name}</div>
          </div>
          <div className={classes.box}>
            <div className={classes.boxTitle}>Start Date</div>
            <div className={classes.boxContent}>
              {start_day ? pullDate(start_day) : 'No date set'}
            </div>
          </div>
          <div className={classes.box}>
            <div className={classes.boxTitle}>Number of games per team</div>
            <div className={classes.boxContent}>
              {teams_game_count || 'Not set'}
            </div>
          </div>
          <div className={classes.box}>
            <div className={classes.boxTitle}>Default Game Length</div>
            <div className={classes.boxContent}>
              {game_length ? `${game_length} hours` : 'Not set'}
            </div>
          </div>
        </div>

        <div className={classes.days}>
          <div className={classes.daysTitle}>League Hours</div>
          <div className={classes.week}>
            <div className={classes.day}>
              <div className={classes.dayTitle}>Monday</div>
              <div className={classes.dayContent}>
                {monday_start_time ? pullTime(monday_start_time) : 'Not set'} -{' '}
                {monday_end_time ? pullTime(monday_end_time) : 'Not set'}
              </div>
            </div>
            <div className={classes.day}>
              <div className={classes.dayTitle}>Tuesday</div>
              <div className={classes.dayContent}>
                {tuesday_start_time ? pullTime(tuesday_start_time) : 'Not set'}{' '}
                - {tuesday_end_time ? pullTime(tuesday_end_time) : 'Not set'}
              </div>
            </div>
            <div className={classes.day}>
              <div className={classes.dayTitle}>Wednesday</div>
              <div className={classes.dayContent}>
                {wednesday_start_time
                  ? pullTime(wednesday_start_time)
                  : 'Not set'}{' '}
                -{' '}
                {wednesday_end_time ? pullTime(wednesday_end_time) : 'Not set'}
              </div>
            </div>
            <div className={classes.day}>
              <div className={classes.dayTitle}>Thursday</div>
              <div className={classes.dayContent}>
                {thursday_start_time
                  ? pullTime(thursday_start_time)
                  : 'Not set'}{' '}
                - {thursday_end_time ? pullTime(thursday_end_time) : 'Not set'}
              </div>
            </div>
            <div className={classes.day}>
              <div className={classes.dayTitle}>Friday</div>
              <div className={classes.dayContent}>
                {friday_start_time ? pullTime(friday_start_time) : 'Not set'} -{' '}
                {friday_end_time ? pullTime(friday_end_time) : 'Not set'}
              </div>
            </div>
          </div>
          <div className={classes.weekend}>
            <div className={classes.day}>
              <div className={classes.dayTitle}>Saturday</div>
              <div className={classes.dayContent}>
                {saturday_start_time
                  ? pullTime(saturday_start_time)
                  : 'Not set'}{' '}
                - {saturday_end_time ? pullTime(saturday_end_time) : 'Not set'}
              </div>
            </div>
            <div className={classes.day}>
              <div className={classes.dayTitle}>Sunday</div>
              <div className={classes.dayContent}>
                {sunday_start_time ? pullTime(sunday_start_time) : 'Not set'} -{' '}
                {sunday_end_time ? pullTime(sunday_end_time) : 'Not set'}
              </div>
            </div>
          </div>
        </div>
      </div>
      // <form className={classes.container} noValidate autoComplete="off">
      //   <TextField
      //     id="outlined-read-only-input"
      //     label="League Name"
      //     defaultValue={name}
      //     className={classes.textField}
      //     margin="normal"
      //     InputProps={{
      //       readOnly: true,
      //       style: inputStyle
      //     }}
      //     InputLabelProps={{
      //       style: labelStyle
      //     }}
      //     variant="outlined"
      //   />

      //   <TextField
      //     id="outlined-read-only-input"
      //     label="Start Date"
      //     defaultValue={start_day ? pullDate(start_day) : 'No date set'}
      //     className={classes.textField}
      //     margin="normal"
      //     InputProps={{
      //       readOnly: true,
      //       style: inputStyle
      //     }}
      //     InputLabelProps={{
      //       style: labelStyle
      //     }}
      //     variant="outlined"
      //   />
      //   <TextField
      //     id="outlined-read-only-input"
      //     label="Number of games per team"
      //     defaultValue={teams_game_count || 'Not set'}
      //     className={classes.textField}
      //     margin="normal"
      //     InputProps={{
      //       readOnly: true,
      //       style: inputStyle
      //     }}
      //     InputLabelProps={{
      //       style: labelStyle
      //     }}
      //     variant="outlined"
      //   />
      //   <TextField
      //     id="outlined-read-only-input"
      //     label="Game Length"
      //     defaultValue={game_length ? `${game_length} hours` : 'Not set'}
      //     className={classes.textField}
      //     margin="normal"
      //     InputProps={{
      //       readOnly: true,
      //       style: inputStyle
      //     }}
      //     InputLabelProps={{
      //       style: labelStyle
      //     }}
      //     variant="outlined"
      //   />
      //   <div className={classes.time}>
      //     <p className={classes.day}>Monday</p>
      //     <TextField
      //       id="outlined-read-only-input"
      //       label="Start"
      //       defaultValue={
      //         monday_start_time ? pullTime(monday_start_time) : 'Not set'
      //       }
      //       className={classes.textField}
      //       margin="normal"
      //       InputProps={{
      //         readOnly: true,
      //         style: inputStyle
      //       }}
      //       InputLabelProps={{
      //         style: labelStyle
      //       }}
      //       variant="outlined"
      //     />
      //     <TextField
      //       id="outlined-read-only-input"
      //       label="End"
      //       defaultValue={
      //         monday_end_time ? pullTime(monday_end_time) : 'Not set'
      //       }
      //       className={classes.textField}
      //       margin="normal"
      //       InputProps={{
      //         readOnly: true,
      //         style: inputStyle
      //       }}
      //       InputLabelProps={{
      //         style: labelStyle
      //       }}
      //       variant="outlined"
      //     />
      //   </div>
      //   <div className={classes.time}>
      //     <p className={classes.day}>Tuesday</p>
      //     <TextField
      //       id="outlined-read-only-input"
      //       label="Start"
      //       defaultValue={
      //         tuesday_start_time ? pullTime(tuesday_start_time) : 'Not set'
      //       }
      //       className={classes.textField}
      //       margin="normal"
      //       InputProps={{
      //         readOnly: true,
      //         style: inputStyle
      //       }}
      //       InputLabelProps={{
      //         style: labelStyle
      //       }}
      //       variant="outlined"
      //     />
      //     <TextField
      //       id="outlined-read-only-input"
      //       label="End"
      //       defaultValue={
      //         tuesday_end_time ? pullTime(tuesday_end_time) : 'Not set'
      //       }
      //       className={classes.textField}
      //       margin="normal"
      //       InputProps={{
      //         readOnly: true,
      //         style: inputStyle
      //       }}
      //       InputLabelProps={{
      //         style: labelStyle
      //       }}
      //       variant="outlined"
      //     />
      //   </div>
      //   <div className={classes.time}>
      //     <p className={classes.day}>Wednesday</p>
      //     <TextField
      //       id="outlined-read-only-input"
      //       label="Start"
      //       defaultValue={
      //         wednesday_start_time ? pullTime(wednesday_start_time) : 'Not set'
      //       }
      //       className={classes.textField}
      //       margin="normal"
      //       InputProps={{
      //         readOnly: true,
      //         style: inputStyle
      //       }}
      //       InputLabelProps={{
      //         style: labelStyle
      //       }}
      //       variant="outlined"
      //     />
      //     <TextField
      //       id="outlined-read-only-input"
      //       label="End"
      //       defaultValue={
      //         wednesday_end_time ? pullTime(wednesday_end_time) : 'Not set'
      //       }
      //       className={classes.textField}
      //       margin="normal"
      //       InputProps={{
      //         readOnly: true,
      //         style: inputStyle
      //       }}
      //       InputLabelProps={{
      //         style: labelStyle
      //       }}
      //       variant="outlined"
      //     />
      //   </div>
      //   <div className={classes.time}>
      //     <p className={classes.day}>Thursday</p>
      //     <TextField
      //       id="outlined-read-only-input"
      //       label="Start"
      //       defaultValue={
      //         thursday_start_time ? pullTime(thursday_start_time) : 'Not set'
      //       }
      //       className={classes.textField}
      //       margin="normal"
      //       InputProps={{
      //         readOnly: true,
      //         style: inputStyle
      //       }}
      //       InputLabelProps={{
      //         style: labelStyle
      //       }}
      //       variant="outlined"
      //     />
      //     <TextField
      //       id="outlined-read-only-input"
      //       label="End"
      //       defaultValue={
      //         thursday_end_time ? pullTime(thursday_end_time) : 'Not set'
      //       }
      //       className={classes.textField}
      //       margin="normal"
      //       InputProps={{
      //         readOnly: true,
      //         style: inputStyle
      //       }}
      //       InputLabelProps={{
      //         style: labelStyle
      //       }}
      //       variant="outlined"
      //     />
      //   </div>
      //   <div className={classes.time}>
      //     <p className={classes.day}>Friday</p>
      //     <TextField
      //       id="outlined-read-only-input"
      //       label="Start"
      //       defaultValue={
      //         friday_start_time ? pullTime(friday_start_time) : 'Not set'
      //       }
      //       className={classes.textField}
      //       margin="normal"
      //       InputProps={{
      //         readOnly: true,
      //         style: inputStyle
      //       }}
      //       InputLabelProps={{
      //         style: labelStyle
      //       }}
      //       variant="outlined"
      //     />
      //     <TextField
      //       id="outlined-read-only-input"
      //       label="End"
      //       defaultValue={
      //         friday_end_time ? pullTime(friday_end_time) : 'Not set'
      //       }
      //       className={classes.textField}
      //       margin="normal"
      //       InputProps={{
      //         readOnly: true,
      //         style: inputStyle
      //       }}
      //       InputLabelProps={{
      //         style: labelStyle
      //       }}
      //       variant="outlined"
      //     />
      //   </div>
      //   <div className={classes.time}>
      //     <p className={classes.day}>Saturday</p>
      //     <TextField
      //       id="outlined-read-only-input"
      //       label="Start"
      //       defaultValue={
      //         saturday_start_time ? pullTime(saturday_start_time) : 'Not set'
      //       }
      //       className={classes.textField}
      //       margin="normal"
      //       InputProps={{
      //         readOnly: true,
      //         style: inputStyle
      //       }}
      //       InputLabelProps={{
      //         style: labelStyle
      //       }}
      //       variant="outlined"
      //     />
      //     <TextField
      //       id="outlined-read-only-input"
      //       label="End"
      //       defaultValue={
      //         saturday_end_time ? pullTime(saturday_end_time) : 'Not set'
      //       }
      //       className={classes.textField}
      //       margin="normal"
      //       InputProps={{
      //         readOnly: true,
      //         style: inputStyle
      //       }}
      //       InputLabelProps={{
      //         style: labelStyle
      //       }}
      //       variant="outlined"
      //     />
      //   </div>
      //   <div className={classes.time}>
      //     <p className={classes.day}>Sunday</p>
      //     <TextField
      //       id="outlined-read-only-input"
      //       label="Start"
      //       defaultValue={
      //         sunday_start_time ? pullTime(sunday_start_time) : 'Not set'
      //       }
      //       className={classes.textField}
      //       margin="normal"
      //       InputProps={{
      //         readOnly: true,
      //         style: inputStyle
      //       }}
      //       InputLabelProps={{
      //         style: labelStyle
      //       }}
      //       variant="outlined"
      //     />
      //     <TextField
      //       id="outlined-read-only-input"
      //       label="End"
      //       defaultValue={
      //         sunday_end_time ? pullTime(sunday_end_time) : 'Not set'
      //       }
      //       className={classes.textField}
      //       margin="normal"
      //       InputProps={{
      //         readOnly: true,
      //         style: inputStyle
      //       }}
      //       InputLabelProps={{
      //         style: labelStyle
      //       }}
      //       variant="outlined"
      //     />
      //   </div>
      // </form>
    );
  }
}

LeagueDetails.contextType = AppContext;

LeagueDetails.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LeagueDetails);
