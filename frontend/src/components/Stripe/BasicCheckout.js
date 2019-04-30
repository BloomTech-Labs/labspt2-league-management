import React, { Component } from 'react';
import { withRouter } from 'react-router';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { AppContext } from '../Context/AppContext';

class BasicCheckout extends Component {
  state = {
    created: false
  };
  onToken = token => {
    const league = {
      name: null,
      admin_user_id: null
    };
    const jwt = localStorage.getItem('jwt') || this.props.context.signOut();
    const options = {
      headers: {
        authorization: jwt
      }
    };
    // console.log('basic token', token);
    // const endpoint =
    //   process.env.NODE_ENV === 'production'
    //     ? 'https://league-management.herokuapp.com'
    //     : 'http://localhost:4000';

    axios
      .post(`/stripe/billing`, token)
      .then(res => {
        // console.log(res.data);
        // axios.post to create the new league {this.props.leagueName}
        this.context.createLeague(this.props.leagueName, index => {
          if (index !== -1) {
            this.props.close();
            this.props.history.push({
              pathname: '/dashboard/admin/setup',
              state: { leagueIndex: index }
            });
          } else {
            console.log('Error creating a new league');
          }
          // axios
          //   .post(
          //     `/leagues`,
          //     {
          //       ...league,
          //       name: this.props.leagueName
          //     },
          //     options
          //   )
          //   .then(res => {
          //     this.props.close();
          //     this.setState({ created: true });
          //     // console.log(res);
          //     // window.location.reload();
          //   })
          //   .catch(err => {
          //     console.log('Error creating a new league', err);
          //   });
        });
        // .then(res => {
        //   // this.setState({ created: true });
        // })
      })
      .catch(err => {
        console.log('Error in axios call to backend', err);
      });
  };

  render() {
    // if (this.state.created) {
    //   return <Redirect to="/dashboard/admin/setup" />;
    // }
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
