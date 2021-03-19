<template>
  <div class="articlesNew">
    <form v-on:submit.prevent="submit()">
      <!-- <img v-if="status" :src="`https://http.cat/${status}`" alt="" /> -->
      <h1>New Article</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>Title:</label>
        <input type="text" class="form-control" v-model="title" />
      </div>
      <div class="form-group">
        <label>url:</label>
        <input type="text" class="form-control" v-model="body" />
        <br />
      </div>
      <div class="form-group">
        <label>img_url:</label>
        <input type="text" class="form-control" v-model="image" />
      </div>
      <div class="form-group">
        <label>source:</label>
        <input type="text" class="form-control" v-model="source" />
      </div>
      <div class="form-group">
        <label>category_id:</label>
        <input type="text" class="form-control" v-model="category_id" />
      </div>
      <div class="form-group">
        <label>body:</label>
        <input type="text" class="form-control" v-model="body" />
      </div>
      <div class="form-group">
        <label>video(yes/no):</label>
        <input type="text" class="form-control" v-model="video" />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

// @post = Post.new(
//       title: params[:title],
//       body: params[:body],
//       image: params[:image],
//       user_id: current_user.id
//     )

// validates :title, presence: true
// validates :body, presence: true

export default {
  data: function() {
    return {
      title: "",
      image: "",
      source: "",
      category_id: "",
      body: "",
      video: "",
      errors: [],
      status: "",
    };
  },
  methods: {
    submit: function() {
      var params = {
        title: this.title,
        image: this.image,
        source: this.source,
        category_id: this.category_id,
        body: this.body,
        video: false,
      };
      axios
        .post("/api/articles", params)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          this.status = error.response.status;
        });
    },
  },
};
</script>
