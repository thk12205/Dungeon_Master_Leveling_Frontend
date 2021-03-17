<template>
  <div class="categories-show">
    <h1>{{ category.name }}</h1>
    <h3>{{ category.description }}</h3>

    <h4>Order By:</h4>
    <button
      v-on:click="
        orderByFilter = 'upvotes_total';
        reverseFilter = 1;
      "
    >
      Score
    </button>
    <button
      v-on:click="
        orderByFilter = 'title';
        reverseFilter = 1;
      "
    >
      Title
    </button>
    <button
      v-on:click="
        orderByFilter = 'source';
        reverseFilter = 1;
      "
    >
      Sources
    </button>
    <button v-on:click="reverseFilter = -1">
      Reverse Order
    </button>

    <div class="form-group">
      <label>Title Filter: </label>
      <input
        class="form-control"
        v-model="titleFilter"
        placeholder="Search by Title"
      />
    </div>

    <h4>Articles</h4>

    <div
      v-for="article in orderBy(
        filterBy(articles, titleFilter, 'title'),
        orderByFilter,
        reverseFilter
      )"
      v-bind:key="article.id"
    >
      <h4>{{ article.title }}</h4>
      <!-- CHANGE: put button into img later -->
      <a :href="article.url">
        <img
          :src="article.img_url"
          style="height:300px;max-width:500px"
          alt=""
        />
      </a>
      <br />
      source: {{ article.source }} <br />
      upvotes_total: {{ article.upvotes_total }} <br />
      <!-- CHANGE: put button into img later -->
      <!-- <img
            src="https://icon-library.com/images/small-thumbs-up-icon/small-thumbs-up-icon-16.jpg"
            alt=""
          /> -->
      <div v-if="$parent.loggedIn()">
        <div v-if="!article.upvoted">
          <button
            v-on:click="
              createUpvote(article.id);
              article.upvoted = true;
              article.upvotes_total += 1;
            "
          >
            Thumbs Up (see-through)
          </button>
        </div>
        <div v-if="article.upvoted">
          <button
            v-on:click="
              destroyUpvote(article.id);
              article.upvoted = false;
              article.upvotes_total -= 1;
            "
          >
            Thumbs Down (opaque)
          </button>
        </div>
      </div>

      <br />
      <br />
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      category: [],
      articles: [],
      titleFilter: "",
      orderByFilter: "",
      sourceFilter: "",
      reverseFilter: 0, //flips the filter
    };
  },
  created: function() {
    axios.get(`/api/categories/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.category = response.data;
      // loop through categories, reference articles key, =+ to array
      this.articles = this.category.articles;

      console.log("Category = ");
      console.log(this.category);
      console.log("Articles = ");
      console.log(this.articles);
    });
  },
  methods: {
    createUpvote: function(article_id_var) {
      var params = {
        article_id: article_id_var,
        // user_id is set in backend create function as current_user.id, derived from the session jwt
      };
      axios.post("/api/upvotes", params).then((response) => {
        console.log(response.data);
      });
      // .catch((error) => {
      //   this.errors = error.response.data.errors;
      //   this.status = error.response.status;
      // });
    },
    destroyUpvote: function(upvote_id) {
      console.log("destroyUpdate ran!!!!!!!!!");
      axios.delete(`/api/upvotes/${upvote_id}`);
    },
  },
};
</script>
