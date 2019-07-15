<template>
  <div class="about">
    <GammaSheet />
  </div>
</template>
<script>
// @ is an alias to /src
import GammaSheet from "@/components/charactersheets/GammaCharacterSheet.vue";
export default {
  name: "about",
  components: {
    GammaSheet
  }
};
</script>
