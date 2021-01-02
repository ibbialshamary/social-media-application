<template>
  <div class="profileHeading" v-if="user">
      <img src="../images/defaultAvatar.png">
      <h2>User goes here: {{ user.username }} </h2>
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
      this.$router.replace('/ProfileSettings');
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