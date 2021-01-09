<template>
  <div class="mainContainer">
    <br><h2 style="text-align: center;">Welcome back, {{ user.name }}, here is what you have missed:</h2>

    <div class="enlargedPost" v-for="p of post" :key="p._id">
      <div class="content">
        <div class="postHeading">
          <p><span>{{ p.poster }}</span> posted {{ p.name }} on {{ formatDate(p.date) }}</p>
        </div>
        <p>{{ p.description }}</p>
        <img src="../images/defaultAvatar.png">
        <div class="comments">
          <form>
            <textarea placeholder="Add a comment" style="resize: none" required minlength="20"></textarea><br>
            <button>Post Comment</button><br>
            <div id="errorMessage"></div>
          </form>
        </div>
      </div>
      <button @click="closeEnlargedPost"><i id="closePostButton" class="fas fa-times"></i></button>
    </div>

    <div class="postsContainer">
        <br><h1 style="text-align: center">Posts</h1>
        <div class="grid-container" v-for="post in posts" :key="post._id">
          <div class="posts">
            <div class="postsGridItem">
              <div class="postContent" @click="enlargePost(post)">
                <p><strong>{{ post.name }}</strong></p>
                <p>{{ post.description }}</p>
                <p>Posted on {{ formatDate(post.date) }}</p>
              </div>
            </div>
            <button v-on:click="enlargePost(post)">Enlarge Post</button>
          </div>
        </div>
      <div class="createPostButton">
        <button @click="goToCreatePost">Create a post</button>
      </div>
    </div>

    <div class="whispersContainer">
      <br><h1 style="text-align: center">Whispers</h1>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
// import axios from 'axios';

export default {
  name: 'Home',

  data() {
    return {
      post: [],
      formattedDate: ''
    }
  },

  computed: {
    ...mapGetters({
      gettersUser: 'user',
      gettersPosts: 'posts',
    }),
    user: {
      get() {
        return this.gettersUser
      },
      set(name) {
        return name
      }
    },

    posts: {
      get() {
        return this.gettersPosts
      },
      set(name) {
        return name
      }
    },
  },
  components: {
    
  },

  methods: {
    ...mapActions(['getProfile']),
    ...mapActions(['getAllPosts']),

    async enlargePost(post) {
      try {
        this.post.push(post);
      } catch(e) {
        alert(e);
      }
    },

    closeEnlargedPost() {
      this.post = [];
    },

    goToCreatePost: function() {
      this.$router.replace('/CreatePost');
    },

    goToProfileSettings: function() {
      this.$router.replace('/ProfileSettings');
    },

    formatDate(nonSplitDate) {
      let splitDateTime = nonSplitDate.split("T");
      let splitDate = splitDateTime[0].split("-");
      return `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`;
    }
  },
  created() {
    this.getProfile();
    this.getAllPosts();
  },
}
</script>
