import React, { Component } from 'react';
import { AppContext } from '../Context/AppContext';

class SetupLeagueForm extends Component {
  state = {};

  componentDidMount() {
    console.log(this.context);
  }

  render() {
    return <div />;
  }
}

SetupLeagueForm.contextType = AppContext;

export default SetupLeagueForm;
