<template>
  <div class="mainContainer">
    <br><h2 style="text-align: center;">Welcome back, {{ user.name }}, here is what you have missed:</h2>
    <div class="enlargedPost" v-for="p of post" :key="p._id">
      <button @click="closeEnlargedPost()">Hide Post</button>
      <p>{{ p.name }}</p>
    </div>
    <div class="postsContainer">
        <br><h1 style="text-align: center">Posts</h1>
        <div class="grid-container" v-for="post in posts" :key="post._id">
          <div class="posts">
            <div class="postsGridItem">
              <p>Post Name: <br>{{ post.name }}</p>
              <p>Post Description: <br>{{ post.description }}</p>
              <p>Post Privacy: <br>{{ post.privacy }}</p>
              <p>Post Image: <br>{{ post.image }}</p>
              <p>Post Date: <br>{{ post.date }}</p>
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
import { mapActions, mapGetters } from 'vuex';
import axios from 'axios';

export default {
  name: 'Home',

  data() {
    return {
      post: []
    }
  },

  computed: {
    ...mapGetters({
      gettersUser: 'user',
      gettersPosts: 'posts'
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
      await axios.get(`http://localhost:5000/post/id/${post._id}`)
        .then((response) => {
          this.post.push(response.data.post);
        })
      .catch((error) => {
        alert(error);
      })
    },

    closeEnlargedPost() {
      this.post = [];
    },

    goToCreatePost: function() {
      this.$router.replace('/CreatePost');
    },

    goToProfileSettings: function() {
      this.$router.replace('/ProfileSettings');
    }
  },
  created() {
    // get the getProfile request
    this.getProfile();
    this.getAllPosts();
  },
}
</script>
