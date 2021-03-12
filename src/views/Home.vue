<template>
  <div class="home">
    <h1>Dungeon Master Leveling!!</h1>

    <h4>STR</h4>
    <button>IMG Link</button><br />
    // sort by category_id:1 (STR)
    <div v-for="article in articles" v-bind:key="article.id">
      title: {{ article.title }} <br />
      url: {{ article.url }} <br />
      img_url: {{ article.img_url }} <br />
      source: {{ article.source }} <br />
      category_id: {{ article.category_id }} <br />
      upvotes_total: {{ article.upvotes_total }} <br />
      upvoted: {{ article.upvoted }} <br />
      <br />
    </div>

    <h4>CON</h4>
    <button>IMG Link</button><br />
    // sort by category_id:2 (CON)
    <div v-for="article in articles" v-bind:key="article.id">
      title: {{ article.title }} <br />
      url: {{ article.url }} <br />
      img_url: {{ article.img_url }} <br />
      source: {{ article.source }} <br />
      category_id: {{ article.category_id }} <br />
      upvotes_total: {{ article.upvotes_total }} <br />
      upvoted: {{ article.upvoted }} <br />
      <br />
    </div>

    <h4>DEX</h4>
    <button>IMG Link</button><br />
    // sort by category_id:3 (DEX)
    <div v-for="article in articles" v-bind:key="article.id">
      title: {{ article.title }} <br />
      url: {{ article.url }} <br />
      img_url: {{ article.img_url }} <br />
      source: {{ article.source }} <br />
      category_id: {{ article.category_id }} <br />
      upvotes_total: {{ article.upvotes_total }} <br />
      upvoted: {{ article.upvoted }} <br />
      <br />
    </div>

    <h4>INT</h4>
    <button>IMG Link</button><br />
    // sort by category_id:4 (INT)
    <div v-for="article in articles" v-bind:key="article.id">
      title: {{ article.title }} <br />
      url: {{ article.url }} <br />
      img_url: {{ article.img_url }} <br />
      source: {{ article.source }} <br />
      category_id: {{ article.category_id }} <br />
      upvotes_total: {{ article.upvotes_total }} <br />
      upvoted: {{ article.upvoted }} <br />
      <br />
    </div>

    <h4>WIS</h4>
    <button>IMG Link</button><br />
    // sort by category_id:5 (WIS)
    <div v-for="article in articles" v-bind:key="article.id">
      title: {{ article.title }} <br />
      url: {{ article.url }} <br />
      img_url: {{ article.img_url }} <br />
      source: {{ article.source }} <br />
      category_id: {{ article.category_id }} <br />
      upvotes_total: {{ article.upvotes_total }} <br />
      upvoted: {{ article.upvoted }} <br />
      <br />
    </div>

    <h4>CHA</h4>
    <button>IMG Link</button><br />
    // sort by category_id:6 (CHA)
    <div v-for="article in articles" v-bind:key="article.id">
      title: {{ article.title }} <br />
      url: {{ article.url }} <br />
      img_url: {{ article.img_url }} <br />
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
export default {
  data: function() {
    return {
      // Hard coded articles
      articles: [
        {
          title: "title1",
          url: "url1",
          img_url: "img_url1",
          source: "source1",
          category_id: 1,
          upvotes_total: 25,
          upvoted: true,
        },
        {
          title: "title2",
          url: "url2",
          img_url: "img_url2",
          source: "source2",
          category_id: 2,
          upvoted: false,
        },
        {
          title: "title3",
          url: "url3",
          img_url: "img_url3",
          source: "source3",
          category_id: 3,
          upvoted: false,
        },
      ],
    };
  },
  created: function() {},
  methods: {},
};
</script>
