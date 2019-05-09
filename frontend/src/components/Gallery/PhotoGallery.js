import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from './tileData';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
  },
  gridList: {
    width: '95%',
    height: 900,
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  gridListSm: {
    width: '98%',
    height: 1020,
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }
});

function PhotoGallery(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={445} className={classes.gridList} cols={6}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
      <GridList cellHeight={250} className={classes.gridListSm} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

PhotoGallery.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PhotoGallery);
