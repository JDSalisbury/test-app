<template>
  <div id="app" data-app="true">
    <div class="the-nav">
      <Navbar @showNavBar="showNavBar" v-if="logginView" />
    </div>
    <router-view @showNavBar="showNavBar" />
  </div>
</template>

<script>
import Navbar from "@/components/navigation/Nav.vue";
export default {
  name: "App",
  components: { Navbar },
  data() {
    return {
      logginView: false
    };
  },
  methods: {
    showNavBar(e) {
      this.logginView = e;
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  // margin-top: 3%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
// @media (prefers-color-scheme: dark) {
//   body {
//     background-color: black;
//     color: #ccc;
//   }
// }
</style>
