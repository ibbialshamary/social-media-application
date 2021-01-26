const express = require('express');
const router = express.Router();
const Post = require('../../model/Post');
const User = require('../../model/User');
const { postValidation } = require('../../validation/validation');


// create post
router.post('/post/user-id/:id', async(req, res) => {
    // validate data before user is created
    const { error } = postValidation(req.body);
    if(error) {
        return res.status(404).json({
            success: false,
            msg: 'Your ' + error.details[0].message
        });
    }

    // find the user so we can pass it as a post's owner
    const user = await User.findById({_id: req.params.id})

    // create new post, get the Post schema from the model
    const newPost = new Post({
        name: req.body.name,
        description: req.body.description,
        privacy: req.body.privacy,
        image: req.body.image,
        // add the user id request parameter to the owner field
        ownerId: user._id,
        ownerName: user.username
    });

    try {
        // save the post
        newPost.save().then(post => {
            console.log(post);
            return res.status(201).json({
                success: true,
                msg: "Post published successfully",
                post: post
            });
        });

        // now push the post to the user so we that the one to many relationship is maintained
        user.posts.push(newPost);
        await user.save();
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

// get post by user id
router.get('/post/user-id/:id',  async (req, res) => {
    const posts = await Post.find({ownerId: req.params.id});
    return res.json({
        posts: posts
    });
})

// get specific post
router.get('/post/post-id/:id',  async (req, res) => {
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
router.delete('/post/post-id/:id',  async (req, res) => {
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
router.patch('/post/post-id/:id', async (req, res) => {
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