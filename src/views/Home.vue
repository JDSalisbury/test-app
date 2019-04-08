<template>
  <div class="home">
    <Navbar />
    <img alt="Vue logo" src="../assets/familiar.png" />
    <p>Home page</p>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/navigation/Nav.vue";

export default {
  name: "home",
  components: {
    Navbar
  }
};
</script>
