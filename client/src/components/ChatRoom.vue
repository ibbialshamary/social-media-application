<template>
  <div class="chatWindow">
    <div class="messages">
      <div class="message" v-for="message in messages" v-bind:key="message.index">
        <div class="username"><p> {{ message.username }}: </p></div>
        <div class="messageText"><p>{{ message.msg }} </p></div>
      </div>
    </div>
    <form class="inputContainer" v-on:submit="sendMessage">
      <input type="text" v-model="msg">
      <button v-on:click="sendMessage(); scrollToBottom();" v-bind:disabled="!msg">Send Message</button>
    </form>
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
      // empty out the message input
      this.msg = "";
    },
    scrollToBottom() {
      //  scroll down
      let messagesContainer = document.getElementsByClassName("chatClass")[0];
      messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
    }
  },
}
</script>
