// Profile View Page
<template>
  <div class="profile">
    <form v-on:submit.prevent="submit()">
      <h1>Profile</h1>

      <h4>Username: {{ username }}</h4>

      <h4>Articles Read</h4>

      <button>All</button>
      <button>STR</button>
      <button>CON</button>
      <button>DEX</button>
      <button>INT</button>
      <button>WIS</button>
      <button>CHA</button>

      <h4>Order By:</h4>

      <button>Score</button>
      <button>Reverse Score</button>
      <button>Name</button>
      <button>Sources</button>

      <h4>Articles</h4>

      <div v-for="article in articles" v-bind:key="article.id">
        article_id: {{ article.id }} <br />
        title: {{ article.title }} <br />
        <form :action="article.url">
          <input type="submit" value="link to article" />
        </form>
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
        upvoted: {{ true }} <br />
        <br />
      </div>

      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
import axios from "axios";

//  "title"
//  "url"
//  "img_url"
//  "source"
//  "category_id"

export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: [],
      // Hard coded articles
      user: [],
      articles: [],
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
    submit: function() {
      var params = {
        email: this.email,
        password: this.password,
      };
      axios
        .post("/api/sessions", params)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>
