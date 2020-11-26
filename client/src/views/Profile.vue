<template>
  <div class="profileHeading" v-if="user">
      <img src="../images/defaultAvatar.png">
      <h1>User goes here: {{ user.username }} </h1>
      <p>User description: {{ user.name }}</p>
      <button class="profileSettingsButton" @click="goToProfileSettings">Profile Settings</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  computed: mapGetters(['user']),

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
  }
}
</script>

<style>
</style>