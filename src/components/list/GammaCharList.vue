<template>
  <div class="list">
    <div class="col-two">
      <button @click="showChoice1()">Show Chars</button>
      <h2>Char 1</h2>
      <h2>Char 2</h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "GammaCharList",
  props: {
    msg: String
  },
  data() {
    return {};
  },
  methods: {
    async showChoice1() {
      let config = {
        headers: {
          Accept: "application/json",
          authorization: "token cf8a091c69695c475cac41c1c858b56ec1963a9c"
        }
      };
      const info = await axios
        .get("http://0.0.0.0:8000/api/character/", config)
        .then(response => {
          console.log(response);
        });
    }
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