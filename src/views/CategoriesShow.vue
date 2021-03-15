<template>
  <div class="categories-show">
    <h1>{{ category.name }}</h1>
    <h3>{{ category.description }}</h3>

    <h4>Order By:</h4>

    <button>Score</button>
    <button>Reverse Score</button>
    <button>Name</button>
    <button>Sources</button>

    <h4>Articles</h4>

    <div v-for="article in articles" v-bind:key="article.id">
      id: {{ article.id }} <br />
      title: {{ article.title }} <br />
      url: {{ article.url }} <br />
      <img :src="article.img_url" alt="" /> <br />
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

export default {
  data: function() {
    return {
      category: [],
      articles: [],
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
