<template>
  <div class="play">
    <Navbar/>
    <img alt="Vue logo" src="../assets/dogo.png">
    <h1>Charactersheet</h1>
    <!-- <div v-for="char in oneCharacter" :key="char.id"></div> -->
    <h4>{{ oneCharacter.name }}</h4>
    <!-- {{char.origin_primary +" "+ char.origin_secondary }} -->
    <br>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Navbar from "@/components/navigation/Nav.vue";

export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },
  name: "play",
  components: {
    Navbar
  },
  computed: {
    ...mapGetters(["getKey"]),
    ...mapGetters(["oneCharacter"])
  },
  methods: {
    ...mapActions(["fetchCharacter"])
  },
  created() {
    const info = {
      key: this.getKey.key,
      id: this.id
    };
    this.fetchCharacter(info);
  }
};
</script>