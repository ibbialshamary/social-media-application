<template>
  <div id="app">
<!--    <button @click="showModal()">Open Modal</button>-->
<!--    <button @click="showModal('login')">Login</button>-->
<!--    <button @click="showModal('register')">Register</button>-->
<!--    <Modal :is-modal-visible="isModalVisible" @close-modal="closeModal">-->
<!--      <Login v-if="actionLoginOrRegister === 'login'"></Login>-->
<!--      <Register v-else-if="actionLoginOrRegister === 'register'"></Register>-->
<!--    </Modal>-->

    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Register from "@/components/Register";
import Login from "@/components/Login";

import Modal from "@/components/Modal";
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