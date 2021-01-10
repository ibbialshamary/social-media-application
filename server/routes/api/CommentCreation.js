const express = require('express');
const router = express.Router();
const Comment = require('../../model/Comment');
const { commentValidation } = require('../../validation/validation');

// create post
router.post('/comment', async(req, res) => {
    // validate data before user is created
    const { error } = commentValidation(req.body);
    if(error) {
        return res.status(404).json({
            success: false,
            msg: 'Your ' + error.details[0].message
        });
    }


    // create new post, get the Post schema from the model
    const newComment = new Comment({
        comment: req.body.comment,
        upvotes: req.body.upvotes,
        downvotes: req.body.downvotes,
        poster: req.body.poster,
        postId: req.body.postId
    });
    try {
        newComment.save().then(comment => {
            console.log(comment);
            return res.status(201).json({
                success: true,
                msg: "Comment added successfully",
                comment: comment
            });
        });
    } catch(err) {
        res.status(404).send(err);
    }
})

// get post
router.get('/comment',  async (req, res) => {
    const comments = await Comment.find();
    return res.json({
        comments: comments
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