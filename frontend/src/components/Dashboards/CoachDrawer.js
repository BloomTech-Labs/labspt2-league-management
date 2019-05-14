import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class CoachDrawer extends Component {
  render() {
    return (
      <>
        <div
          style={{
            // border: '1px solid red',
            margin: '0px 0px -10px 0px',
            textAlign: 'center',
            padding: '15px',
            color: '#fff',
            backgroundColor: '#333',
            fontSize: '1.3rem'
          }}
        >
          {localStorage.getItem('teamName')}
        </div>
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
      </>
    );
  }
}

export default CoachDrawer;
