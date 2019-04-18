import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class CoachDrawer extends Component {
  render() {
    return (
      <List onClick={this.props.handleClose}>
        {[
          { name: 'calendar', text: 'Calendar' },
          { name: 'cancellations', text: 'Cancellations' }
        ].map((item, index) => (
          <>
            <ListItem
              button
              key={item.name}
              id={item.name}
              onClick={this.props.displayCoachContent}
            >
              <ListItemText primary={item.text} />
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    );
  }
}

export default CoachDrawer;
