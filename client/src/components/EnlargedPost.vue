<template>
  <div class="app">
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

          <p v-if="comments !== undefined && comments.length !== 0">Previous Comments</p>
          <div class="previousComments" v-for="c in comments" :key="c._id">
            <div class="comment">
              <p class="poster"><span>{{ c.ownerName }}</span> on <span>{{ formatDate(c.date) }}</span> at <span>{{ formatTime(c.date) }}</span></p>
              <p class="details">{{ c.comment }}</p>
              <p><i class="fas fa-comment-dots"></i> {{ c.replies.length }}</p>
              <div class="ratings">
                <span @click="rateComment(c._id, c.postId, c.upvotes, 'upvote')"><i class="fas fa-heart upvote"></i><span>{{ c.upvotes }}</span></span>
                <span @click="rateComment(c._id, c.postId, c.downvotes, 'downvote')"><i class="fas fa-thumbs-down downvote"></i><span>{{ c.downvotes }}</span></span>
              </div>
            </div>
            <button class="blue-background" @click="showReplies(c._id)">Reply</button>
            <button class="blue-background" @click="showReplies(c._id)">View Replies</button>
            <button v-if="isCommentOwner(c.ownerId)" @click="removeComment(c._id, c.postId)" class="red-background">Delete Comment</button>
            <br><br>
          </div>
        </div>
      </div>
      <span @click="closeEnlargedContent('post')"><i class="fas fa-times closeContentButton"></i></span>
    </div>

    <div id="repliesContainer">
      <div class="main">
        <p v-for="(fc, index) in focusedCommentInfo" :key="index">Replies for {{ fc.ownerName }}'s comment</p>
        <div class="replies">
          <div v-for="r in replies" :key="r._id" class="reply">
            <p class="details" style="color: #1e2020">{{ r.ownerName }}: {{ r.reply }}</p>
            <div class="ratings">
              <span @click="rateComment('upvote')"><i class="fas fa-heart upvote"></i><span>{{ r.upvotes }}</span></span>
              <span @click="rateComment('downvote')"><i class="fas fa-thumbs-down downvote"></i><span>{{ r.downvotes }}</span></span>
            </div>
          </div>
        </div>
        <div class="replyContainer">
          <textarea v-model="replyDetails" placeholder="Add a reply" style="resize: none" required minlength="6"></textarea><br>
          <button v-for="(fc, index) in focusedCommentInfo" :key="index" class="postDataButton" @click="addReply(fc._id)">Post Reply</button>
        </div>
        <button class="red-background" @click="hideReplies">Go back</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
name: "EnlargedPost",
  props: ["post", "formatDate", "formatTime", "commentDetails", "addComment", "recentComments", "comments",
    "rateComment", "showReplies", "isCommentOwner", "removeComment", "closeEnlargedContent",
  "focusedCommentInfo", "replies", "replyDetails", "addReply", "hideReplies", "testing"],
}
</script>

<style scoped>

</style>