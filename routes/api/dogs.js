const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Dog = require('../../models/Dog');
const validateTweetInput = require('../../validation/tweets');

// router.get('/', (req, res) => {
//     Dog.find()
//         .sort({ date: -1 })
//         .then(dogs => res.json(dogs))
//         .catch(err => res.status(404).json({ notweetsfound: 'No tweets found' }));
// });

router.get('/user/:user_id', (req, res) => {
    Dog.find({ user: req.params.user_id })
        .sort({ date: -1 })
        .then(dogs => res.json(dogs))
        .catch(err =>
            res.status(404).json({ notweetsfound: 'No dogs found from that user' }
            )
        );
});

router.get('/:id', (req, res) => {
    Dog.findById(req.params.id)
        .then(dog => res.json(dog))
        .catch(err =>
            res.status(404).json({ notweetfound: 'No dog found with that ID' })
        );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateTweetInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newTweet = new Tweet({
            text: req.body.text,
            user: req.user.id
        });

        newTweet.save().then(tweet => res.json(tweet));
    }
);

module.exports = router;