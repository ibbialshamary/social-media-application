<template>
  <div class="mainPostContainer">
    <div class="headingClass">
      <h1>Create and publish posts here</h1>
    </div>
    <div class="createPostForm">
      <form @submit.prevent="publishPost">

        <label for="postName">Post Name</label>
        <input type="text" class="form-control" id="postName">

        <label for="postDescription">Post Description</label>
        <input type="text" class="form-control" id="postDescription">

        <label for="postDate">Post Date</label>
        <input type="date" class="form-control" id="postDate">

        <label for="postImage">Image</label>
        <input type="file" class="form-control" id="postImage">

        <label for="postPrivacy">Post Privacy</label><br>
        <select id="postPrivacy">
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select><br><br>

        <div class="buttonContainer">
          <input type="submit" class="button" tag="button" value="Publish Post"><br><br>
          <router-link to="/createWhisper" class="button" tag="button">Create whisper instead</router-link>
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
    }
  },
  methods: {
    publishPost: function() {
    //  to do
    }
  },
  created() {

  }
}
</script>