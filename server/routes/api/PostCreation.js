const express = require('express');
const router = express.Router();
const Post = require('../../model/Post');
const { postValidation } = require('../../validation/validation');


/**
 * @route POST api/PostCreation/Post
 * @desc Creates a post
 * @access Public
 */

// create post
router.post('/post', async(req, res) => {
    // validate data before user is created
    const { error } = postValidation(req.body);
    if(error) {
        return res.status(404).json({
            success: false,
            msg: 'Your ' + error.details[0].message
        });
    }


    // create new post, get the Post schema from the model
    const newPost = new Post({
        name: req.body.name,
        description: req.body.description,
        privacy: req.body.privacy,
        image: req.body.image,
    });
    try {
        newPost.save().then(post => {
            console.log(post);
            return res.status(201).json({
                success: true,
                msg: "Post published successfully",
                post: post
            });
        });
    } catch(err) {
        res.status(404).send(err);
    }
})

/**
 * @route POST api/PostCreation/Profile
 * @desc Return the post's data
 * @access Private
 */

// get post
router.get('/post',  async (req, res) => {
    const posts = await Post.find();
    return res.json({
        posts: posts
    });
})

// get specific post
router.get('/post/id/:id',  async (req, res) => {
    try {
        const post = await Post.findById({_id: req.params.id})
        return res.json({
            post: post
        });
    } catch(err) {
        res.status(404).send(err.message);
    }
})

// delete post
router.delete('/post/id/:id',  async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete({_id: req.params.id})
        return res.json({
            id: post._id,
            name: post.name,
            status: "Successfully deleted"
        });
    } catch(err) {
        res.status(404).send(err.message);
    }
})

// update or patch post
router.patch('/post/id/:id', async (req, res) => {
    try {
        const post = await Post.updateOne({_id: req.params.id}, {$set: req.body});
        return res.json({
            status: "Successfully patched"
        });
    } catch(err) {
        res.status(404).send(err.message);
    }
})

// get random post
router.get('/post/random', async(req, res) => {
    try {
        const count = await Post.countDocuments();
        const random = Math.floor(Math.random() * count);
        const post = await Post.findOne().skip(random);
        return res.json({
            post: post
        });
    } catch(err) {
        res.status(404).send(err.message);
    }
})

module.exports = router;