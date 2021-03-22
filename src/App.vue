<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link v-if="!loggedIn()" to="/login">Login</router-link> |
      <router-link v-if="!loggedIn()" to="/signup">Sign Up</router-link> |
      <router-link v-if="loggedIn()" to="/logout">Logout</router-link> |
      <router-link v-if="loggedIn()" to="/profile">Profile</router-link> |
      <router-link v-if="loggedIn()" to="/articles/new"
        >New Article</router-link
      >
      | current_user.id:
      {{ getUserID() }}
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
export default {
  data: function() {
    return {};
  },
  methods: {
    loggedIn: function() {
      return localStorage.jwt;
    },
    getUserID: function() {
      return localStorage.getItem("user_id");
    },
  },
};
</script>
