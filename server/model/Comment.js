const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create post schema
const commentSchema = new Schema({
    comment: {
        type: String,
        required: true,
        max: 255,
        min: 20
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
    }
});

module.exports = SingleComment = mongoose.model('comments', commentSchema);