<template>
  <div class="list">
    <div class="col-two">
      <ul id="example-1">
        <li v-for="char in allCharacters" :key="char.id">
          <v-card>
            <h3>{{ char.name }}</h3>
            <v-avatar>
              <img v-if="char.image !== null" :src="char.image" alt="pic">
              <img v-else src="../../assets/d20.png" alt="altpic">
            </v-avatar>
            <br>
            {{ char.origin1_first + " " + char.origin2_second }}
            <br>
            <router-link v-bind:to="'/play/' + char.id + '/'">
              <v-btn small outline color="green">
                <v-icon>play_arrow</v-icon>
              </v-btn>
            </router-link>
            <v-btn small outline color="red" @click="deleteChar(char.id, char.name)">
              <v-icon>cancel</v-icon>
            </v-btn>
          </v-card>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "GammaCharList",
  computed: {
    ...mapGetters(["getKey"]),
    ...mapGetters(["allCharacters"])
  },
  methods: {
    ...mapActions(["fetchCharacters", "deleteCharacter"]),
    deleteChar(id, name) {
      let info = {
        id: id,
        key: this.getKey.key
      };
      const confirmDelete = confirm(
        "Are you sure you want to delete " + name + "?"
      );
      if (confirmDelete === true) {
        this.deleteCharacter(info);
      }
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
li a {
  text-decoration: none;
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
