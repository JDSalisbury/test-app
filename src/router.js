import Vue from "vue";
import Router from "vue-router";
import CreateGWC from "./views/CreateGWC.vue";
import Login from "./views/Login.vue";
import Home from "./views/Home.vue";
import Play from "./views/Play.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/",
      name: "logout",
      component: Login
    },
    {
      path: "/create",
      name: "cgwc",
      component: CreateGWC
    },
    {
      path: "/play",
      name: "play",
      component: Play
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
