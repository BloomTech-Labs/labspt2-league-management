const stripe = require('stripe')('sk_test_uWgz9Sbmlfqa3raEdwOuSgLf');
const express = require('express');

const router = express.Router();

router.post('/billing', function(req, res, next) {
  const stripeToken = req.body;
  //   console.log('request body', req.body);

  stripe.customers.create(
    {
      description: `Customer with email: ${stripeToken.email}`,
      email: stripeToken.email,
      source: stripeToken.id
    },
    function(err, customer) {
      if (err) {
        res.send({
          success: false,
          message: 'Error creating customer'
        });
      } else {
        const { id } = customer;
        // console.log('Customer', customer);

        stripe.subscriptions.create(
          {
            customer: customer.id,
            items: [
              {
                plan: 'plan_EjN6h4dqihF32L'
              }
            ]
          },
          function(err, subscription) {
            if (err) {
              res.send({
                success: false,
                message: 'Error adding subscription'
              });
            } else {
              res.send({
                success: true,
                message: 'Success',
                subscription_id: subscription.id
              });
            }
          }
        );
      }
    }
  );
});

module.exports = router;
