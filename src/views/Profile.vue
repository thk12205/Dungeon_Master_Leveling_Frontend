<template>
  <div class="profile">
    <!-- Page title -->
    <section>
      <div class="container">
        <h1 class="display-4 fw-bold">My Profile</h1>
        <p class="lead text-muted col-md-10 col-lg-8 mb-0">
          Revisit your skills, mastery is knowledge with repetition.
        </p>
      </div>
    </section>

    <!-- svg : divier -->
    <div class="divider-point-tl bg-gray-200 mt-n4"></div>

    <!-- portfolio -->
    <section class="bg-gray-200">
      <div class="container">
        <div class="row g-4 g-lg-5">
          <div class="col-12 isotope-one">
            <div class="card border-0 shadow-xs-primary transition-top-hover">
              <!-- image -->
              <a
                :href="`/profile/${user.id}/edit`"
                class="d-block mb-0 overlay overlay-opacity-0 overlay-opacity-25-hover rounded-top overflow-hidden"
              >
                <img
                  class="card-img-top z-index-0"
                  :src="user.img_url"
                  alt="..."
                />
              </a>

              <!-- svg : divier -->
              <div class="divider-sm divider-point-bl mt-n5"></div>

              <div class="card-body">
                <h1 class="mb-0 fw-normal">
                  {{ user.username }}
                </h1>

                <router-link :to="`/profile/${user.id}/edit`">
                  <button class="btn btn-danger">
                    Edit Profile
                  </button>
                </router-link>
                <br />
                <br />
                <h4>Categories</h4>

                <button
                  class="btn btn-primary pointer-events-none"
                  v-on:click="categoryFilter = ''"
                >
                  All
                </button>
                <button
                  class="btn btn-primary pointer-events-none"
                  v-on:click="categoryFilter = 1"
                >
                  STR
                </button>
                <button
                  class="btn btn-primary pointer-events-none"
                  v-on:click="categoryFilter = 2"
                >
                  CON
                </button>
                <button
                  class="btn btn-primary pointer-events-none"
                  v-on:click="categoryFilter = 3"
                >
                  DEX
                </button>
                <button
                  class="btn btn-primary pointer-events-none"
                  v-on:click="categoryFilter = 4"
                >
                  INT
                </button>
                <button
                  class="btn btn-primary pointer-events-none"
                  v-on:click="categoryFilter = 5"
                >
                  WIS
                </button>
                <button
                  class="btn btn-primary pointer-events-none"
                  v-on:click="categoryFilter = 6"
                >
                  CHA
                </button>
                <br />
                <br />
                <h4>Order By:</h4>

                <button
                  class="btn btn-primary pointer-events-none"
                  v-on:click="
                    orderByFilter = 'upvotes_total';
                    reverseFilter = -1;
                  "
                >
                  Score
                </button>
                <button
                  class="btn btn-primary pointer-events-none"
                  v-on:click="
                    orderByFilter = 'title';
                    reverseFilter = 1;
                  "
                >
                  Title
                </button>
                <button
                  class="btn btn-primary pointer-events-none"
                  v-on:click="
                    orderByFilter = 'source';
                    reverseFilter = 1;
                  "
                >
                  Sources
                </button>
                <button
                  class="btn btn-primary pointer-events-none"
                  v-on:click="reverseFilterToggle()"
                >
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
              </div>
            </div>
          </div>

          <!-- filter options -->

          <!-- articles -->
          <div
            class="col-lg-6"
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
            <div class="card border-0 shadow-xs-primary transition-top-hover">
              <!-- image -->
              <a
                :href="`/articles/${article.id}`"
                class="d-block mb-0 overlay overlay-opacity-0 overlay-opacity-25-hover rounded-top overflow-hidden"
              >
                <img
                  class="card-img-top z-index-0"
                  :src="article.img_url"
                  style="height:300px;max-width:500px"
                  alt="..."
                />
              </a>

              <!-- svg : divier -->
              <div class="divider-sm divider-point-bl mt-n5"></div>

              <div class="card-body">
                <h4 class="mb-0 fw-normal">
                  {{ article.title }}
                </h4>
                <ul class="list-inline small">
                  <li class="list-inline-item">
                    <p>Source: {{ article.source }}</p>
                  </li>
                  <li class="list-inline-item">
                    <p>Upvotes: {{ article.upvotes_total }}</p>
                  </li>
                </ul>
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
      </div>
    </section>
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
    axios.get(`/api/users/${this.$parent.getUserID()}`).then((response) => {
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
