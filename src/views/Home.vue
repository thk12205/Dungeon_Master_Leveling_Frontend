<template>
  <div class="home">
    <!-- search : pusher -->
    <div id="main-search" class="bg-gray-200 collapse">
      <div class="container position-relative">
        <!-- close button -->
        <div class="position-absolute top-0 end-0 p-2 d-inline-grid gap-auto-2">
          <span class="text-muted">close</span>
          <button
            class="btn-close p-2"
            data-bs-toggle="collapse"
            data-bs-target="#main-search"
          ></button>
        </div>

        <div class="row">
          <div class="col-lg-8 mx-auto py-5">
            <!-- form -->
            <form
              method="get"
              action="#"
              class="d-block bg-white shadow p-2 mt-5 mt-lg-3 rounded d-flex"
            >
              <!-- input -->
              <input
                required=""
                type="text"
                name="keyword"
                class="form-control shadow-none border-0"
                placeholder="search..."
                aria-label="search..."
                aria-describedby="button-search"
              />
              <!-- submit button -->
              <button
                type="submit"
                class="btn btn-primary px-4 shadow-none"
                id="button-search"
              >
                <svg
                  width="18px"
                  height="18px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <span class="d-none d-md-inline-block">search</span
                ><!-- hidden on mobile -->
              </button>
            </form>

            <!-- recent searches -->
            <ul class="list-inline small text-muted my-2">
              <li class="list-inline-item fw-medium">Recent:</li>
              <li class="list-inline-item">
                <a href="#!" class="link-muted">white headphone</a>
              </li>
              <li class="list-inline-item">
                <a href="#!" class="link-muted">panasonic ws-100</a>
              </li>
              <li class="list-inline-item">
                <a href="#!" class="link-muted">libratone</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Slider -->
    <section class="py-0">
      <div
        class="embla"
        data-embla='{
            "slidesToScroll":   1,
            "loop":             true,
            "dragFree":         true,
            "autoPlay":         2000
      }'
      >
        <div class="embla__viewport">
          <div class="embla__container vh-75">
            <!-- vh-100, vh-75, vh-50, vh-25 -->

            <a
              href="/"
              class="embla__slide d-flex flex-column align-items-center justify-content-start text-white w-100 h-100 px-5 py-7 overlay-dark overlay-opacity-5 bg-cover"
              style="background-image: url(https://wallpapercave.com/wp/wp2227193.jpg)"
            >
              <div class="d-inline-block text-start text-shadow-lg">
                <h1 class="display-1 fw-bold mb-0">
                  Dungeon Master Leveling Guide
                </h1>
                <p class="text-end">
                  HONE YOUR CRAFT IN THE
                  <span class="text-warning">ART OF DND</span>
                </p>
              </div>
            </a>

            <a
              href="/"
              class="embla__slide d-flex flex-column align-items-center justify-content-center text-white w-100 h-100 px-5 py-7 overlay-dark overlay-opacity-5 bg-cover"
              style="background-image: url(https://wallpapercave.com/wp/wp2227193.jpg)"
            >
              <div class="d-inline-block text-start text-shadow-lg">
                <h2 class="display-1 fw-bold mb-0">
                  Hone Your Craft in the Six Schools of Dungeon Mastering
                </h2>
              </div>
            </a>
          </div>
        </div>

        <!-- Buttons -->
        <button
          class="embla__button embla__button--prev embla__button--over embla__button--autohide"
          type="button"
          aria-label="Carousel Prev"
        >
          <svg
            class="text-white"
            stroke="#111111"
            fill="currentColor"
            width="30px"
            height="30px"
            viewBox="137.718 -1.001 366.563 643.999"
          >
            <path
              d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z"
            ></path>
          </svg>
        </button>
        <button
          class="embla__button embla__button--next embla__button--over embla__button--autohide"
          type="button"
          aria-label="Carousel Next"
        >
          <svg
            class="text-white"
            stroke="#111111"
            fill="currentColor"
            width="30px"
            height="30px"
            viewBox="0 0 238.003 238.003"
          >
            <path
              d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z"
            ></path>
          </svg>
        </button>
      </div>
    </section>

    <!-- best deals -->
    <section>
      <div class="container">
        <!-- product title -->
        <div
          class="mb-5"
          v-for="category in categories"
          v-bind:key="category.id"
        >
          <!-- category title box -->
          <div class="container position-relative mt-n5 mt-sm-n6">
            <div class="bg-white rounded shadow-xs-secondary p-4 py-sm-5">
              <div class="align-items-center">
                <div class="d-inline-block text-start">
                  <h2 class="mb-0">
                    <router-link :to="`/categories/${category.name}`">
                      <b>{{ category.name }}</b> {{ category.description }}
                    </router-link>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <br />
          <!-- article cards -->
          <div class="row g-1 g-md-4">
            <div
              class="col-6 col-lg-4"
              v-for="article in category.articles"
              v-bind:key="article.id"
            >
              <div
                class="card h-100 shadow-xs-secondary transition-top-hover transition-reveal-hover"
              >
                <figure class="ratio ratio-1x1">
                  <span
                    class="d-flex justify-content-center align-items-center"
                  >
                    <img
                      class="rounded-top h-100"
                      :src="article.img_url"
                      style="height:300px;max-width:300px;width:auto;height:auto;"
                      alt="..."
                    />
                  </span>
                </figure>
                <div class="card-body py-4">
                  <router-link :to="`/articles/${article.id}`">{{
                    article.title
                  }}</router-link>
                  <div class="d-block">
                    <span class="text-dark fw-medium"
                      >Source: {{ article.source }}</span
                    >
                    <br />
                    <span class="text-dark fw-medium"
                      >Upvotes: {{ article.upvotes_total }}</span
                    >
                    <br />
                    <div v-if="$parent.loggedIn()">
                      <div
                        class="btn btn-primary rounded-circle p-3"
                        v-on:click="createUpvote(article)"
                        v-if="!article.upvoted"
                      >
                        <svg
                          width="22px"
                          height="22px"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          fill="currentColor"
                        >
                          <path
                            d="M53.333,224C23.936,224,0,247.936,0,277.333V448c0,29.397,23.936,53.333,53.333,53.333h64c12.011,0,23.061-4.053,32-10.795V224H53.333z"
                          ></path>
                          <path
                            d="M512,304c0-12.821-5.077-24.768-13.888-33.579c9.963-10.901,15.04-25.515,13.653-40.725c-2.496-27.115-26.923-48.363-55.637-48.363H324.352c6.528-19.819,16.981-56.149,16.981-85.333c0-46.272-39.317-85.333-64-85.333c-22.165,0-37.995,12.48-38.677,12.992c-2.517,2.027-3.989,5.099-3.989,8.341v72.341l-61.44,133.099l-2.56,1.301v228.651C188.032,475.584,210.005,480,224,480h195.819c23.232,0,43.563-15.659,48.341-37.269c2.453-11.115,1.024-22.315-3.861-32.043c15.765-7.936,26.368-24.171,26.368-42.688c0-7.552-1.728-14.784-5.013-21.333C501.419,338.731,512,322.496,512,304z"
                          ></path>
                        </svg>
                      </div>
                      <div
                        class="btn btn-primary rounded-circle p-3"
                        v-on:click="destroyUpvote(article)"
                        v-if="article.upvoted"
                      >
                        <span class="transform-flip-x">
                          <svg
                            class="transform-flip-y"
                            width="22px"
                            height="22px"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            fill="currentColor"
                          >
                            <path
                              d="M53.333,224C23.936,224,0,247.936,0,277.333V448c0,29.397,23.936,53.333,53.333,53.333h64c12.011,0,23.061-4.053,32-10.795V224H53.333z"
                            ></path>
                            <path
                              d="M512,304c0-12.821-5.077-24.768-13.888-33.579c9.963-10.901,15.04-25.515,13.653-40.725c-2.496-27.115-26.923-48.363-55.637-48.363H324.352c6.528-19.819,16.981-56.149,16.981-85.333c0-46.272-39.317-85.333-64-85.333c-22.165,0-37.995,12.48-38.677,12.992c-2.517,2.027-3.989,5.099-3.989,8.341v72.341l-61.44,133.099l-2.56,1.301v228.651C188.032,475.584,210.005,480,224,480h195.819c23.232,0,43.563-15.659,48.341-37.269c2.453-11.115,1.024-22.315-3.861-32.043c15.765-7.936,26.368-24.171,26.368-42.688c0-7.552-1.728-14.784-5.013-21.333C501.419,338.731,512,322.496,512,304z"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- End of Block -->
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <!-- /article cards -->
        </div>
      </div>
    </section>
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
    createUpvote: function(article) {
      var params = {
        article_id: article.id,
        // user_id is set in backend create function as current_user.id, derived from the session jwt
      };
      axios.post("/api/upvotes", params).then((response) => {
        console.log(response.data);
        article.upvoted = true;
        article.upvotes_total++;
      });
      // .catch((error) => {
      //   this.errors = error.response.data.errors;
      //   this.status = error.response.status;
      // });
    },
    destroyUpvote: function(article) {
      console.log("destroyUpdate ran!!!!!!!!!");
      axios.delete(`/api/upvotes/${article.id}`).then((response) => {
        console.log(response.data);
        article.upvoted = false;
        article.upvotes_total--;
      });
    },
  },
};
</script>
