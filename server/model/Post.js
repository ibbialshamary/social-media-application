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
    image: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    privacy: {
        type: String,
        required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
});

module.exports = Post = mongoose.model('posts', postSchema);