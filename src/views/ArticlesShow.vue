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
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      article: {},
    };
  },
  created: function() {
    axios.get(`/api/articles/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.article = response.data;
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
      // .catch((error) => {
      //   this.errors = error.response.data.errors;
      //   this.status = error.response.status;
      // });
    },
    destroyUpvote: function(article) {
      console.log("destroyUpdate ran!!!!!!!!!");
      axios.delete(`/api/upvotes/${article.id}`).then((response) => {
        console.log(response.data);
        article.upvoted = false;
        article.upvotes_total--;
      });
    },
  },
};
</script>
