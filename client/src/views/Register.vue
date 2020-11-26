<template>
  <div class="registerForm">
    <form @submit.prevent="registerUser">
      <h1>Register Here</h1>
      <label for="username">Username</label>
      <input type="text" placeholder="e.g., Alshamaryi99" v-model="username" class="form-control" id="username" required="true" minlength="6" autocomplete="username">

      <label for="name">Full Name</label>
      <input type="text" placeholder="e.g., Ibbi Alshamary" v-model="name" class="form-control" id="name" required="true" minlength="6" autocomplete="name">
      
      <label for="email">Email</label>
      <input type="email" placeholder="e.g., alshamary@gmail.com" v-model="email" class="form-control" id="email" required="true" minlength="6" autocomplete="email">

      <label for="password">Password</label>
      <input type="password" placeholder="e.g., Secret19@$" v-model="password" class="form-control" id="password" required="true" minlength="6" autocomplete="current-password">

      <label for="password">Confirm Password</label>
      <input type="password" v-model="confirm_password" class="form-control" id="confirm_password" required="true" minlength="6" autocomplete="new-password"><br>

      <div class="buttonContainer">
          <input type="submit" class="button" tag="button" value="Register"><br><br>
          <router-link to="/login" tag="button" id="loginInsteadLink">Login instead</router-link>
      </div>
      <!-- grab the error from mapGetters under computed -->
      <div id="errorMessage"></div>
      <div id="successMessage"></div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
export default {
  data(){
    return {
      username: "",
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    };
  },
  created: function () {

  },
  mounted() {
      // call the function under methods that gets saved theme from localstorage
      this.clearErrorMessage();
  },
  computed: {
    ...mapGetters(['error'])
  },
  methods: {
    clearErrorMessage() {
      let focusedElement = document.getElementById('errorMessage');
      focusedElement.innerHTML = '';
    },

    displaySuccessMessage() {
      let focusedElement = document.getElementById('successMessage');
      if(this.error) {
        focusedElement.innerHTML = this.error;
      }
    },

    displayErrorMessage() {
      let focusedElement = document.getElementById('errorMessage');
      if(this.error) {
        focusedElement.innerHTML = this.error;
      }
    },

    ...mapActions(['register']),

    registerUser() {
      let user = {
        username: this.username,
        password: this.password,
        confirm_password: this.confirm_password,
        email: this.email,
        name: this.name
      };
      this.register(user).then(res => {
        if(res.data.success) {
          this.$router.push('login');
        }
      }).catch(err => {
        // this.error = "Registration failed, please try again.";
        // alert("The login combination you have provided does not match.");
        console.log(err);
        this.displayErrorMessage();
      });
    }
  }
}
</script>

<style>
</style>