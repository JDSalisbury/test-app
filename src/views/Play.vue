<template>
  <div class="play">
    <Navbar/>
    <img alt="Vue logo" src="../assets/dogo.png">
    <h1>Charactersheet</h1>
  </div>
</template>
<script>
// @ is an alias to /src
import Navbar from "@/components/navigation/Nav.vue";

export default {
  name: "play",
  components: {
    Navbar
  }
};
</script>