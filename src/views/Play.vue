<template>
  <div class="play">
    <Navbar />
    <img alt="Vue logo" src="../assets/dogo.png" />
    <h1>Charactersheet</h1>
    <h2>{{ oneCharacter.name }}</h2>
    <form action="/action_page.php">
      Name:
      <br />
      <input v-model="oneCharacter.name" type="text" />
      <br />Origin 1
      <br />
      <input readonly type="text" v-model="oneCharacter.origin_primary" />
      <br />
      <br />AC
      <input readonly type="number" v-model="oneCharacter.ac" />
      <br />FORT
      <input readonly type="number" v-model="oneCharacter.fort" />
      <br />REF
      <input readonly type="number" v-model="oneCharacter.ref" />
      <br />WILL
      <input readonly type="number" v-model="oneCharacter.will" />
      <br />
      <br />Origin 2
      <br />
      <input readonly type="text" v-model="oneCharacter.origin_secondary" />
      <br />Bonus 1
      <br />
      <input readonly type="text" v-model="oneCharacter.bonus_primary" />
      <br />Bonus 2
      <br />
      <input readonly type="text" v-model="oneCharacter.bonus_secondary" />
      <br />
      <br />Novice
      <br />
      <textarea
        rows="5"
        cols="50"
        readonly
        v-model="oneCharacter.novice_primary"
      ></textarea>
      <br />
      <br />
      <textarea
        rows="5"
        cols="50"
        readonly
        v-model="oneCharacter.novice_secondary"
      ></textarea>
      <br />
      <br />
      <input type="submit" value="Submit" />
    </form>
    <br />
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
