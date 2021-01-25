<template>
<div class="app">
  <div class="postsContainer">
    <br>
    <h1 style="text-align: center">Posts</h1>
    <p v-if="posts === undefined || posts.length < 1">Hmm, this place seems deserted 😞<br>Why not create a post?</p>
    <div v-else class="grid-container" v-for="post in posts" :key="post._id">
      <div class="posts">
        <div class="postsGridItem">
          <div class="postContent" @click="enlargePost(post); getComments(post._id)">
            <p><strong>{{ post.name }}</strong></p>
            <p>{{ post.description }}</p>
            <p>Posted on {{ formatDate(post.date) }}</p>
            <label class="totalCommentsLabel"><i class="fas fa-comment-dots"></i> {{ post.comments.length }}</label>
          </div>
        </div>
        <button v-on:click="enlargePost(post); getComments(post._id)">Enlarge Post</button>
        <button v-if="isPostOwner(post.ownerId)" @click="removePost(post._id)" class="red-background">Delete Post</button>
      </div>
    </div>
    <div class="createPostButton">
      <button @click="goToCreatePost">Create a post</button>
    </div>
  </div>

  <div class="usersContainer">
    <br>
    <h1 style="text-align: center">Explore recommended users</h1>
    <p v-if="explorableUsers  === undefined || explorableUsers.length < 1">Sorry, no users available<br>Come back later</p>
    <div v-else class="grid-container" v-for="u in explorableUsers" :key="u._id">
      <div class="users">
        <div class="usersGridItem">
          <div class="userContent" @click="enlargeUser(u); getPosts(u._id);">
            <img src="../images/defaultAvatar.png">
            <p><strong>{{ u.name }}</strong></p>
            <p>{{ u.username }}</p>
          </div>
        </div>
        <button @click="enlargeUser(u); getPosts(u._id)">View Profile</button><br>
        <button v-if="!u.followers.includes(user.username)" @click="connect(u._id, 'follow')">Follow</button>
        <button class="white-background" v-else @click="connect(u._id, 'unfollow')">Unfollow</button><br>
        <!--          <button class="red-background">Block</button><br>-->
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
name: "RecommendedContent",
  props: ["posts", "enlargePost", "getComments", "formatDate", "isPostOwner", "removePost", "goToCreatePost",
    "explorableUsers", "enlargeUser", "getPosts", "user", "connect"],

}
</script>

<style scoped>

</style>