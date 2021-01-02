<template>
  <div class="mainPostContainer">
    <div class="headingClass">
      <h1>Create and publish posts here</h1>
    </div>
    <div class="createPostForm">
      <form @submit.prevent="publishPost">

        <label for="postName">Post Name</label>
        <input type="text" class="form-control" id="postName" v-model="name">

        <label for="postDescription">Post Description</label>
        <input type="text" class="form-control" id="postDescription" v-model="description">

        <label for="postDate">Post Date</label>
        <input type="date" class="form-control" id="postDate">

        <label for="postImage">Image</label>
        <input type="file" class="form-control" id="postImage" v-on:change="fileSelected">

        <label for="postPrivacy">Post Privacy</label><br>
        <select id="postPrivacy" v-model="privacy">
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select><br><br>

        <div class="buttonContainer">
          <input type="submit" class="button" tag="button" value="Publish Post"><br><br>
          <router-link to="/CreateWhisper" class="button" tag="button">Create whisper instead</router-link>
        </div>
        <!-- grab the error from mapGetters under computed -->
        <div id="errorMessage"></div>
        <div id="successMessage"></div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  computed: mapGetters(['user']),
  data() {
    return {
      name: "",
      description: "",
      privacy: "",
      image: ""
    }
  },
  methods: {
    fileSelected(e) {
      this.image = e.target.files
    },

    displayErrorMessage(errorMessage) {
      let errorMessageContainer = document.getElementById('errorMessage');
      if(this.error) {
        errorMessageContainer.innerHTML = errorMessage;
      }
    },

    ...mapActions(['post']),

    publishPost() {
      let post = {
        name: this.name,
        description: this.description,
        privacy: this.privacy,
        // image: this.image,
        image: "Retrieve image link here"
      };
      this.post(post).then(res => {
        if(res.data.success) {
          this.$router.push('login');
        }
      }).catch(err => {
        console.log(err);
        this.displayErrorMessage(err);
      });
    },
  },
  created() {

  }
}
</script>