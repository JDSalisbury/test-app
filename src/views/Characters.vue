<template>
  <div class="character">
    <img alt="Vue logo" src="../assets/blueFamiliar.png" />
    <p>Characters</p>
    <List />
  </div>
</template>

<script>
// @ is an alias to /src
import List from "@/components/list/GammaCharList.vue";

export default {
  name: "home",
  components: {
    List
  }
};
</script>
