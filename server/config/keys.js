if (process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: "mongodb+srv://ibbialshamary:ibrahim@cluster0.sesfo.mongodb.net/SocialMediaApplication?retryWrites=true&w=majority",
        localMongoURI: "mongodb://localhost:27017/SocialMediaApplication",
        secret: 'password'
    };
} else {
    module.exports = {
        mongoURI: "mongodb://localhost:27017/SocialMediaApplication",
        localMongoURI: "mongodb://localhost:27017/SocialMediaApplication",
        secret: 'password'
    };
}
