<template>
  <div class="profileEdit">
    <div class="row g-0 bg-white min-vh-100 align-items-center">
      <div class="col-lg-6 text-center text-lg-start overflow-hidden z-index-2">
        <div class="px-3 py-6">
          <div class="row">
            <div class="col-sm-8 col-md-6 col-lg-5 mx-auto">
              <h1 class="fw-bold mb-5">Edit Profile</h1>

              <ul>
                <li
                  class="text-danger"
                  v-for="error in errors"
                  v-bind:key="error"
                >
                  {{ error }}
                </li>
              </ul>

              <form
                class="form-validate"
                method="POST"
                action="#"
                v-on:submit.prevent="submit()"
              >
                <!-- first name -->
                <div class="form-floating mb-4">
                  <input
                    required
                    type="text"
                    class="form-control"
                    placeholder="Barrack Obama"
                    v-model="user.username"
                  />
                  <label>Name:</label>
                </div>

                <!-- email address -->
                <div class="form-floating mb-4">
                  <input
                    required
                    type="email"
                    class="form-control"
                    placeholder="Email address"
                    v-model="user.email"
                  />
                  <label>Email:</label>
                </div>

                <!-- image url -->
                <div class="form-floating mb-4">
                  <input
                    required
                    type="text"
                    class="form-control"
                    placeholder="Email address"
                    v-model="user.img_url"
                  />
                  <label>Image URL:</label>
                </div>

                <!-- password -->
                <div class="form-floating mb-4">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    v-model="user.password"
                  />
                  <label>Password:</label>
                </div>

                <!-- password confirmation -->
                <div class="form-floating mb-4">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    v-model="user.passwordConfirmation"
                  />
                  <label>Password Confirmation:</label>
                </div>

                <!-- submit button -->
                <div class="d-grid mb-4">
                  <button
                    type="submit"
                    class="btn btn-primary"
                    value="Submit"
                    v-on:click="updateUser()"
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
                </div>
                <button
                  class="btn btn-danger"
                  v-if="user.id == $parent.getUserID()"
                  v-on:click="destroyUser()"
                >
                  <span>Delete Profile</span>
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
          </div>
        </div>
      </div>
      <div
        class="d-none d-lg-block min-vh-100 col-lg-6 bg-cover py-8 overlay overlay-opacity-25"
        v-bind:style="`background-image:url(${user.img_url})`"
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

    <h1>hello</h1>
    <ul>
      <li class="text-danger" v-for="error in errors" v-bind:key="error">
        {{ error }}
      </li>
    </ul>
    <form v-on:submit.prevent="updateUser()">
      <h1>Edit Profile Page</h1>

      img url: <img :src="user.img_url" alt="" />

      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>Name:</label>
        <input type="text" class="form-control" v-model="user.username" />
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" class="form-control" v-model="user.email" />
      </div>
      <div class="form-group">
        <label>Image URL:</label>
        <input type="img_url" class="form-control" v-model="user.img_url" />
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" class="form-control" v-model="password" />
      </div>
      <div class="form-group">
        <label>Password confirmation:</label>
        <input
          type="password"
          class="form-control"
          v-model="passwordConfirmation"
        />
      </div>
      <input
        type="submit"
        v-if="user.id == $parent.getUserID()"
        class="btn btn-primary"
        value="Submit"
      />
    </form>
    <button v-if="user.id == $parent.getUserID()" v-on:click="destroyUser()">
      Delete Account
    </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      user: {}, // contains keys: id, username, email
      password: "",
      passwordConfirmation: "",
      errors: [],
    };
  },
  created: function() {
    axios.get(`/api/users/${this.$parent.getUserID()}`).then((response) => {
      console.log(response.data);
      this.user = response.data;
      console.log("User = ");
      console.log(this.user);
    });
  },
  methods: {
    updateUser: function() {
      var params = {
        username: this.user.username,
        email: this.user.email,
        img_url: this.user.img_url,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
      };
      axios
        .patch(`/api/users/${this.user.id}`, params)
        .then((response) => {
          console.log("AXIOS PATCH SUCCESS");
          console.log(response.data);
          this.$router.push("/profile");
        })
        .catch((error) => {
          console.log("AXIOS PATCH FAIL");
          this.errors = error.response.data.errors;
        });
    },
    destroyUser: function() {
      if (confirm("Are you sure you want to delete your account?")) {
        axios.delete(`/api/users/${this.user.id}`).then((response) => {
          console.log(response.data);
          this.$router.push("/");
        });
      }
    },
  },
};
</script>
