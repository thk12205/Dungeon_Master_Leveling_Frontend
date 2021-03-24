<template>
  <div class="articlesEdit">
    <form v-on:submit.prevent="updateArticle()">
      <h1>Edit Article</h1>

      <h4 v-if="article.creator_id != $parent.getUserID()">
        Sorry: only the uploader or creator of the article can edit
      </h4>

      <img :src="article.img_url" style="height:300px;max-width:500px" alt="" />

      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>Title:</label>
        <input type="text" class="form-control" v-model="article.title" />
      </div>
      <div class="form-group">
        <label>url:</label>
        <input type="text" class="form-control" v-model="article.url" />
        <br />
      </div>
      <div class="form-group">
        <label>img_url:</label>
        <input type="text" class="form-control" v-model="article.img_url" />
      </div>
      <div class="form-group">
        <label>source:</label>
        <input type="text" class="form-control" v-model="article.source" />
      </div>
      <label for="category">category:</label>
      <select name="category" id="category" v-model="article.category_id">
        <option value="1">STR - Monsters, Combat, Challenges</option>
        <option value="2">DEX - Improvization and Organization </option>
        <option value="3">CON - World Building and Plot</option>
        <option value="4">INT - Rules, Gold, and Balance</option>
        <option value="5">WIS - Player Management</option>
        <option value="6">CHA - Characters: The Good, The Bad, The Ugly</option>
      </select>
      <div class="form-group">
        <label>body:</label>
        <input type="text" class="form-control" v-model="article.body" />
      </div>

      <div class="form-group">
        <label>video(true/false):</label>
        <input
          type="radio"
          id="yes"
          name="video"
          value="true"
          v-model="article.video"
        />
        <label for="yes">Yes</label>
        <input
          type="radio"
          id="no"
          name="video"
          value="false"
          v-model="article.video"
        />
        <label for="no">No</label><br />
      </div>

      <input
        v-if="article.creator_id == $parent.getUserID()"
        type="submit"
        class="btn btn-primary"
        value="Submit"
      />
    </form>

    <router-link :to="`/articles/${article.id}`">
      <button>Cancel</button>
    </router-link>
    <br />
    <button
      v-if="article.creator_id == $parent.getUserID()"
      v-on:click="destroyArticle()"
    >
      Delete
    </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      article: {},
      errors: [],
    };
  },
  created: function() {
    axios.get(`/api/articles/${this.$route.params.id}`).then((response) => {
      console.log("Article = ");
      console.log(response.data);
      this.article = response.data;
    });
  },
  methods: {
    updateArticle: function() {
      var params = {
        title: this.article.title,
        image: this.article.image,
        source: this.article.source,
        category_id: this.article.category_id,
        body: this.article.body,
        video: this.article.video,
      };
      axios
        .patch(`/api/articles/${this.article.id}`, params)
        .then((response) => {
          console.log("AXIOS SUCCESS");
          console.log(response.data);
          this.$router.push(`/articles/${this.article.id}`);
        })
        .catch((error) => {
          console.log("AXIOS FAIL");
          this.errors = error.response.data.errors;
        });
    },
    destroyArticle: function() {
      if (confirm("Are you sure you want to delete this article?")) {
        axios.delete(`/api/articles/${this.article.id}`).then((response) => {
          console.log(response.data);
          this.$router.push("/");
        });
      }
    },
  },
};
</script>
