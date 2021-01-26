<template>
  <div class="profileHeading" v-if="user">
      <img :src="user.image">
      <h2>{{ user.name }}</h2>
      <p>{{ user.username }}</p>
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