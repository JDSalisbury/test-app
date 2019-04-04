<template>
  <div class="list">
    <div class="col-two">
      <button @click="showChoice1()">Show Chars</button>
      <ul id="example-1">
        <!-- eslint-disable-next-line -->
        <li v-for="char in list">
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
import axios from "axios";
export default {
  name: "GammaCharList",
  props: {
    msg: String
  },
  data() {
    return {
      list: []
    };
  },
  methods: {
    async showChoice1() {
      let config = {
        headers: {
          Accept: "application/json",
          authorization: "token " + Token
        }
      };
      const info = await axios
        .get("http://0.0.0.0:8000/api/character/", config)
        .then(response => {
          console.log(response);
          this.list = response.data;
          console.log(this.list);
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