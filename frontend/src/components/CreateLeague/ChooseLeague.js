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
    fontSize: 16,
    textDecoration: 'underline'
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
  console.log(props);

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
          <Typography className={classes.title}>League Description</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            minus consequatur soluta possimus dicta quae necessitatibus minima
            consequuntur voluptatem iste dolores, amet fugit, incidunt tempore.
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
          <Typography className={classes.title}>League Description</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            minus consequatur soluta possimus dicta quae necessitatibus minima
            consequuntur voluptatem iste dolores, amet fugit, incidunt tempore.
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
