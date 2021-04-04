const cloudMongoURI = "mongodb+srv://ibbialshamary:ibrahim@cluster0.sesfo.mongodb.net/SocialMediaApplication?retryWrites=true&w=majority";
const localMongoURI = "mongodb://localhost:27017/SocialMediaApplication";

if (process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: cloudMongoURI,
        secret: 'password'
    }
} else {
    module.exports = {
        mongoURI: cloudMongoURI,
        secret: 'password'
    }
}
