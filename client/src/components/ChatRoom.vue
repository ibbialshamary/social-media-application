<template>
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

<style lang="scss" scoped>
.chatWindow {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.85);
  box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.15);
  .messages {
    flex: 1;
    overflow: scroll;
    .message {
      display: flex;
      border-bottom: 1px solid #EFEFEF;
      padding: 10px;
      &:last-of-type {
        border-bottom: none;
      }
      .username {
        width: 100px;
        margin-right: 15px;
      }
      .messageText {
        flex: 1;
      }
    }
  }
  .inputContainer {
    display: flex;
    input {
      flex: 1;
      height: 35px;
      font-size: 18px;
      box-sizing: border-box;
    }
    button {
      width: 75px;
      height: 35px;
      box-sizing: border-box;
    }
  }
}
</style>