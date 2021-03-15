<template>
  <div class="home">
    <h1>Dungeon Master Leveling!!</h1>

    <div v-for="category in categories" v-bind:key="category.id">
      <h4>{{ category.name }}</h4>
      <!-- CHANGE: put button into img later -->
      <h4>================</h4>
      <button>IMG Link</button><br />
      <div v-for="article in articles" v-bind:key="article.id">
        <div v-if="article.category_id == category.id">
          <h5>{{ article.title }}</h5>
          <button href="article.url">link to article</button> <br />
          <!-- CHANGE: put button into img later -->
          url: {{ article.url }} <br />
          img: <img src="article.img_url" alt="" /> <br />
          img_url: {{ article.img_url }} <br />
          source: {{ article.source }} <br />
          category_id: {{ article.category_id }} <br />
          upvotes_total: {{ article.upvotes_total }} <br />
          upvoted: {{ article.upvoted }} <br />
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      categories: [],
      articles: [],
    };
  },
  created: function() {
    axios.get("/api/categories").then((response) => {
      console.log(response.data);
      this.categories = response.data;
      // loop through categories, reference articles key, =+ to array
      var i = 0;
      var j = 0;
      while (i < this.categories.length) {
        j = 0;
        while (j < this.categories[i].articles.length) {
          console.log(this.categories[i].articles[j]);
          this.articles.push(this.categories[i].articles[j]);
          j += 1;
        }
        console.log("category shifted");
        i += 1;
      }
      console.log("Categories = ");
      console.log(this.categories);
      console.log("Articles = ");
      console.log(this.articles);
    });
  },
  methods: {},
};
</script>

// articles: [ // { // title: "title1", // url: "url1", // img_url: "img_url1",
// source: "source1", // category_id: 1, // upvotes_total: 25, // upvoted: true,
// }, // { // title: "title2", // url: "url2", // img_url: "img_url2", //
source: "source2", // category_id: 2, // upvoted: false, // }, // { // title:
"title3", // url: "url3", // img_url: "img_url3", // source: "source3", //
category_id: 3, // upvoted: false, // }, // ],
