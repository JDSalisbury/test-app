<template>
  <div class="cgwc">
    <div class="col-one">
      <h2>{{ origin1.origin }}</h2>
      <h2>{{ origin2.origin }}</h2>
      <button id="combo-1" @click="sendCharacter(origin1, origin2)">Create Character</button>
    </div>

    <div class="col-two">
      <h2>{{ origin3.origin}}</h2>
      <h2>{{ origin4.origin}}</h2>
      <button id="combo-2" @click="sendCharacter(origin3, origin4)">Create Character</button>
    </div>

    <div class="col-three">
      <h2>{{ origin5.origin}}</h2>
      <h2>{{ origin6.origin}}</h2>
      <button id="combo-3" @click="sendCharacter(origin5, origin6)">Create Character</button>
    </div>

    <div class="btn">
      <br>
      <button @click="showChoice1(), showChoice2(), showChoice3()">Show Origins</button>
    </div>
  </div>
</template>

<script>
import { createCharacter } from "./createGWC";
import axios from "axios";

export default {
  name: "CreateGammaChar",
  props: {
    msg: String
  },
  data() {
    return {
      origin1: "",
      origin2: "",
      origin3: "",
      origin4: "",
      origin5: "",
      origin6: ""
    };
  },
  methods: {
    async showChoice1() {
      let config = {
        headers: {
          Accept: "application/json"
        }
      };
      const info = await axios.get(
        "http://0.0.0.0:8000/api/quickChar/",
        config,
        {
          useCredentails: false
        }
      );

      this.origin1 = info.data[0];
      this.origin2 = info.data[1];
      console.log(this.info);
    },
    async showChoice2() {
      let config = {
        headers: {
          Accept: "application/json"
        }
      };
      const info = await axios.get(
        "http://0.0.0.0:8000/api/quickChar/",
        config,
        {
          useCredentails: false
        }
      );

      this.info2 = info.data;
      this.origin3 = info.data[0];
      this.origin4 = info.data[1];
    },
    async showChoice3() {
      let config = {
        headers: {
          Accept: "application/json"
        }
      };
      const info = await axios.get(
        "http://0.0.0.0:8000/api/quickChar/",
        config,
        {
          useCredentails: false
        }
      );

      this.origin5 = info.data[0];
      this.origin6 = info.data[1];
    },
    sendCharacter(primary, secondary) {
      let data = createCharacter(primary, secondary);
      let config = {
        headers: {
          authorization: "token cf8a091c69695c475cac41c1c858b56ec1963a9c"
        }
      };

      let url = "http://0.0.0.0:8000/api/character/";
      axios.post(url, data, config).then(response => {
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