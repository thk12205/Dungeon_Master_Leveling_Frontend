<template>
  <div class="categories-show">
    <h1>Strength</h1>
    <h3>Monsters, Combat, Challenges</h3>
    
    <h4>Order By:</h4>

    <button>Score</button>
    <button>Reverse Score</button>
    <button>Name</button>
    <button>Sources</button>

    <h4>Articles</h4>

    <div
        v-for="article in articles"
        v-bind:key="article.id"
      >
        title: {{article.title}} <br>
        url: {{article.url}} <br>
        img_url: {{article.img_url}} <br>
        source: {{article.source}} <br>
        category_id: {{article.category_id}} <br> <br>
    </div>

  </div>
</template>

<style>
</style>

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
          category_id: 1
        },
        {
          title: "title2",
          url: "url2",
          img_url: "img_url2",
          source: "source2",
          category_id: 2
        },
        {
          title: "title3",
          url: "url3",
          img_url: "img_url3",
          source: "source3",
          category_id: 3
        }
      ]
    };
  },
  created: function() {},
  methods: {}
};
</script>