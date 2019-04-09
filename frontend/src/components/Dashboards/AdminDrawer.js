import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class AdminDrawer extends Component {
  render() {
    const listItems = [
      { name: 'leagueSettings', text: 'League Details' },
      { name: 'teamList', text: 'Teams' },
      { name: 'calendar', text: 'Calendar' },
      { name: 'editSchedule', text: 'Edit Schedule' },
      { name: 'cancellationRequests', text: 'Cancellation Requests' }
    ];
    return (
      <List onClick={this.props.handleClose}>
        {listItems.map((item, index) => (
          <>
            <ListItem
              button
              key={item.name}
              id={item.name}
              onClick={this.props.displayAdminContent}
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

export default AdminDrawer;
