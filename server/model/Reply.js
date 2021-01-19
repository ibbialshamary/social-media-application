const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create post schema
const replySchema = new Schema({
    reply: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    upvotes: {
        type: Number,
        required: true
    },
    downvotes: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    usersRated: [{
        type: String
    }],
    postId: {
        type: Schema.Types.ObjectId,
        ref: "Post"
    },
    ownerId: {
        type: String
    },
    ownerName: {
        type: String
    },
    commentId: {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }
});

module.exports = Reply = mongoose.model('replies', replySchema);