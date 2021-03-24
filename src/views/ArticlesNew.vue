<template>
  <div class="articlesNew">
    <form v-on:submit.prevent="createArticle()">
      <!-- <img v-if="status" :src="`https://http.cat/${status}`" alt="" /> -->
      <h1>New Article</h1>

      <img :src="article.img_url" style="height:300px;max-width:500px" alt="" />

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
        <input type="text" class="form-control" v-model="url" />
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
      <label for="category">category:</label>
      <select name="category" id="category" v-model="category_id">
        <option value="1">STR - Monsters, Combat, Challenges</option>
        <option value="2">DEX - Improvization and Organization </option>
        <option value="3">CON - World Building and Plot</option>
        <option value="4">INT - Rules, Gold, and Balance</option>
        <option value="5">WIS - Player and Table Management</option>
        <option value="6">CHA - Characters: The Good, The Bad, The Ugly</option>
      </select>

      <div class="form-group">
        <label>body:</label>
        <input type="text" class="form-control" v-model="body" />
      </div>
      <div class="form-group">
        <label>video(true/false):</label>
        <input
          type="radio"
          id="yes"
          name="video"
          value="true"
          v-model="video"
        />
        <label for="yes">Yes</label>
        <input
          type="radio"
          id="no"
          name="video"
          value="false"
          v-model="video"
        />
        <label for="no">No</label><br />
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
      video: false,
      errors: [],
      status: "",
      article: "",
      url: "",
    };
  },
  methods: {
    createArticle: function() {
      var params = {
        title: this.title,
        image: this.image,
        source: this.source,
        category_id: this.category_id,
        body: this.body,
        video: this.video,
        url: this.url,
      };
      axios
        .post("/api/articles", params)
        .then((response) => {
          console.log(response.data);
          this.article = response.data;
          this.$router.push(`/articles/${this.article.id}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          this.status = error.response.status;
        });
    },
  },
};
</script>
