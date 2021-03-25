<template>
  <div class="articlesShow">
    <!-- Page title -->
    <section>
      <div class="container">
        <h1 class="display-4 fw-bold">Article Page</h1>
        <p class="lead text-muted col-md-10 col-lg-8 mb-0">
          Explore the unknown. Satiate your hunger for knowledge, wisdom, and
          power.
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
                :href="article.url"
                target="_blank"
                class="d-block mb-0 overlay overlay-opacity-0 overlay-opacity-25-hover rounded-top overflow-hidden"
              >
                <img
                  class="card-img-top z-index-0"
                  :src="article.img_url"
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
                    <a href="#!" class="link-muted"
                      >Source: {{ article.source }}</a
                    >
                  </li>
                  <li class="list-inline-item">
                    <a href="#!" class="link-muted"
                      >Upvotes: {{ article.upvotes_total }}</a
                    >
                  </li>
                </ul>
                <div v-if="article.creator_id == $parent.getUserID()">
                  <router-link
                    :to="`/articles/${article.id}/edit`"
                    class="btn btn-primary"
                  >
                    Edit Article
                  </router-link>
                  <br />
                  <br />
                </div>

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

    <article class="py-6 py-lg-8">
      <!-- embedded video -->
      <div v-if="article.body == '' && article.video == true">
        <h4>{{ article.title }}</h4>

        <iframe
          v-if="article.video"
          width="1120"
          height="630"
          :src="
            `https://www.youtube.com/embed/${extractYoutubeId(article.url)}`
          "
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <!-- article body -->
      <div v-if="article.body != ''" class="container">
        <!-- title -->
        <h2 class="h1 mb-0">{{ article.title }}</h2>

        <!-- breadcrumbs -->
        <!-- <nav class="mb-4" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="page-help-center-index.html">Help center</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Account</li>
          </ol>
        </nav> -->

        <!-- article content start -->
        <p>
          {{ article.body }}
        </p>
        <!-- article content end -->

        <!-- date : last update -->
        <!-- <p class="text-muted">Last Update: December 14, 2020</p> -->
      </div>
    </article>

    <section class="bg-gray-200">
      <div class="container">
        <div class="mb-5">
          <!-- section : title -->
          <span class="d-inline-grid gap-auto-2 text-primary">
            <h3>Add a comment, note, or suggestion</h3>
            <svg
              class="transform-flip-x-rtl"
              height="18px"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </span>

          <!-- Insert Comment Section -->
          <section class="pb-0 bg-white">
            <div class="container position-relative">
              <div
                class="avatar avatar-lg rounded-circle"
                v-bind:style="
                  `background-image:url(https://oldschool.runescape.wiki/images/thumb/f/fc/Clue_scroll_%28master%29_detail.png/1200px-Clue_scroll_%28master%29_detail.png?596fb)`
                "
              ></div>
              <div class="row g-0 g-lg-5">
                <h2 class="h5 text-muted">New Message</h2>
                <!-- theme form -->
                <form
                  class="form-validate pb-6"
                  v-on:submit.prevent="createComment()"
                >
                  <div class="form-floating mb-3">
                    Comment:
                    <textarea
                      required
                      class="form-control"
                      placeholder="Message"
                      style="height: 100px"
                      v-model="body"
                    ></textarea>
                  </div>

                  <button type="submit" class="btn btn-danger" value="Submit">
                    <span>Enscribe</span>
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
                <!-- my form -->
                <form
                  v-if="$parent.loggedIn()"
                  v-on:submit.prevent="createComment()"
                ></form>
              </div>
            </div>
          </section>
          <br />
          <!-- Comment Display -->
          <h2 class="h1">
            Dungeon Masters' Notes
          </h2>
        </div>

        <div class="row">
          <div
            class="col-sm-6 col-lg-3 mb-3"
            v-for="comment in comments"
            v-bind:key="comment.id"
          >
            <div class="card p-sm-3 h-100 transition-top-hover shadow">
              <div class="card-body">
                <div class="d-inline-grid gap-auto-3 mb-3">
                  <div
                    class="avatar avatar-lg rounded-circle"
                    v-bind:style="
                      `background-image:url(${comment.user.img_url})`
                    "
                  ></div>
                  <span class="text-muted">{{
                    relativeDate(comment.created_at)
                  }}</span>
                </div>

                <h4 class="h5 fw-normal">
                  {{ comment.user.username }}'s notes:
                </h4>
                <p class="text-muted">
                  {{ comment.body }}
                </p>

                <button
                  class="btn btn-danger"
                  v-if="$parent.getUserID() == comment.user_id"
                  v-on:click="destroyComment(comment)"
                >
                  <span>Erase</span>
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
              </div>
              <div class="card-footer pt-0 border-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Old Code -->

    <h4>{{ article.title }}</h4>
    <!-- CHANGE: put button into img later -->
    <a :href="article.url" target="_blank">
      <img
        v-if="!article.video"
        :src="article.img_url"
        style="height:300px;max-width:500px"
        alt=""
      />
      <iframe
        v-if="article.video"
        width="560"
        height="315"
        :src="`https://www.youtube.com/embed/${extractYoutubeId(article.url)}`"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </a>
    <br />
    source: {{ article.source }} <br />
    upvotes_total: {{ article.upvotes_total }} <br />
    body: {{ article.body }} <br />
    video: {{ article.video }} <br />

    <!-- CHANGE: put button into img later -->
    <!-- <img
            src="https://icon-library.com/images/small-thumbs-up-icon/small-thumbs-up-icon-16.jpg"
            alt=""
          /> -->
    <div v-if="$parent.loggedIn()">
      <div v-if="!article.upvoted">
        <button v-on:click="createUpvote(article)">
          Thumbs Up (see-through)
        </button>
      </div>
      <div v-if="article.upvoted">
        <button v-on:click="destroyUpvote(article)">
          Thumbs Down (opaque)
        </button>
      </div>
    </div>

    <br />

    <router-link
      v-if="article.creator_id == $parent.getUserID()"
      :to="`/articles/${article.id}/edit`"
    >
      <button>Edit Article</button>
    </router-link>

    <br />

    <h3>Comments Section</h3>

    <form v-if="$parent.loggedIn()" v-on:submit.prevent="createComment()">
      <h1>Add Comment</h1>

      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        (user.img_url here)
        <label>Comment:</label>
        <input type="text" class="form-control" v-model="body" />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
    <br />

    <div v-for="comment in comments" v-bind:key="comment.id">
      id: {{ comment.id }} <br />
      <router-link :to="`/users/${comment.user_id}`">
        img:
        <img
          :src="comment.user.img_url"
          style="height:100px;max-width:100px"
          alt=""
        />
      </router-link>

      <router-link :to="`/users/${comment.user_id}`">
        username: {{ comment.user.username }}
      </router-link>
      <br />

      comment: {{ comment.body }} <br />
      user_id: {{ comment.user_id }} <br />
      created: {{ relativeDate(comment.created_at) }} <br />
      <button
        v-if="$parent.getUserID() == comment.user_id"
        v-on:click="destroyComment(comment)"
      >
        Delete
      </button>
      <br />
      <br />
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import moment from "moment";

