<template>
  <div class="mainPostContainer">
    <div class="headingClass">
      <h1>Create and publish posts here</h1>
    </div>
    <div class="createPostForm">
      <form @submit.prevent="publishPost">

        <label for="postName">Post Name</label>
        <input type="text" class="form-control" id="postName" v-model="name" required minlength="6">

        <label for="postDescription">Post Description</label>
        <input type="text" class="form-control" id="postDescription" v-model="description" required  minlength="6">

        <label>Post File</label>
        <input type="file" class="form-control" id="postImage" v-on:change="fileSelected" required>
        <label class="customFileUpload" for="postImage"></label>

        <label for="postPrivacy">Post Privacy</label><br>
        <select id="postPrivacy" v-model="privacy" required>
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select><br><br>

        <div class="buttonContainer">
          <input type="submit" class="button" value="Publish Post"><br><br>
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
  data() {
    return {
      name: "",
      description: "",
      privacy: "",
      image: ""
    }
  },

  computed: {
    ...mapGetters({
      storePostError: 'postError',
      storePostStatus: 'postStatus',

      gettersUser: 'user',
    }),
    postError: {
      get() {
        return this.storePostError
      },
      set(name) {
        return name
      }
    },

    postStatus: {
      get() {
        return this.storePostStatus
      },
      set(name) {
        return name
      }
    },

    user: {
      get() {
        return this.gettersUser
      },
      set(name) {
        return name
      }
    },
  },


  methods: {
    ...mapActions(['post']),

    fileSelected(e) {
      this.image = e.target.files[0].name
    },

    publishPost() {
        let post = {
          name: this.name,
          description: this.description,
          privacy: this.privacy,
          image: this.image,
          poster: this.user.username
        };

        this.post(post).then(res => {
          if (res.data.success) {
            this.$router.replace('/Home');
          }
        }).catch(() => {
          this.displayErrorMessage();
        });
    },

    // validate and display error messages
    displaySuccessfulMessage() {
      let focusedElement = document.getElementById('successMessage');
      let unfocusedElement = document.getElementById('errorMessage');
      this.successfulMessage(focusedElement, unfocusedElement);
    },

    displayErrorMessage() {
      let focusedElement = document.getElementById('errorMessage');
      let unfocusedElement = document.getElementById('successMessage');
      if(this.postError) {
        this.failureMessage(focusedElement, unfocusedElement);
      }
    },

    successfulMessage(focusedElement, unfocusedElement) {
      unfocusedElement.innerText = "";

      focusedElement.innerHTML = this.postStatus;
    },

    failureMessage(focusedElement, unfocusedElement) {
      unfocusedElement.innerText = "";
      focusedElement.innerHTML = this.postError;
    },

  },
  created() {

  }
}
</script>