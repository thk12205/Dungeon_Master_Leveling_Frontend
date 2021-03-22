import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import Profile from "../views/Profile.vue";
import ProfileEdit from "../views/ProfileEdit.vue"
import CategoriesShow from "../views/CategoriesShow.vue"
import ArticlesNew from "../views/ArticlesNew.vue"
import ArticlesShow from "../views/ArticlesShow.vue"
import ArticlesEdit from "../views/ArticlesEdit.vue"
import UsersShow from "../views/UsersShow.vue"


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  { path: "/signup", 
    name: "Signup", 
    component: Signup 
  },
  { path: "/about", 
    name: "About", 
    component: About 
  },
  { 
    path: "/login", 
    name: "Login", 
    component: Login 
  },
  { 
    path: "/logout", 
    name: "Logout", 
    component: Logout 
  },
  {
    path: "/profile", 
    name: "Profile", 
    component: Profile 
  },
  {
    path: "/profile/:id/edit", 
    name: "ProfileEdit", 
    component: ProfileEdit
  },
  {
    path: "/categories/:slug", 
    name: "CategoriesShow", 
    component: CategoriesShow
  },
  {
    path: "/articles/new",
    name: "articlesNew",
    component: ArticlesNew
  },
  {
    path: "/articles/:id",
    name: "articlesShow",
    component: ArticlesShow
  },
  {
    path: "/articles/:id/edit",
    name: "articlesEdit",
    component: ArticlesEdit
  },
  {
    path: "/users/:id",
    name: "usersShow",
    component: UsersShow
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;