import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
  card: {
    maxWidth: '325px',
    border: '2px solid lightgrey',
    width: '45%',
    borderRadius: '4%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    height: '300px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  container: {
    width: '90%'
  },
  title: {
    fontSize: '1.6rem',
    display: 'flex',
    justifyContent: 'space-between'
  },
  pos: {
    border: '1px solid black',
    marginTop: '8px',
    width: '65%',
    maxWidth: '180px',
    borderRadius: '8%',
    marginBottom: '12px',
    padding: '10px'
  },
  upcoming: {
    border: '1px solid black',
    marginTop: '8px',
    width: '90%',
    borderRadius: '8%',
    marginBottom: '7px',
    padding: '10px'
  },
  button: {
    border: '1px solid lightgrey',
    borderRadius: '6%'
  },
  p: {
    fontSize: 13
  }
};

function TeamCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent className={classes.container}>
        <Typography className={classes.title}>
          Team name
          <div>
            <EditIcon />
            <DeleteIcon />
          </div>
        </Typography>
        <Typography className={classes.p}>
          Email
          <br />
          Phone #
        </Typography>
        <Typography className={classes.pos}>
          Record:
          <br />
          Wins: Team-Wins
          <br />
          Losses: Team-Losses
        </Typography>
        <Typography className={classes.upcoming}>
          Upcoming:
          <br />
          July 20th 7pm vs Woodside Warriors
          <br />
          Game 2
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="large" className={classes.button}>
          Learn More
        </Button>
      </CardActions> */}
      {/* Possible Button Code */}
    </Card>
  );
}

TeamCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TeamCard);
