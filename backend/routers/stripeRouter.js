const stripe = require('stripe')(sk_test_uWgz9Sbmlfqa3raEdwOuSgLf);
const express = require('express');

router.post('/billing/stripe', function (req, res, next) {
    const stripeToken = req.body.stripeToken;

    stripe.customers.create({
        email: stripeToken.email,
        source: token,
    }, function(err, customer) {
        if (err){
            res.send({
                success:false,
                message: 'Error'
            })
        } else {
            const { id } = customer;

            stripe.subscriptions.create({
                customer: '',
                items: [
                    {
                        plan: 'Basic League'
                    },
                ],
            }, function(err, subscription) {
                if (err){
                    res.send({
                        success:false,
                        message: 'Error'
                    })
                } else {
                    res.send({
                        success: true,
                        message: 'Success'
                    })
        
            }
            })
        }
    
    })


})

module.exports = router;