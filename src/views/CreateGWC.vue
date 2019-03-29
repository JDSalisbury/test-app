<template>
  <div class="cgwc">
    <Navbar/>
    <img alt="Vue logo" src="../assets/logo.png">
    <CGWC msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CGWC from "@/components/createGWC/CreateGammaChar.vue";
import Navbar from "@/components/navigation/Nav.vue";

export default {
  name: "cgwc",
  components: {
    CGWC,
    Navbar
  }
};
</script>
