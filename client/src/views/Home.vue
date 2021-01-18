<template>
  <div class="mainContainer">
    <br>
    <h2 style="text-align: center;">Welcome back, {{ user.name }}, here is what you have missed:</h2>

    <div class="outerEnlargedPost">
      <div class="enlargedPost" v-for="p of post" :key="p._id">
        <div class="content">
          <div class="postHeading">
            <p><span>{{ p.ownerName }}</span> posted <i>{{ p.name }}</i> on <span>{{ formatDate(p.date) }}</span></p>
          </div>
          <p>{{ p.description }}</p>
          <img src="../images/defaultAvatar.png">
          <div class="comments">
            <textarea v-model="commentDetails" placeholder="Add a comment" style="resize: none" required minlength="20"></textarea><br>
            <button class="postDataButton" @click="addComment(p._id)">Post Comment</button>
            <br>
            <div id="errorMessage"></div>

            <p v-if="recentComments.length">Recently Added Comments</p>
            <div class="previousComments" v-for="c in recentComments" :key="c._id">
              <div class="comment">
                <p class="poster"><span>{{ c.ownerName }}</span> on <span>{{ formatDate(c.date) }}</span> at <span>{{ formatTime(c.date) }}</span></p>
                <p class="details">{{ c.comment }}</p>
              </div>
              <br>
            </div>

            <p v-if="comments.length !== 0">Previous Comments</p>
            <div class="previousComments" v-for="c in comments" :key="c._id">
              <div class="comment">
                <p class="poster"><span>{{ c.ownerName }}</span> on <span>{{ formatDate(c.date) }}</span> at <span>{{ formatTime(c.date) }}</span></p>
                <p class="details">{{ c.comment }}</p>
                <div class="ratings">
                  <span @click="rateComment(c._id, c.postId, c.upvotes, 'upvote')"><i class="fas fa-heart upvote"></i><span>{{ c.upvotes }}</span></span>
                  <span @click="rateComment(c._id, c.postId, c.downvotes, 'downvote')"><i class="fas fa-thumbs-down downvote"></i><span>{{ c.downvotes }}</span></span>
                </div>
              </div>
              <button @click="showReplies(c._id)">Reply</button>
              <button @click="showReplies(c._id)">View Replies</button>
              <button v-if="isCommentOwner(c.ownerId)" @click="removeComment(c._id, c.postId)" class="red">Delete Comment</button>
              <br><br>
            </div>
          </div>
        </div>
        <span @click="closeEnlargedContent('post')"><i class="fas fa-times closeContentButton"></i></span>
      </div>

      <div id="repliesContainer">
        <div class="main">
          <p>Replies below</p>
          <div class="replies">
            <div v-for="r in replies" :key="r._id" class="reply">
              <p class="details" style="color: #1e2020">{{ r.ownerName }}: {{ r.reply }}</p>
            </div>
          </div>
          <div class="replyContainer">
            <textarea v-model="replyDetails" placeholder="Add a reply" style="resize: none" required minlength="20"></textarea><br>
            <button v-for="commentId in replyCommentId" :key="commentId" class="postDataButton" @click="addReply(commentId)">Post Reply</button>
          </div>
          <button @click="hideReplies">Go back</button>
        </div>
      </div>

      <div class="enlargedUser" v-for="u of enlargedUser" :key="u._id">
        <div class="content">
          <div class="userHeading">
            <p><span>{{ u.name }}</span> welcomes you to their profile</p>
          </div>
          <img src="../images/defaultAvatar.png">
        </div>
        <span @click="closeEnlargedContent('user')"><i class="fas fa-times closeContentButton"></i></span>
      </div>
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

    <div class="usersContainer">
      <br>
      <h1 style="text-align: center">Explore recommended users</h1>
      <div class="grid-container" v-for="user in users" :key="user._id">
        <div class="users">
          <div class="usersGridItem">
            <div class="userContent" @click="enlargeUser(user); getComments(user._id)">
              <img src="../images/defaultAvatar.png">
              <p><strong>{{ user.name }}</strong></p>
              <p>{{ user.username }}</p>
            </div>
          </div>
          <button @click="enlargeUser(user)">View Profile</button><br>
          <button>Follow</button><br>
          <button>Block</button><br>
        </div>
      </div>
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
      enlargedUser: [],
      formattedDate: '',

      commentDetails: "",
      recentComments: [],
      upvotes: 0,
      downvotes: 0,

      replyDetails: "",
      replies: [],
      replyCommentId: [],

      isReplyContainerVisible: false
    }
  },

  computed: {
    ...mapGetters({
      gettersUser: 'user',
      gettersUsers: 'users',

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
    users: {
      get() {
        return this.gettersUsers
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
    // users
    ...mapActions(['getAllUsers']),
    ...mapActions(['getProfile']),

    // posts
    ...mapActions(['getAllPosts']),

    // comments
    ...mapActions(['getComment']),
    ...mapActions(['postComment']),
    ...mapActions(['deleteComment']),
    ...mapActions(['patchComment']),

    // replies
    ...mapActions(['getAllReplies']),
    ...mapActions(['postReply']),
    ...mapActions(['getCommentReplies']),


    async enlargePost(post) {
      try {
        this.post.push(post);
      } catch (e) {
        alert(e);
      }
    },

    async enlargeUser(user) {
      try {
        this.enlargedUser.push(user);
      } catch (e) {
        alert(e);
      }
    },

    showReplies(commentId) {
      document.getElementById("repliesContainer").style.display = "block";
      this.getCommentReplies(commentId).then(res => {
        if (res.data) {
          this.replies = res.data.replies;
          this.replyCommentId = [];
          this.replyCommentId.push(commentId);
        } else {
          alert("Failed");
        }
      })
    },

    hideReplies() {
      document.getElementById("repliesContainer").style.display = "none";
      this.replies = [];
    },

    addReply(commentId) {
      let reply = {
        reply: this.replyDetails,
        upvotes: 0,
        downvotes: 0,
        ownerName: this.user.name,
        ownerId: this.user._id
      };

      this.postReply([reply, commentId]).then(res => {
        if (res.data.success) {
          this.replyDetails = "";
          this.showReplies(commentId);
        }
      }).catch(() => {
        alert("failed");
      });
    },

    addComment(postId) {
      let comment = {
        comment: this.commentDetails,
        upvotes: 0,
        downvotes: 0,
        ownerName: this.user.name,
        ownerId: this.user._id
      };

      this.postComment([comment, postId]).then(res => {
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

    closeEnlargedContent(content) {
      if(content === "post") {
        // clear the text area input
        this.commentDetails = "";
        this.post = [];
      } else {
        this.enlargedUser = [];
      }
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
    isCommentOwner(ownerId) {
      return ownerId === this.user._id;
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

    rateComment(commentId, postId, ratingCount, ratingType) {
      let commentToPatch;
      console.log(ratingCount);


      if(ratingType === "upvote") {
        commentToPatch = {
          userRated: this.user,
          upvotes: ratingCount + 1
        }
      } else {
        commentToPatch = {
          userRated: this.user,
          downvotes: ratingCount + 1
        }
      }
      try {
        this.patchComment([commentToPatch, commentId]).then(res => {
          if(res.status === 200) {
            this.comments = [];
            this.recentComments = [];
            this.getComments(postId)
          }
        });
      } catch(err) {
        console.log(err);
      }
    }
  },
  created() {
    this.getProfile();
    this.getAllUsers();

    this.getAllPosts();

    this.getAllReplies();
  },
}
</script>
