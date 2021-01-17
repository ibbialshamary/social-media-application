const express = require('express');
const router = express.Router();
const Comment = require('../../model/Comment');
const Post = require('../../model/Post');
const { commentValidation } = require('../../validation/validation');

// get post
router.get("/comment", async(req, res) => {
    try {
        const comments = await Comment.find().sort({date: -1});
        return res.json({
            comments: comments
        });
    } catch(err) {
        res.status(404).send(err.message);
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
        const comment = await Comment.findOneAndUpdate({_id: req.params.id}, {$set: req.body});
        return res.json({
            status: "Successfully patched",
            comment: comment
        });
    } catch(err) {
        res.status(404).send(err.message);
    }
})

// create post
router.post('/:id/comment', async(req, res) => {
    // validate data before user is created
    const { error } = commentValidation(req.body);
    if(error) {
        return res.status(404).json({
            success: false,
            msg: 'Your ' + error.details[0].message
        });
    }

    // find the post so we can pass it as a comment's postId
    const post = await Post.findById({_id: req.params.id})

    // create new post, get the Post schema from the model
    const newComment = new Comment({
        comment: req.body.comment,
        upvotes: req.body.upvotes,
        downvotes: req.body.downvotes,
        // add the post id request parameter to the postId field
        postId: post._id,
        ownerName: post.ownerName,
        ownerId: post.ownerId
    });
    try {
        // // push the users that have already rated so they can be limited 1 rating at a time
        // newComment.usersRated.push(req.body.userRated);
        // save the new comment
        newComment.save().then(comment => {
            console.log(comment);
            return res.status(201).json({
                success: true,
                msg: "Comment added successfully",
                comment: comment
            });
        });

        // now push the comment to the post so we that the one to many relationship is maintained
        post.comments.push(newComment);
        await post.save();
    } catch(err) {
        res.status(404).send(err);
    }
})



module.exports = router;