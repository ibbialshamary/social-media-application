<template>
  <div class="chatClass">
    <div class="chatWindow">
      <div class="messages">
        <div class="message" v-for="message in messages" v-bind:key="message.index">
          <div class="username"> {{ message.username }}: </div>
          <div class="messageText">{{ message.msg }}</div>
        </div>
      </div>
      <form class="inputContainer" v-on:submit="sendMessage">
        <input type="text" v-model="msg">
        <button v-on:click="sendMessage" v-bind:disabled="!msg">Send Message</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "chatroom",
  props: ["messages"],

  data: function() {
    return {
      msg: ""
    }
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