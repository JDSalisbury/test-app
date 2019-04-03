<template>
  <div class="about">
    <Navbar/>
    <img alt="Vue logo" src="../assets/cato.png">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
// @ is an alias to /src
import Navbar from "@/components/navigation/Nav.vue";

export default {
  name: "about",
  components: {
    Navbar
  }
};
</script>