import React, { Component } from 'react';
import { withRouter } from 'react-router';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import { AppContext } from '../Context/AppContext';

class BasicCheckout extends Component {
  onToken = token => {
    const jwt = localStorage.getItem('jwt') || this.props.context.signOut();
    const options = {
      headers: {
        authorization: jwt
      }
    };

    const endpoint = '/stripe/billing';

    axios
      .post(endpoint, token)
      .then(res => {
        const index = this.context.createLeague(this.props.leagueName, (index) => {
        if (index !== -1) {
          this.props.close();
          this.props.history.push('/league/setup');
        } else {
          console.log('Error creating a new league');
        }
      });
      })
      .catch(err => {
        console.log('Error in axios call to backend', err);
      });
  };

  render() {
    return (
      <StripeCheckout
        stripeKey="pk_test_VcEhOLfFL76sBbdyEX8npTmN"
        // billingAddress
        description="Basic League"
        locale="auto"
        token={this.onToken}
        label="Create League"
        panelLabel="subscribe for $5/mo"
      />
    );
  }
}

BasicCheckout.contextType = AppContext;

export default withRouter(BasicCheckout);
