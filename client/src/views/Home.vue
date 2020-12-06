<template>
  <div class="mainContainer">
    <br><h2 style="text-align: center;">Welcome back, {{ user.name }}, here is what you have missed:</h2>
    <div class="postsContainer">
        <br><h1 style="text-align: center">Posts</h1>
        <div class="grid-container">
          <div class="grid-item">
            <p2>Test Post One</p2>
          </div>
          <div class="grid-item">
            <p2>Test Post Two</p2>
          </div>
          <div class="grid-item">
            <p2>Test Post Three</p2>
          </div>
          <div class="grid-item">
            <p2>Test Post Four</p2>
          </div>
          <div class="grid-item">
            <p2>Test Post Five</p2>
          </div>
          <div class="grid-item">
            <p2>Test Post Six</p2>
          </div>
        </div>

      <div class="createPostButton">
        <button @click="goToCreatePost">Create a post</button>
      </div>
    </div>
    <div class="whispersContainer">
      <br><h1 style="text-align: center">Whispers</h1>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Home',
  computed: mapGetters(['user']),
  components: {
    
  },
  methods: {
    goToCreatePost: function() {
      let url = window.location.href = "./createPost"
      window.location(url);
    },

    ...mapActions(['getProfile']),
    goToProfileSettings: function() {
      let url = window.location.href = "./profileSettings"
      window.location(url);
    }
  },
  created() {
    // get the getProfile request
    this.getProfile();
  },
}
</script>
