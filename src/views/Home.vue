<template>
  <div class="home">
    <Navbar/>
    <img alt="Vue logo" src="../assets/familiar.png">
    <p>Home page</p>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
import Navbar from "@/components/navigation/Nav.vue";

export default {
  name: "home",

  components: {
    HelloWorld,
    Navbar
  }
};
</script>
