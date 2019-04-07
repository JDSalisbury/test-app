<template>
  <div class="list">
    <div class="col-two">
      <ul id="example-1">
        <!-- eslint-disable-next-line -->
        <li v-for="char in allCharacters" :key="char.name">
          <h4>{{ char.name }}</h4>
          {{char.origin_primary +" "+ char.origin_secondary }}
          <br>
          <button>Play {{char.name}}</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Token } from "../../config/config";
import { mapGetters, mapActions } from "vuex";

import axios from "axios";
export default {
  name: "GammaCharList",
  methods: {
    ...mapActions(["fetchCharacters"])
  },
  computed: mapGetters(["allCharacters"]),
  created() {
    this.fetchCharacters();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.cgwc {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.col-two {
  grid-column: 2/3;
}

.col-three {
  grid-column: 3/3;
}

.btn {
  grid-column: 2/3;
}
</style>