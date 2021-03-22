<template>
  <div class="categories-show">
    <h1>{{ category.name }}</h1>
    <h3>{{ category.description }}</h3>

    <h4>Order By:</h4>
    <button
      v-on:click="
        orderByFilter = 'upvotes_total';
        reverseFilter = -1;
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
    <button v-on:click="reverseFilterToggle()">
      Reverse Order
    </button>

    <br />
    Title Filter:
    <input
      class="form-control"
      v-model="titleFilter"
      placeholder="Search by Title"
    />
    <br />
    Source Filter:
    <input
      class="form-control"
      v-model="sourceFilter"
      placeholder="Search by Source"
    />
    <br />

    <h4>Articles</h4>

    <div
      v-for="article in orderBy(
        filterBy(
          filterBy(articles, titleFilter, 'title'),
          sourceFilter,
          'source'
        ),
        orderByFilter,
        reverseFilter
      )"
      v-bind:key="article.id"
    >
      <h4>{{ article.title }}</h4>
      <!-- CHANGE: put button into img later -->
      <router-link :to="`/articles/${article.id}`"
        ><img :src="article.img_url" style="height:300px;max-width:500px" alt=""
      /></router-link>
      <br />
      <!-- <a :href="article.url" target="_blank">
        <img
          :src="article.img_url"
          style="height:300px;max-width:500px"
          alt=""
        />
      </a>
      <br /> -->
      source: {{ article.source }} <br />
      upvotes_total: {{ article.upvotes_total }} <br />
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
      sourceFilter: "",
      orderByFilter: "id",
      reverseFilter: 1, //flips the filter
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
    reverseFilterToggle() {
      if (this.reverseFilter === 1) {
        this.reverseFilter = -1;
      } else {
        this.reverseFilter = 1;
      }
    },
  },
};
</script>
