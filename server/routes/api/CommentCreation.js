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

// get a specific post's comments
router.get('/comment/id/:id',  async (req, res) => {
    try {
        const comments = await Comment.find({postId: {$eq: req.params.id}}).sort({date: -1});
        return res.json({
            comments: comments
        });
    } catch(err) {
        res.status(404).send(err.message);
    }
})

// delete comment
router.delete('/comment/id/:id',  async (req, res) => {
    try {
        const post = await Comment.findByIdAndDelete({_id: req.params.id})
        return res.json({
            id: post._id,
            name: post.name,
            status: "Successfully deleted"
        });
    } catch(err) {
        res.status(404).send(err.message);
    }
})

// update or patch comment
router.patch('/comment/id/:id', async (req, res) => {
    try {
        const post = await Comment.updateOne({_id: req.params.id}, {$set: req.body});
        return res.json({
            status: "Successfully patched"
        });
    } catch(err) {
        res.status(404).send(err.message);
    }
})

module.exports = router;