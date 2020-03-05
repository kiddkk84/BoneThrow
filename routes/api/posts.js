const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Post model
const Post = require('../../models/Post');

// Validation

const validatePostInput = require('../../validation/post');


// @route GET api/posts/test
// @desc Tests post route
// @access Public

router.get('/test', (req, res) => res.json({ msg: 'Posts Works' }));



// @route POST api/posts
// @desc Create post
// @access Private

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    // Check Validation
    if (!isValid) {
        // if any errors, send 400 with errors object
        return res.status(400).json(errors);
    }
    
    const newPost = new Post({
        text: req.body.text,
        handle: req.body.handle,
        user: req.user.id
    });
    newPost.save().then(post => res.json(post)); 
});

router.get("/", (req, res) => res.json({ msg: "Posts Works" }));

module.exports = router;