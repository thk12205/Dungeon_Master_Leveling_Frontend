<template>
  <div class="articlesShow">
    <h4>{{ article.title }}</h4>
    <!-- CHANGE: put button into img later -->
    <a :href="article.url">
      <img :src="article.img_url" style="height:300px;max-width:500px" alt="" />
    </a>
    <br />
    source: {{ article.source }} <br />
    upvotes_total: {{ article.upvotes_total }} <br />
    body: {{ article.body }} <br />
    video: {{ article.video }} <br />

    <!-- CHANGE: put button into img later -->
    <!-- <img
            src="https://icon-library.com/images/small-thumbs-up-icon/small-thumbs-up-icon-16.jpg"
            alt=""
          /> -->
    <div v-if="$parent.loggedIn()">
      <div v-if="!article.upvoted">
        <button v-on:click="createUpvote(article)">
          Thumbs Up (see-through)
        </button>
      </div>
      <div v-if="article.upvoted">
        <button v-on:click="destroyUpvote(article)">
          Thumbs Down (opaque)
        </button>
      </div>
    </div>

    <br />

    <router-link
      v-if="article.creator_id == $parent.getUserID()"
      :to="`/articles/${article.id}/edit`"
    >
      <button>Edit Article</button>
    </router-link>

    <br />

    <h3>Comments Section</h3>

    <form v-if="$parent.loggedIn()" v-on:submit.prevent="createComment()">
      <h1>Add Comment</h1>

      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        (user.img_url here)
        <label>Comment:</label>
        <input type="text" class="form-control" v-model="body" />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
    <br />

    <div v-for="comment in comments" v-bind:key="comment.id">
      id: {{ comment.id }} <br />
      img: <img :src="comment.user_img_url" alt="" />
      <br />
      username: {{ comment.username }} <br />
      comment: {{ comment.body }} <br />
      user_id: {{ comment.user_id }} <br />
      created: {{ relativeDate(comment.created_at) }} <br />
      <button
        v-if="$parent.getUserID() == comment.user_id"
        v-on:click="destroyComment(comment)"
      >
        Delete
      </button>
      <br />
      <br />
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import moment from "moment";

export default {
  data: function() {
    return {
      article: {},
      body: "",
      comments: [],
      errors: [],
    };
  },
  created: function() {
    axios.get(`/api/articles/${this.$route.params.id}`).then((response) => {
      console.log("Article = ");
      console.log(response.data);
      this.article = response.data;
      console.log("Comments = ");
      this.comments = this.article.comments;
      console.log(this.comments);
    });
  },
  methods: {
    destroyArticle: function() {
      console.log("Sanity True");
      if (confirm("Confirm Article Deletion?")) {
        axios
          .delete(`/api/article/${this.$route.params.id}`)
          .then((response) => {
            console.log(response.data);
            this.$router.push("/");
          });
      }
    },
    createUpvote: function(article) {
      var params = {
        article_id: article.id,
        // user_id is set in backend create function as current_user.id, derived from the session jwt
      };
      axios.post("/api/upvotes", params).then((response) => {
        console.log(response.data);
        article.upvoted = true;
        article.upvotes_total++;
      });
    },
    destroyUpvote: function(article) {
      console.log("destroyUpdate ran!!!!!!!!!");
      axios.delete(`/api/upvotes/${article.id}`).then((response) => {
        console.log(response.data);
        article.upvoted = false;
        article.upvotes_total--;
      });
    },
    createComment: function() {
      var params = {
        article_id: this.article.id,
        body: this.body,
      };
      axios
        .post("/api/comments", params)
        .then((response) => {
          console.log("Comment = ");
          console.log(response.data);
          this.comments.push(response.data);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    destroyComment: function(comment) {
      if (confirm("Are you sure you want to delete this comment?")) {
        axios.delete(`/api/comments/${comment.id}`).then((response) => {
          console.log("Deletion successful");
          console.log(response.data);
          console.log("Comment = ");
          console.log(comment);
          var index = this.comments.indexOf(comment);
          console.log("Index = ");
          console.log(index);
          if (index > -1) {
            this.comments.splice(index, 1);
            console.log("Comment Removed");
          }
        });
      }
    },
    relativeDate: function(date) {
      return moment(date).fromNow();
    },
  },
};
</script>
