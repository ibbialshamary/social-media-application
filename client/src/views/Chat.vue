<template>
  <div id="app">
    <div class="chatClass">
      <div class="header">
        <h1>Chat Room</h1>
        <p class="username">Username: {{ username }}</p>
        <p class="online">Online: {{ users.length}}</p>
      </div>
      <Chatroom v-bind:messages="messages" v-on:sendMessage="this.sendMessage"></Chatroom>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";
import Chatroom from "@/components/ChatRoom";

export default {
  name: "App",
  components: {
    Chatroom
  },
  data: function() {
    return {
      username: "",
      socket: io("http://localhost:3000"),
      messages: [],
      users: []
    }
  },
  methods: {
    joinServer: function() {
      this.socket.on('loggedIn', data => {
        this.messages = data.messages;
        this.users = data.users;
        this.socket.emit("newUser", this.username);
      });
      this.listen();
    },
    listen: function() {
      this.socket.on('userOnline', user => {
        this.users.push(user);
      });
      this.socket.on('userLeft', user => {
        this.users.splice(this.users.indexOf(user), 1);
      });
      this.socket.on('msg', message => {
        this.messages.push(message);
      });
    },
    sendMessage: function(message) {
      this.socket.emit('msg', message);
    }
  },
  mounted() {
    this.username = prompt("What is your username?", "Anonymous");

    if(!this.username) {
      this.username = "Anonymous";
    }

    this.joinServer();
  },
}
</script>

