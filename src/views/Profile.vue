// Profile View Page
<template>
  <div class="profile">
    <h1>Profile</h1>

    <h4>Username: {{ user.username }}</h4>

    <router-link :to="`/profile/${user.id}/edit`"
      ><button>Edit Profile</button></router-link
    >
    <br />

    <h4>Articles Read</h4>

    <button v-on:click="categoryFilter = ''">All</button>
    <button v-on:click="categoryFilter = 1">STR</button>
    <button v-on:click="categoryFilter = 2">CON</button>
    <button v-on:click="categoryFilter = 3">DEX</button>
    <button v-on:click="categoryFilter = 4">INT</button>
    <button v-on:click="categoryFilter = 5">WIS</button>
    <button v-on:click="categoryFilter = 6">CHA</button>

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
          filterBy(
            filterBy(articles, titleFilter, 'title'),
            categoryFilter,
            'category_id'
          ),
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

    <ul>
      <li class="text-danger" v-for="error in errors" v-bind:key="error">
        {{ error }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

//  "title"
//  "url"
//  "img_url"
//  "source"
//  "category_id"

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      email: "",
      password: "",
      errors: [],
      // Hard coded articles
      user: [],
      articles: [],
      titleFilter: "",
      sourceFilter: "",
      categoryFilter: "",
      orderByFilter: "id",
      reverseFilter: 1, //flips the filter
    };
  },
  created: function() {
    // axios.get(`/api/users/${this.$route.params.id}`).then((response) => {
    axios.get(`/api/users/${1}`).then((response) => {
      console.log(response.data);
      this.user = response.data;
      // loop through categories, reference articles key, =+ to array
      this.articles = this.user.articles;

      console.log("User = ");
      console.log(this.user);
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
