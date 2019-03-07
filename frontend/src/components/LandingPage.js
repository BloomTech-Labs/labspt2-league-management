import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
  render() {
    const { username, loggedIn } = this.props.context.state;
    const { login } = this.props.context;
    if (!loggedIn) {
      console.log(this.props.data);
      return (
        <>
          <div>App Name</div>
          <button onClick={login}>Sign In</button>
          <div>Landing Page Content</div>
        </>
      );
    }
    return (
      <>
        <div>App Name</div>
        <div>{username}</div>
        <Link to="/dashboard">My Account</Link>{' '}
        {/*Link to home dashboard component*/}
        <div>Landing Page Content</div>
      </>
    );
  }
}

export default LandingPage;
