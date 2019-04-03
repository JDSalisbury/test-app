<template>
  <div class="home">
    <Navbar/>
    <img alt="Vue logo" src="../assets/familiar.png">
    <p>Home page</p>
    <List/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/navigation/Nav.vue";
import List from "@/components/list/GammaCharList.vue";

export default {
  name: "home",
  components: {
    Navbar,
    List
  }
};
</script>
