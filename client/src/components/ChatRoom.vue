<template>
  <div class="mainChatContainer">
<!--    <br><h1 style="text-align: center;">Welcome back, {{ userFromMapGetters.username }}, here is what you have missed:</h1>-->

    <div class="chatContainer">
<!--      <div class="chatHeading">-->
<!--        <p>Welcome to your chat and chat history, the chat is deleted every 24 hours</p>-->
<!--      </div>-->
      <div class="chatClass">
        <div class="chatWindow">
          <div class="messages">
            <div class="greyMessageBubble" v-for="message in messages" v-bind:key="message.index">
              <div class="username"> {{ message.username }}: </div>
              <div class="messageText">{{ message.msg }}</div>
            </div>
          </div>
          <form class="inputContainer" v-on:submit="sendMessage">
            <input class="messageInput" type="text" v-model="msg" required>
            <button v-on:click="sendMessage" v-bind:disabled="!msg">Send Message</button>
          </form>
        </div>
      </div>
    </div>
    <div class="activeUsersContainer">
      <div class="activeUsers">
        <div class="users">
          <p>John</p>
          <p>Billy</p>
          <p>Ibbi</p>
          <p>Mo</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "chatroom",
  props: ["messages"],

  data: function() {
    return {
      msg: ""
    }
  },

  computed: {
    ...mapGetters({
      userFromMapGetters: "user",
    })
  },

  methods: {
    sendMessage: function() {
      if(!this.msg) {
        alert("Please enter a message");
        return;
      }
      this.$emit('sendMessage', this.msg);
      this.msg = "";
    }
  },
}
</script>

<style>
</style>