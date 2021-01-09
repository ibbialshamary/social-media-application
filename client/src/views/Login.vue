<template>
  <div class="loginForm">
    <form @submit.prevent="loginUser">
      <h1>Login Here</h1>
      <label for="username">Username</label>
      <input type="text" v-model="username" class="form-control" id="username" autocomplete="username" required><br>

      <label for="password">Password</label>
      <input type="password" v-model="password" class="form-control" id="password" autocomplete="current-password" required><br>
      <div class="buttonContainer">
        <input type="submit" class="button" tag="button" value="Login"><br><br>
        <router-link to="/Register" tag="button" id="signUpInsteadLink">Sign up instead</router-link><br>
      </div>
        <div id="errorMessage"></div>
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
      password: ""
    };
  },
  mounted() {
      this.clearErrorMessage();
  },
  computed: {
    ...mapGetters(['userError'])
  },
  methods: {
    ...mapActions(['login']),

    clearErrorMessage() {
      let focusedElement = document.getElementById('errorMessage');
      focusedElement.innerHTML = '';
    },

    displaySuccessMessage() {
      let focusedElement = document.getElementById('successMessage');
      if(this.userError) {
        focusedElement.innerHTML = this.userError;
      }
    },

    displayErrorMessage() {
      let focusedElement = document.getElementById('errorMessage');
      if(this.userError) {
        focusedElement.innerHTML = this.userError;
      }
    },

    // the mapActions in the line below is taken from the const actions in the UserREST.js file, the response in the method used
    // in auth.js is taken from here and work is done from it, the creation of the token and user are both done in auth.js and 
    // committed with the name 'auth_success' alongside the two parameters mentioned
    loginUser(){
      let user = {
        username: this.username,
        password: this.password
      };
      this.login(user)
      .then(res => {
        if(res.data.success) {
          // if the login information is correct, take them to the profile page
          this.$router.push('/Profile');
          this.displaySuccessMessage();
        }
      }).catch(err => {
        // this.error = "The login combination you have provided does not match.";
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
