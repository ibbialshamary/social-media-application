const app = require("express")();
const http = require("http").Server(app);
const io = require('socket.io')(http, {
    cors: {
        origin: '*',
    }
});

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
        socket.broadcast.emit("msg", message);
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

http.listen(process.env.PORT || 3000, () => {
    console.log("Chat started on port %s", process.env.PORT || 3000);
})