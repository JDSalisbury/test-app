<template>
  <div class="cgwc">
    <img alt="Vue logo" src="../assets/globs.png" />
    <CGWC />
  </div>
</template>

<script>
// @ is an alias to /src
import CGWC from "@/components/createGWC/CreateGammaChar.vue";

export default {
  name: "cgwc",
  components: {
    CGWC
  }
};
</script>
