import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import CreateLeagueForm from './CreateLeagueForm';

const styles = {
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  card: {
    width: '20%',
    minWidth: 250,
    margin: '0 1%',
    marginBottom: 15
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  button: {
    width: '70%',
    margin: '0 auto',
    border: '1px solid #eee'
    // backgroundColor: '#42b6ff'
  }
};

function ChooseLeague(props) {
  const { classes } = props;

  return (
    <div className={classes.cardContainer}>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            variant="h5"
            component="h2"
            // className={classes.title}
            // color="textSecondary"
            gutterBottom
          >
            Basic League
          </Typography>
          <Typography variant="h5" component="p">
            League Description
          </Typography>
        </CardContent>
        <CardActions>
          <CreateLeagueForm leagueType="basic" />
          {/* <Button className={classes.button}>Select</Button> */}
        </CardActions>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            variant="h5"
            component="h2"
            // className={classes.title}
            // color="textSecondary"
            gutterBottom
          >
            Premium League
          </Typography>
          <Typography variant="h5" component="p">
            League Description
          </Typography>
        </CardContent>
        <CardActions>
          <CreateLeagueForm leagueType="premium" />
          {/* <Button className={classes.button}>Select</Button> */}
        </CardActions>
      </Card>
    </div>
  );
}

ChooseLeague.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ChooseLeague);
