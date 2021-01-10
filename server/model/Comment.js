const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create post schema
const commentSchema = new Schema({
    comment: {
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
    poster: {
        type: String,
        required: true,
    },
    postId: {
        type: String,
        required: true,
    }
});

module.exports = SingleComment = mongoose.model('comments', commentSchema);