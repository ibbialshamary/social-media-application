<template>
  <div class="chatClass">
    <div id="chatApp">
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
import { mapGetters, mapState } from 'vuex';

export default {
  name: "App",
  components: {
    Chatroom
  },
  computed: {
    ...mapGetters({
      userFromMapGetters: "user",
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
    scrollToChatEnd: function() {
      let messagesContainer = document.getElementsByClassName("messages")[0];
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
      alert("Scroll Finished");
    },
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
      this.scrollToChatEnd();

    }
  },
  mounted() {
    this.username = this.userFromMapGetters.username;
    if(!this.username) {
      this.username = "Anonymous";
    }
    this.joinServer();
  },
}
</script>

<style>
</style>
