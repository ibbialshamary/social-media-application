<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar';
export default {
  components: {
    // Register,
    // Login,
    // Modal,

    Navbar,
  },
  data() {
    return {
      isModalVisible: false,
      actionLoginOrRegister: "",
    }
  },

  computed: {
  },
  methods: {
    showModal(action) {
      this.actionLoginOrRegister = action;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  }

}
</script>
<style>
</style>