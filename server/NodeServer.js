const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');

// initialise the app
const app = express();
// chat variables

// middlewares
// form data middleware
app.use(bodyParser.urlencoded({
    extended: false
}));

// json body middleware
app.use(bodyParser.json());

// cors middleware
app.use(cors());

// setting up the static directory
app.use(express.static(path.join(__dirname, 'public')));

// use the passport middleware
app.use(passport.initialize());
// bring in the passport strategy
require('./config/passport')(passport);

// bring in database config and connect with database
// not currently using
// const databaseKey = require('./config/keys').mongoURI;
mongoose.connect('mongodb://localhost:27017/SocialMediaApplication', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log(`Database connection successful`)
}).catch(err => {
    console.log(`Failed to connect to database, error: ${err}`)
});



// bring in the users route
const usersConst = require('./routes/api/UserCreation');
app.use('/', usersConst);

// bring in the posts route, can be found under routers/api/PostCreation
const postConst = require('./routes/api/PostCreation');
app.use('/', postConst);

// bring in the posts route, can be found under routers/api/PostCreation
const commentConst = require('./routes/api/CommentCreation');
app.use('/', commentConst);


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});