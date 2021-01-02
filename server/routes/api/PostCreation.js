const router = require('express').Router();
const Post = require('../../model/Post');
const { postValidation } = require('../../validation/validation');


/**
 * @route POST api/PostCreation/Post
 * @desc Creates a post
 * @access Public
 */

// create post
router.post('/Post', async(req, res) => {
    // validate data before user is created
    const { error } = postValidation(req.body);
    if(error) {
        return res.status(404).json({
            success: false,
            msg: 'Your ' + error.details[0].message
        });
    }


    // create new post
    const newPost = new Post({
        name: req.body.name,
        description: req.body.description,
        privacy: req.body.privacy,
        image: req.body.image,
    });
    try {
        const savedPost = await newPost.save();
        newPost.save().then(post => {
            return res.status(201).json({
                success: true,
                msg: "Post publish successful"
            });
        });
    } catch(err) {
        res.status(404).send(err);
    }
});

module.exports = router;