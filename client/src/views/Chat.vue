<template>
  <div id="app">
    <div class="chatClass">
      <div class="header">
        <h1>Chat Room</h1>
        <p class="username">Username: {{ user.username }}</p>
        <p class="online">Online: {{ users.length}}</p>
      </div>
      <Chatroom v-bind:messages="messages" v-on:sendMessage="this.sendMessage"></Chatroom>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";
import Chatroom from "@/components/ChatRoom";
import { mapGetters, mapState } from 'vuex'

export default {
  name: "App",
  components: {
    Chatroom
  },
  computed: {
    ...mapGetters({
      user: "user"
    })
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
        this.socket.emit("newUser", this.user.username);
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
    if(!this.user) {
      this.user.username = "Uninvited Guest";
    }

    this.joinServer();
  },
}
</script>

