// Profile View Page


<template>
  <div class="login">
    <form v-on:submit.prevent="submit()">
      <h1>Profile</h1>

      <h4>Username: {{username}}</h4>

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
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/");
        })
        .catch(error => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>