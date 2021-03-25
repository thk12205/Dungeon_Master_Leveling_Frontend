<template>
  <div class="articlesNew">
    <!-- Cover -->
    <section class="pb-0 bg-white">
      <div class="container position-relative">
        <div class="row g-0 g-lg-5 align-items-stretch">
          <div class="col-12 col-lg-6 py-3">
            <span class="d-inline-grid gap-auto-2 text-danger"> </span>
            <h1 class="display-5 mb-5 fw-bold d-flex align-items-center">
              <span> New <span class="text-danger">Article</span> </span>
            </h1>

            <form
              class="form-validate pb-6"
              v-on:submit.prevent="createArticle()"
            >
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-floating mb-3">
                    <input
                      required
                      type="text"
                      class="form-control"
                      placeholder="Title"
                      v-model="title"
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
                      v-model="url"
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
                      v-model="source"
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
                      v-model="image"
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
                  v-model="body"
                ></textarea>
                <label for="contact-message">Body</label>
              </div>

              <label for="video">Video:</label>
              <br />
              <select
                name="video"
                id="video"
                v-model="video"
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
                v-model="category_id"
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
                <span>Submit Article</span>
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
    <!-- /Cover -->
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
      category_id: 1,
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
