<template>
  <div class="login">
    <img alt="Vue logo" src="../assets/bugo.png" />
    <Login @loggedIn="loggedIn" />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/login/Login.vue";

export default {
  name: "login",
  components: {
    Login
  },
  methods: {
    loggedIn(e) {
      this.$emit("showNavBar", e);
    }
  }
};
</script>
