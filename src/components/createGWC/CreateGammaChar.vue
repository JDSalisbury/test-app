<template>
  <div class="cgwc">
    <div class="col-one">
      <h2>{{ origin1.origin }}</h2>
      <h2>{{ origin2.origin }}</h2>
      <v-btn
        v-if="origin1.origin !== undefined"
        outline
        small
        color="green"
        id="combo-1"
        @click="createThisCharacter(origin1, origin2)"
        >Create</v-btn
      >
    </div>

    <div class="col-two">
      <h2>{{ origin3.origin }}</h2>
      <h2>{{ origin4.origin }}</h2>
      <v-btn
        v-if="origin1.origin !== undefined"
        outline
        small
        color="green"
        id="combo-2"
        @click="createThisCharacter(origin3, origin4)"
        >Create</v-btn
      >
    </div>

    <div class="col-three">
      <h2>{{ origin5.origin }}</h2>
      <h2>{{ origin6.origin }}</h2>
      <v-btn
        v-if="origin1.origin !== undefined"
        outline
        small
        color="green"
        id="combo-3"
        @click="createThisCharacter(origin5, origin6)"
        >Create</v-btn
      >
    </div>

    <div class="btn">
      <br />
      <v-btn
        color="blue"
        outline
        small
        @click="showChoice1(), showChoice2(), showChoice3()"
      >
        {{ origin1.origin === undefined ? "Gamma World" : "Spin again?" }}
      </v-btn>
    </div>
  </div>
</template>

<script>
import { createCharacter } from "./createGWC";
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "CreateGammaChar",
  computed: mapGetters(["getKey"]),

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
        "http://localhost:8000/api/quickChar/",
        config,
        {
          useCredentails: false
        }
      );

      this.origin1 = info.data[0];
      this.origin2 = info.data[1];
    },
    async showChoice2() {
      let config = {
        headers: {
          Accept: "application/json"
        }
      };
      const info = await axios.get(
        "http://localhost:8000/api/quickChar/",
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
        "http://localhost:8000/api/quickChar/",
        config,
        {
          useCredentails: false
        }
      );

      this.origin5 = info.data[0];
      this.origin6 = info.data[1];
    },
    createThisCharacter(primary, secondary) {
      const confirmCreate = confirm(
        `Are you sure you want to create the ${primary.origin} ${
          secondary.origin
        }?!`
      );
      if (confirmCreate === true) {
        let data = createCharacter(primary, secondary);
        let config = {
          headers: {
            authorization: "token " + this.getKey.key
          }
        };

        let url = "http://localhost:8000/api/gammacharactersheet/";
        axios.post(url, data, config).then(response => {
          alert(
            `${response.data.name} the '${response.data.origin1_first} ${
              response.data.origin2_second
            }' has been created!`
          );
        });
      }
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
