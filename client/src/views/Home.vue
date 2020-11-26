<template>
  <div class="mainContainer">
    <br><h1 style="text-align: center;">Welcome back, {{ user.name }}, here is what you have missed:</h1>
    <div class="postsContainer">
        <br><h1 style="text-align: center">Posts</h1>
        <div class="grid-container">
          <div class="grid-item">
            <p>Test Post One</p>
          </div>
          <div class="grid-item">
            <p>Test Post Two</p>
          </div>
          <div class="grid-item">
            <p>Test Post Three</p>
          </div>
          <div class="grid-item">
            <p>Test Post Four</p>
          </div>
          <div class="grid-item">
            <p>Test Post Five</p>
          </div>
          <div class="grid-item">
            <p>Test Post Six</p>
          </div>
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
