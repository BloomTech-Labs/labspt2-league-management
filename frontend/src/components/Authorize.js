import React from 'react';
import queryString from 'query-string';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';
import { AppContext } from './Context/AppContext';

class Authorize extends React.Component {
  render() {
    const parsed = queryString.parse(this.props.location.search);
    if ('token' in parsed) {
      localStorage.setItem('jwt', parsed.token);
      this.context.signin();
      return <Redirect to="/dashboard" />;
    } else {
      return <Redirect to="/" />;
    }
  }
}

Authorize.contextType = AppContext;

export default withRouter(Authorize);
