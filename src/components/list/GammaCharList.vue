<template>
  <div class="list">
    <div class="col-two">
      <ul id="example-1">
        <!-- eslint-disable-next-line -->
        <li v-for="char in allCharacters" :key="char.id">
          <h4>{{ char.name }}</h4>
          {{char.origin_primary +" "+ char.origin_secondary }}
          <br>
          <router-link v-bind:to="'/play/' + char.id ">
            <button>Play {{char.name}}</button>
          </router-link>
          <button @click="deleteChar(char.id)">Delete {{char.name}}</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import axios from "axios";
export default {
  name: "GammaCharList",
  computed: {
    ...mapGetters(["getKey"]),
    ...mapGetters(["allCharacters"])
  },
  methods: {
    ...mapActions(["fetchCharacters", "deleteCharacter"]),
    deleteChar(id) {
      let info = {
        id: id,
        key: this.getKey.key
      };
      this.deleteCharacter(info);
    }
  },
  created() {
    this.fetchCharacters(this.getKey.key);
  }
};
</script>

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