export default {
  data: function() {
    return {
      article: {},
      body: "",
      comments: [],
      errors: [],
    };
  },
  created: function() {
    axios.get(`/api/articles/${this.$route.params.id}`).then((response) => {
      console.log("Article = ");
      console.log(response.data);
      this.article = response.data;
      console.log("Comments = ");
      this.comments = this.article.comments.reverse();
      console.log(this.comments);
    });
  },
  methods: {
    destroyArticle: function() {
      console.log("Sanity True");
      if (confirm("Confirm Article Deletion?")) {
        axios
          .delete(`/api/article/${this.$route.params.id}`)
          .then((response) => {
            console.log(response.data);
            this.$router.push("/");
          });
      }
    },
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
    },
    destroyUpvote: function(article) {
      console.log("destroyUpdate ran!!!!!!!!!");
      axios.delete(`/api/upvotes/${article.id}`).then((response) => {
        console.log(response.data);
        article.upvoted = false;
        article.upvotes_total--;
      });
    },
    createComment: function() {
      var params = {
        article_id: this.article.id,
        body: this.body,
      };
      axios
        .post("/api/comments", params)
        .then((response) => {
          console.log("Comment = ");
          console.log(response.data);
          this.comments.unshift(response.data);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    destroyComment: function(comment) {
      if (confirm("Are you sure you want to delete this comment?")) {
        axios.delete(`/api/comments/${comment.id}`).then((response) => {
          console.log("Deletion successful");
          console.log(response.data);
          console.log("Comment = ");
          console.log(comment);
          var index = this.comments.indexOf(comment);
          console.log("Index = ");
          console.log(index);
          if (index > -1) {
            this.comments.splice(index, 1);
            console.log("Comment Removed");
          }
        });
      }
    },
    extractYoutubeId: function(url) {
      var youtubeId = url
        .split("?")[1]
        .split("&")
        .find((str) => str.startsWith("v="));
      console.log(youtubeId.substring(2));
      return youtubeId.substring(2);
    },
    relativeDate: function(date) {
      return moment(date).fromNow();
    },
  },
};
</script>
