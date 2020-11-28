const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');

// initialise the app
const app = express();
// chat variables
const http = require("http").Server(app);
const io = require('socket.io')(http);

// middlewares
// form data middleware
app.use(bodyParser.urlencoded({
    extended: false
}));

// json body middleware
app.use(bodyParser.json());

// cors middleware
app.use(cors());

// seting up the static directory
app.use(express.static(path.join(__dirname, 'public')));

// use the passport middleware
app.use(passport.initialize());
// bring in the passport strategy
require('./config/passport')(passport);

// bring in database config and connect with database
const databaseKey = require('./config/keys').mongoURI;
mongoose.connect(databaseKey, {
    useNewUrlParser: true
}).then(() => {
    console.log(`Database connection successful, using: ${databaseKey}`)
}).catch(err => {
    console.log(`Failed to connect to database, error: ${err}`)
});

// bring in the users route
const usersConst = require('./routes/api/UserCreation');
app.use('/api/UserCreation', usersConst);


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

// chat goes here
let messages = [];
let users = [];
let index = 0;

io.on("connection", socket => {
    // log in
    socket.emit("loggedIn", {
        users: users.map(s => s.username),
        messages: messages
    })
    // connect
    socket.on("newUser", username => {
        socket.username = username;
        console.log(`${socket.username} has entered the party`);

        users.push(socket);
        io.emit("userOnline", socket.username);
    });

    socket.on("msg", msg => {
        let message = {
            index: index,
            username: socket.username,
            msg: msg
        }

        messages.push(message);
        io.emit("msg", message);
        index++;
    });

    // disconnect
    socket.on("disconnect", () => {
        console.log(`${socket.username} has left the party`);
        // tell other users that this user has left
        // for use in front end
        io.emit("userLeft", socket.username);
        users.splice(users.indexOf(socket), 1);
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});