<template>
  <div class="mainContainer">
    <br>
    <h2 style="text-align: center;">Welcome back, {{ user.name }}, here is what you have missed:</h2>

    <div class="enlargedPost" v-for="p of post" :key="p._id">
      <div class="content">
        <div class="postHeading">
          <p><span>{{ p.poster }}</span> posted <i>{{ p.name }}</i> on <span>{{ formatDate(p.date) }}</span></p>
        </div>
        <p>{{ p.description }}</p>
        <img src="../images/defaultAvatar.png">
        <div class="comments">
          <textarea v-model="commentDetails" placeholder="Add a comment" style="resize: none" required
                    minlength="20"></textarea><br>
          <button @click="addComment(p._id)">Post Comment</button>
          <br>
          <div id="errorMessage"></div>

          <p v-if="recentComments.length">Recently Added Comments</p>
          <div class="previousComments" v-for="c in recentComments" :key="c._id">
            <div class="comment">
              <p class="poster"><span>{{ c.poster }}</span> on <span>{{ formatDate(c.date) }}</span> at <span>{{ formatTime(c.date) }}</span></p>
              <p class="details">{{ c.comment }}</p>
            </div>
            <br>
          </div>

          <p>Previous Comments</p>
          <div class="previousComments" v-for="c in comments" :key="c._id">
            <div class="comment">
              <p class="poster"><span>{{ c.poster }}</span> on <span>{{ formatDate(c.date) }}</span> at <span>{{ formatTime(c.date) }}</span></p>
              <p class="details">{{ c.comment }}</p>
              <div class="ratings">
                <span @click="rateComment(c._id, c.poster, 'upvote')"><i class="fas fa-heart upvote"></i><span>{{ c.upvotes }}</span></span>
                <span @click="rateComment(c._id, c.poster, 'downvote')"><i class="fas fa-thumbs-down downvote"></i><span>{{ c.downvotes }}</span></span>
              </div>
            </div>
            <button>Reply</button>
            <button>View Replies</button>
            <button v-if="isCommentOwner(c.poster)" @click="removeComment(c._id, c.postId)" class="red">Delete Comment</button>
            <br><br>
          </div>
        </div>
      </div>
      <button @click="closeEnlargedPost"><i id="closePostButton" class="fas fa-times"></i></button>
    </div>

    <div class="postsContainer">
      <br>
      <h1 style="text-align: center">Posts</h1>
      <div class="grid-container" v-for="post in posts" :key="post._id">
        <div class="posts">
          <div class="postsGridItem">
            <div class="postContent" @click="enlargePost(post); getComments(post._id)">
              <p><strong>{{ post.name }}</strong></p>
              <p>{{ post.description }}</p>
              <p>Posted on {{ formatDate(post.date) }}</p>
            </div>
          </div>
          <button v-on:click="enlargePost(post); getComments(post._id)">Enlarge Post</button>
        </div>
      </div>
      <div class="createPostButton">
        <button @click="goToCreatePost">Create a post</button>
      </div>
    </div>

    <div class="whispersContainer">
      <br>
      <h1 style="text-align: center">Whispers</h1>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'Home',

  data() {
    return {
      post: [],
      formattedDate: '',

      commentDetails: "",
      recentComments: [],
      upvotes: 0,
      downvotes: 0
    }
  },

  computed: {
    ...mapGetters({
      gettersUser: 'user',
      gettersPosts: 'posts',

      gettersComments: 'comments',
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

    comments: {
      get() {
        return this.gettersComments
      },
      set(name) {
        return name
      }
    },
  },
  components: {},
  methods: {
    ...mapActions(['getProfile']),
    ...mapActions(['getAllPosts']),

    ...mapActions(['getComment']),
    ...mapActions(['postComment']),
    ...mapActions(['deleteComment']),
    ...mapActions(['patchComment']),

    async enlargePost(post) {
      try {
        this.post.push(post);
      } catch (e) {
        alert(e);
      }
    },

    addComment(postId) {
      let comment = {
        comment: this.commentDetails,
        upvotes: 0,
        downvotes: 0,
        poster: this.user.username,
        postId: postId,
      };

      this.postComment(comment).then(res => {
        if (res.data.success) {
          this.recentComments.push(res.data.comment);
          this.commentDetails = "";
        }
      }).catch(() => {
        alert("failed");
      });
    },

    getComments(postId) {
      this.recentComments = [];
      this.getComment(postId).then(res => {
        if (res.data.success) {
          this.recentComments(res.data.comment);
          this.commentDetails = "";
        }
      })
    },

    closeEnlargedPost() {
      this.post = [];
    },

    goToCreatePost: function () {
      this.$router.replace('/CreatePost');
    },

    goToProfileSettings: function () {
      this.$router.replace('/ProfileSettings');
    },

    formatDate(nonSplitDate) {
      let splitDateTime = nonSplitDate.split("T");
      let splitDate = splitDateTime[0].split("-");
      return `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`;
    },

    formatTime(nonSplitTime) {
      let splitDateTime = nonSplitTime.split("T");
      let splitTime = splitDateTime[1].split(":");
      return `${splitTime[0]}:${splitTime[1]}`;
    },

    // if the comment belongs to the logged in user, return true
    isCommentOwner(poster) {
      return poster === this.user.username;
    },

    removeComment(commentId, postId) {
      try {
        this.deleteComment(commentId).then(res => {
          console.log(res);
          this.comments = [];
          this.recentComments = [];
          this.getComment(postId);
        });
      } catch(err) {
        console.log(err);
      }
    },

    rateComment(commentId, postId, ratingType) {
      let commentToPatch;


      if(ratingType === "upvote") {
        commentToPatch = {
          upvotes: this.upvotes++,
        }
        console.log(this.upvotes + "\n");
      } else {
        commentToPatch = {
          downvotes: this.downvotes++
        }
      }
      try {
        this.patchComment([commentToPatch, commentId]).then(res => {
          // console.log(commentId);
          // console.log(res.data);
          // alert("Done");
          // this.comments = [];
          // this.recentComments = [];
          // this.getComment(postId);
        });
      } catch(err) {
        console.log(err);
      }
    }
  },
  created() {
    this.getProfile();
    this.getAllPosts();
  },
}
</script>
