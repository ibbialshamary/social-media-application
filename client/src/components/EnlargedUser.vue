<template>
  <div class="app">
    <div class="enlargedUser" v-for="u of enlargedUser" :key="u._id">
      <div class="content">
        <div class="userHeading">
          <p><span>{{ u.name }}</span> welcomes you to their profile</p>
        </div>
        <p class="userStats"><strong>{{ u.posts.length }}</strong> posts <strong>{{ u.followers.length }}</strong>
          followers <strong>{{ u.following.length }}</strong> following</p><br>

        <div class="userPosts">
          <p>Posts</p>
          <p class="desertedParagraph" v-if="userPosts !== undefined && userPosts.length < 1">Hmm, this place seems
            deserted 😞<br>Come back later?</p>
          <div v-else class="post" v-for="(up, index) in userPosts" :key="index" :style="{'background-image': 'url(' + up.image + ')'}">
            <div class="postContent">
              <p style="font-style: italic">Post {{ index + 1 }}</p>
              <p><strong>{{ up.name }}</strong></p>
              <p>{{ up.description }}</p>
              <p>Posted on {{ formatDate(up.date) }}</p><br>
              <label class="totalCommentsLabel"><i class="fas fa-comment-dots"></i> {{ up.comments.length }}</label>
            </div>
          </div>
        </div>

        <div class="userFollowersFollowing">
          <p>Users</p>
          <div class="followFollowersContainer">

            <div class="userFollowers">
              <p v-if="u.followers.length !== undefined && u.followers.length > 0">Followers</p>
              <p v-else>{{ u.username }} is not followed by anyone</p>
              <div class="follower" v-for="(follower, index) in u.followers" :key="index" :style="{'background-image': 'url(' + u.image + ')'}">
                <div class="followerContent">
                  <p style="font-style: italic">Follower {{ index + 1 }}</p>
                  <p><strong>{{ follower }}</strong></p>
                </div>
              </div>
            </div>

            <div class="userFollowing">
              <p v-if="u.following.length !== undefined && u.following.length > 0">Following</p>
              <p v-else>{{ u.username }} is not following anyone</p>
              <div class="following" v-for="(following, index) in u.following" :key="index" :style="{'background-image': 'url(' + u.image + ')'}">
                <div class="followingContent">
                  <p style="font-style: italic">Following {{ index + 1 }}</p>
                  <p><strong>{{ following }}</strong></p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      <span @click="closeEnlargedContent('user')"><i class="fas fa-times closeContentButton"></i></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "EnlargedUser",
  props: ["enlargedUser", "userPosts", "closeEnlargedContent", "formatDate"],
  data() {
    return {
    }
  },
}
</script>

<style scoped>
</style>