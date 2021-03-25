<template>
  <div class="login">
    <div class="row g-0 bg-white min-vh-100 align-items-center">
      <div class="col-lg-6 text-center text-lg-start overflow-hidden z-index-2">
        <div class="px-3 py-6">
          <div class="row">
            <div class="col-sm-8 col-md-6 col-lg-5 mx-auto">
              <h1 class="fw-bold mb-5">Sign In</h1>

              <form
                class="form-validate"
                method="POST"
                action="#"
                v-on:submit.prevent="submit()"
              >
                <!-- email address -->
                <div class="form-floating mb-4">
                  <input
                    required
                    type="email"
                    class="form-control"
                    placeholder="Email address"
                    v-model="email"
                  />
                  <label>Email:</label>
                </div>

                <!-- password -->
                <div class="form-floating mb-4">
                  <input
                    required
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    v-model="password"
                  />
                  <label>Password:</label>
                </div>

                <!-- submit button -->
                <div class="d-grid mb-4">
                  <button type="submit" class="btn btn-primary" value="Submit">
                    <span>Sign in</span>
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
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        class="d-none d-lg-block min-vh-100 col-lg-6 bg-cover py-8 overlay overlay-opacity-25"
        style="background-image:url(../demo.files/images/unsplash/covers/austin-distel-wD1LRb9OeEo-unsplash.jpg)"
      >
        <svg
          class="d-none d-lg-block position-absolute h-100 top-0 text-white ms-n5"
          style="width:6rem"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="50,0 100,0 50,100 0,100"></polygon>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: [],
    };
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
          localStorage.setItem("user_id", response.data.user_id);
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
