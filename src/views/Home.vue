<template>
  <div class="home">
    <Navbar />
    <img alt="Vue logo" src="../assets/familiar.png" />
    <p>Home page</p>
  </div>
</template>

<script>
import Navbar from "@/components/navigation/Nav.vue";

export default {
  name: "home",

  components: {
    Navbar
  }
};
</script>
