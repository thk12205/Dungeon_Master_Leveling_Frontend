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
      id: {{ article.id }} <br />
      title: {{ article.title }} <br />
      url: {{ article.url }} <br />
      <form :action="article.url">
        <input type="submit" value="link to article" />
      </form>
      <img :src="article.img_url" style="height:300px;max-width:500px" alt="" />
      <br />
      source: {{ article.source }} <br />
      category_id: {{ article.category_id }} <br />
      upvotes_total: {{ article.upvotes_total }} <br />
      upvoted: {{ article.upvoted }} <br />
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
  methods: {},
};
</script>
