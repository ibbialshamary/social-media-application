<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Navbar from '@/components/Navbar';

export default {
  components: {
    Navbar,
  },
  computed: {
  },

}
</script>
<style>
</style>