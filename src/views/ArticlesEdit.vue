<template>
  <div class="articlesEdit">
    <section class="pb-0 bg-white">
      <div class="container position-relative">
        <div class="row g-0 g-lg-5 align-items-stretch">
          <div class="col-12 col-lg-6 py-3">
            <span class="d-inline-grid gap-auto-2 text-danger"> </span>
            <h1 class="display-5 mb-5 fw-bold d-flex align-items-center">
              <span> Update <span class="text-danger">Article</span> </span>
            </h1>

            <form
              class="form-validate pb-6"
              v-on:submit.prevent="updateArticle()"
            >
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-floating mb-3">
                    <input
                      required
                      type="text"
                      class="form-control"
                      placeholder="Title"
                      v-model="article.title"
                    />
                    <label for="contact-name">Title</label>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="URL"
                      v-model="article.url"
                    />
                    <label for="contact-email">Link URL</label>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Phone number"
                      v-model="article.source"
                    />
                    <label for="contact-phone">Source</label>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Phone number"
                      v-model="article.image"
                    />
                    <label for="contact-phone">Image URL</label>
                  </div>
                </div>
              </div>

              <div class="form-floating mb-3">
                <textarea
                  class="form-control"
                  placeholder="Message"
                  style="height: 100px"
                  v-model="article.body"
                ></textarea>
                <label for="contact-message">Body</label>
              </div>

              <label for="video">Video:</label>
              <br />
              <select
                name="video"
                id="video"
                v-model="article.video"
                class="btn btn-primary btn-lg shadow-xl-primary"
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>

              <br />
              <label for="category">Category:</label>
              <br />
              <select
                name="category"
                id="category"
                v-model="article.category_id"
                class="btn btn-primary btn-lg shadow-xl-primary"
              >
                <option value="1">STR - Monsters, Combat, Challenges</option>
                <option value="2">DEX - Improvization and Organization </option>
                <option value="3">CON - World Building and Plot</option>
                <option value="4">INT - Rules, Gold, and Balance</option>
                <option value="5">WIS - Player and Table Management</option>
                <option value="6"
                  >CHA - Characters: The Good, The Bad, The Ugly</option
                >
              </select>
              <br />
              <br />
              <button
                type="submit"
                class="btn btn-danger"
                v-on:submit.prevent="createArticle()"
              >
                <span>Save Changes</span>
                <svg
                  class="transform-flip-x-rtl"
                  height="18px"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  ></path>
                </svg>
              </button>
              <button class="btn btn-danger" v-on:click="destroyArticle()">
                <span>Delete Article</span>
                <svg
                  class="transform-flip-x-rtl"
                  height="18px"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  ></path>
                </svg>
              </button>
            </form>
          </div>

          <!-- image -->
          <!-- <div class="col-12 col-lg-6 d-flex align-items-end">
            <img class="img-fluid" :src="image" alt="..." />
          </div> -->
        </div>
      </div>
    </section>
    <form v-on:submit.prevent="updateArticle()">
      <h1>Edit Article</h1>

      <h4 v-if="article.creator_id != $parent.getUserID()">
        Sorry: only the uploader or creator of the article can edit
      </h4>

      <img :src="article.img_url" style="height:300px;max-width:500px" alt="" />

      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>Title:</label>
        <input type="text" class="form-control" v-model="article.title" />
      </div>
      <div class="form-group">
        <label>url:</label>
        <input type="text" class="form-control" v-model="article.url" />
        <br />
      </div>
      <div class="form-group">
        <label>img_url:</label>
        <input type="text" class="form-control" v-model="article.img_url" />
      </div>
      <div class="form-group">
        <label>source:</label>
        <input type="text" class="form-control" v-model="article.source" />
      </div>

      <label for="category">category:</label>
      <select name="category" id="category" v-model="article.category_id">
        <option value="1">STR - Monsters, Combat, Challenges</option>
        <option value="2">DEX - Improvization and Organization </option>
        <option value="3">CON - World Building and Plot</option>
        <option value="4">INT - Rules, Gold, and Balance</option>
        <option value="5">WIS - Player Management</option>
        <option value="6">CHA - Characters: The Good, The Bad, The Ugly</option>
      </select>

      <div class="form-group">
        <label>body:</label>
        <input type="text" class="form-control" v-model="article.body" />
      </div>

      <div class="form-group">
        <label>video(true/false):</label>
        <input
          type="radio"
          id="yes"
          name="video"
          value="true"
          v-model="article.video"
        />
        <label for="yes">Yes</label>
        <input
          type="radio"
          id="no"
          name="video"
          value="false"
          v-model="article.video"
        />
        <label for="no">No</label><br />
      </div>

      <input
        v-if="article.creator_id == $parent.getUserID()"
        type="submit"
        class="btn btn-primary"
        value="Submit"
      />
    </form>

    <router-link :to="`/articles/${article.id}`">
      <button>Cancel</button>
    </router-link>
    <br />
    <button
      v-if="article.creator_id == $parent.getUserID()"
      v-on:click="destroyArticle()"
    >
      Delete
    </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      article: {},
      errors: [],
    };
  },
  created: function() {
    axios.get(`/api/articles/${this.$route.params.id}`).then((response) => {
      console.log("Article = ");
      console.log(response.data);
      this.article = response.data;
    });
  },
  methods: {
    updateArticle: function() {
      var params = {
        title: this.article.title,
        image: this.article.image,
        source: this.article.source,
        category_id: this.article.category_id,
        body: this.article.body,
        video: this.article.video,
      };
      axios
        .patch(`/api/articles/${this.article.id}`, params)
        .then((response) => {
          console.log("AXIOS SUCCESS");
          console.log(response.data);
          this.$router.push(`/articles/${this.article.id}`);
        })
        .catch((error) => {
          console.log("AXIOS FAIL");
          this.errors = error.response.data.errors;
        });
    },
    destroyArticle: function() {
      if (confirm("Are you sure you want to delete this article?")) {
        axios.delete(`/api/articles/${this.article.id}`).then((response) => {
          console.log(response.data);
          this.$router.push("/");
        });
      }
    },
  },
};
</script>
