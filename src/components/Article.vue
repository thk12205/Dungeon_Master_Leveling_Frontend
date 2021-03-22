<template>
  <div class="article">
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
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      article: { id: 1, body: "This is a first test", title: "This is a test" },
    };
  },
};
</script>
