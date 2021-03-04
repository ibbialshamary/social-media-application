<template>
  <div class="registerForm">
    <form @submit.prevent="registerUser">
      <h1>Register Here</h1><br>
      <label>Display Picture</label><br>
      <input type="file" id="displayImage" required @change="uploadImage" accept="image/*">
      <label style="width: 100%; margin-bottom: 2%" class="customFileUpload" id="customFileUpload" for="displayImage">{{ uploadProgress }}</label>

      <label for="username">Username</label>
      <input type="text" placeholder="e.g., Alshamaryi99" v-model="username" class="form-control" id="username"  autocomplete="username" required minlength="6">

      <label for="name">Full Name</label>
      <input type="text" placeholder="e.g., Ibbi Alshamary" v-model="name" class="form-control" id="name"  autocomplete="name" required minlength="6">
      
      <label for="email">Email</label>
      <input type="text" placeholder="e.g., alshamary@gmail.com" v-model="email" class="form-control" id="email"  autocomplete="email" required>

      <label for="password">Password</label>
      <input type="password" placeholder="e.g., Secret19@$" v-model="password" class="form-control" id="password"  autocomplete="current-password" required minlength="6">

      <label for="password">Confirm Password</label>
      <input type="password" v-model="confirm_password" class="form-control" id="confirm_password"  autocomplete="new-password" required minlength="6">

      <div class="buttonContainer">
          <input type="submit" class="button" value="Register"><br><br>
          <router-link to="/Login" tag="button" id="loginInsteadLink">Login instead</router-link>
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
import { firebaseExport } from "../../firebase";

export default {
  data(){
    return {
      username: "",
      name: "",
      email: "",
      password: "",
      confirm_password: "",
      image: "",
      uploadProgress: "",
    };
  },
  created: function () {

  },
  mounted() {
      // call the function under methods that gets saved theme from localstorage
      this.clearErrorMessage();
  },
  computed: {
    ...mapGetters(['userError'])
  },
  methods: {
    uploadImage(e) {
      const today = new Date();
      const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date+time;

      let file = e.target.files[0];
      if(!(file.name.endsWith("jpeg") || file.name.endsWith("png") || file.name.endsWith("jpg"))) {
        console.log("Please choose an appropriate format");
        document.getElementById("customFileUpload").classList.add("fileUploadError");
        this.uploadProgress = " failed";
        return
      }
      let storageRef = firebaseExport.storage().ref(`images/${dateTime}-${file.name}`);

      let uploadTask = storageRef.put(file);

      uploadTask.on('state_changed',
          (snapshot) => {
          },
          (error) => {
            // handle unsuccessful uploads
          },
          () => {
            // handle successful uploads on complete
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              console.log('File available at', downloadURL);
              const fileProgressLabel = document.getElementById("customFileUpload");
              fileProgressLabel.classList.add("noBefore");
              fileProgressLabel.classList.add("fileUploaded");
              this.uploadProgress = "File Upload Complete";
              this.image = downloadURL;
            });
          }
      );

    },

    clearErrorMessage() {
      let focusedElement = document.getElementById('errorMessage');
      focusedElement.innerHTML = '';
    },

    displayErrorMessage() {
      let focusedElement = document.getElementById('errorMessage');
      if(this.userError) {
        focusedElement.innerHTML = this.userError;
      }
    },

    ...mapActions(['register']),

    registerUser() {
      let user = {
        username: this.username,
        password: this.password,
        confirm_password: this.confirm_password,
        email: this.email,
        name: this.name,
        image: this.image
      };
      this.register(user).then(res => {
        if(res.data.success) {
          this.$router.push('login');
        }
      }).catch(err => {
        this.displayErrorMessage();
      });
    }
  }
}
</script>

<style>
</style>
