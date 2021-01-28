const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create user schema
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    username: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    image: {
        type: String,
        required: true
    },
    biography: {
        type: String
    },
    location: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: "Post"
    }],
    followers: [{
        type: String
    }],
    following: [{
        type: String
    }],
});

module.exports = User = mongoose.model('users', userSchema);