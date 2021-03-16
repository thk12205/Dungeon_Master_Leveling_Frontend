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
          article_id: {{ article.id }} <br />
          <form :action="article.url">
            <input type="submit" value="link to article" />
          </form>
          <br />
          <!-- CHANGE: put button into img later -->
          url: {{ article.url }} <br />
          <img
            :src="article.img_url"
            style="height:300px;max-width:500px"
            alt=""
          />
          <br />
          source: {{ article.source }} <br />
          category_id: {{ article.category_id }} <br />
          upvotes_total: {{ article.upvotes_total }} <br />
          <!-- CHANGE: put button into img later -->
          <!-- <img
            src="https://icon-library.com/images/small-thumbs-up-icon/small-thumbs-up-icon-16.jpg"
            alt=""
          /> -->
          <div v-if="$parent.loggedIn()">
            upvoted: {{ article.upvoted }} <br />
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
          <!-- ADD: if article.upvoted == false, v-on:click createUpvote(), -->
          <!-- ADD: if article.upvoted == true, v-on:click destroyUpvote(), -->
          <!-- ADD: v-on:click fade out img -->
          <!-- ADD: article.upvoted = !article.upvoted -->

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
