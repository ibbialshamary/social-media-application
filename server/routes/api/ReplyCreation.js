const express = require('express');
const router = express.Router();
const Comment = require('../../model/Comment');
const Reply = require('../../model/Reply');
const { replyValidation } = require("../../validation/validation");

// get reply
router.get("/reply", async(req, res) => {
    try {
        const replies = await Reply.find().sort({date: -1});
        return res.json({
            replies: replies
        });
    } catch(err) {
        res.status(404).send(err.message);
    }
})

// get all replies of certain comment id
router.get("/reply/commentId/:id", async(req, res) => {
    try {
        const replies = await Reply.find({commentId: {$eq: req.params.id}}).sort({date: -1});
        return res.json({
            replies: replies
        });
    } catch(err) {
        res.status(404).send(err.message);
    }
})

// delete reply
router.delete('/reply/replyId/:id',  async (req, res) => {
    try {
        const post = await Reply.findByIdAndDelete({_id: req.params.id})
        return res.json({
            id: post._id,
            name: post.name,
            status: "Successfully deleted"
        });
    } catch(err) {
        res.status(404).send(err.message);
    }
})

// create reply
router.post('/reply/commentId/:id', async(req, res) => {
    // validate data before user is created
    const { error } = replyValidation(req.body);
    if(error) {
        return res.status(404).json({
            success: false,
            msg: 'Your ' + error.details[0].message
        });
    }

    // find the comment so we can pass it as a comment's postId
    const comment = await Comment.findById({_id: req.params.id})

    // create new post, get the Post schema from the model
    const newReply = new Reply({
        reply: req.body.reply,
        upvotes: req.body.upvotes,
        downvotes: req.body.downvotes,
        ownerName: req.body.ownerName,
        ownerId: req.body.ownerId,
        // add the post id request parameter to the postId field
        commentId: comment._id
    });
    try {
        // // push the users that have already rated so they can be limited 1 rating at a time
        // newComment.usersRated.push(req.body.userRated);
        // save the new comment
        newReply.save().then(reply => {
            console.log(reply);
            return res.status(201).json({
                success: true,
                msg: "Reply added successfully",
                reply: reply
            });
        });

        // now push the comment to the post so we that the one to many relationship is maintained
        comment.replies.push(newReply);
        await comment.save();
    } catch(err) {
        res.status(404).send(err);
    }
})

module.exports = router;