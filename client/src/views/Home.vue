<template>
  <div class="mainContainer">
    <br>
    <h2 style="text-align: center;">Welcome back, {{ user.name }}, here is what you have missed:</h2>
    <RecommendedContent
          :posts="posts" :enlarge-post="enlargePost" :get-comments="getComments" :format-date="formatDate" :is-post-owner="isPostOwner"
          :remove-post="removePost" :go-to-create-post="goToCreatePost" :explorable-users="explorableUsers" :enlarge-user="enlargeUser"
          :get-posts="getPosts" :user="user" :connect="connect">
    </RecommendedContent>

    <div class="outerContentContainer">
      <EnlargedPost
          :post="post" :format-date="formatDate" :format-time="formatTime" :comment-details="commentDetails" :add-comment="addComment"
          :recent-comments="recentComments" :comments="comments" :rate-comment="rateComment" :show-replies="showReplies" :is-comment-owner="isCommentOwner"
          :remove-comment="removeComment" :close-enlarged-content="closeEnlargedContent" :focused-comment-info="focusedCommentInfo" :replies="replies"
          :reply-details="replyDetails" :add-reply="addReply" :hide-replies="hideReplies">
      </EnlargedPost>

      <EnlargedUser
          :user-posts="userPosts" :close-enlarged-content="closeEnlargedContent" :enlarged-user="enlargedUser" :format-date="formatDate">
      </EnlargedUser>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import EnlargedPost from "@/components/EnlargedPost";
import EnlargedUser from "@/components/EnlargedUser";
import RecommendedContent from "@/components/RecommendedContent";
export default {
  name: 'Home',
  components: {RecommendedContent, EnlargedUser, EnlargedPost },
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
      focusedCommentInfo: [],

      isReplyContainerVisible: false
    }
  },

  computed: {
    ...mapGetters({
      gettersUser: 'user',
      gettersUsers: 'users',
      gettersExplorableUsers: 'explorableUsers',

      gettersPosts: 'posts',
      gettersUserPosts: 'userPosts',


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

    explorableUsers: {
      get() {
        return this.gettersExplorableUsers
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

    userPosts: {
      get() {
        return this.gettersUserPosts
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
  methods: {
    // users
    // ...mapActions(['getAllUsers']),
    ...mapActions(['getExplorableUsers']),
    ...mapActions(['getProfile']),
    ...mapActions(['followUser']),
    ...mapActions(['unfollowUser']),

    // posts
    ...mapActions(['getAllPosts']),
    ...mapActions(['deletePost']),
    ...mapActions(['patchPost']),
    ...mapActions(['getUserPosts']),

    // comments
    ...mapActions(['getPostComments']),
    ...mapActions(['postComment']),
    ...mapActions(['deleteComment']),
    ...mapActions(['patchComment']),

    // replies
    ...mapActions(['getAllReplies']),
    ...mapActions(['postReply']),
    ...mapActions(['getCommentReplies']),
    ...mapActions(['getComment']),


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

          // get a comment clicked on information
          this.focusedCommentInfo = [];
          this.getComment(commentId).then(res => {
            // console.log(res.data.comment[0]);
            this.focusedCommentInfo.push(res.data.comment[0])
          });
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

    connect(userToFollowId, connectOption) {
      let body = {
        username: this.user.username
      };

      if(connectOption === "follow") {
        this.followUser([body, userToFollowId]).then(res => {
          console.log(res);
          this.getExplorableUsers(this.user.username);
        }).catch((e) => {
          console.log(e);
        });
      } else {
        this.unfollowUser([body, userToFollowId]).then(res => {
          console.log(res);
          this.getExplorableUsers(this.user.username);
        }).catch((e) => {
          console.log(e);
        });
      }
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
      this.getPostComments(postId).then(res => {
        if (res.data.success) {
          this.recentComments(res.data.comment);
          this.commentDetails = "";
        }
      })
    },

    getPosts(userId) {
      this.getUserPosts(userId).then(res => {
        if(res.data) {
          console.log(res.data);
        } else {
          console.log("Failed");
        }
      })
    },

    closeEnlargedContent(content) {
      if(content === "post") {
        // clear the text area input
        this.commentDetails = "";
        this.post = [];
        this.getAllPosts();
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
          this.getPostComments(postId);

          // patch the post so we the comment count is updated for the post
          this.patchPostFunction(postId);
        });
      } catch(err) {
        console.log(err);
      }
    },

    // if the post belongs to the logged in user, return true
    isPostOwner(ownerId) {
      return ownerId === this.user._id;
    },

    patchPostFunction(postId) {
      let post = {
        comment: this.commentDetails,
        upvotes: 0,
        downvotes: 0,
        ownerName: this.user.name,
        ownerId: this.user._id
      };

      this.patchPost([postId, post]).then(res => {
        if (res.data.success) {
          alert("Success");
        }
      }).catch(() => {
        alert("Fail");
      });
    },

    removePost(postId) {
      try {
        this.deletePost(postId).then(res => {
          console.log(res);
          this.comments = [];
          this.recentComments = [];
          this.getAllPosts();
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
    // this.getAllUsers();
    this.getExplorableUsers(this.user.username);

    this.getAllPosts();
    this.getAllReplies();
  },
}
</script>
