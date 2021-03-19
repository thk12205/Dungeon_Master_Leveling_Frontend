<template>
  <div class="profileEdit">
    <h1>hello</h1>
    <ul>
      <li class="text-danger" v-for="error in errors" v-bind:key="error">
        {{ error }}
      </li>
    </ul>
    <form v-on:submit.prevent="updateUser()">
      <h1>Edit Profile Page</h1>
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
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
    <button v-on:click="destroyUser()">Delete Account</button>
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
    axios.get(`/api/users/${1}`).then((response) => {
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
