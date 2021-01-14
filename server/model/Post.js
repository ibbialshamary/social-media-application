const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create post schema
const postSchema = new Schema({
    name: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    description: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    date: {
        type: Date,
        default: Date.now
    },
    privacy: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    // get rid of this at later stage of development
    poster: {
        type: String,
        required: true,
    },
    comment: {
        commentId: []
    }

});

module.exports = Post = mongoose.model('posts', postSchema);