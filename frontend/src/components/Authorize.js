import React from 'react';
import queryString from 'query-string';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';

class Authorize extends React.Component {
    render() {
        const parsed = queryString.parse(this.props.location.search);
        if (parsed) {
            localStorage.setItem('jwt', parsed.token);
            this.props.signin();
            return <Redirect to="/dashboard" />
        } else {
            return <Redirect to="/" />
        }
    }
}

export default withRouter(Authorize);
