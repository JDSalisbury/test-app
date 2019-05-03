<template>
  <div class="about">
    <Navbar/>
    <GammaSheet/>
  </div>
</template>
<script>
// @ is an alias to /src
import Navbar from "@/components/navigation/Nav.vue";
import GammaSheet from "@/components/charactersheets/GammaCharacterSheet.vue";
export default {
  name: "about",
  components: {
    Navbar,
    GammaSheet
  }
};
</script>