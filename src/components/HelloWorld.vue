<template>
  <div class="hello">
    <div class="col-one">
      <h2>{{ origin1}}</h2>
      <h2>{{ origin2}}</h2>
      <button id="combo-1">Create Character</button>
    </div>

    <div class="col-two">
      <h2>{{ origin3}}</h2>
      <h2>{{ origin4}}</h2>
      <button id="combo-2">Create Character</button>
    </div>

    <div class="col-three">
      <h2>{{ origin5}}</h2>
      <h2>{{ origin6}}</h2>
      <button id="combo-3" @click="sendCharacter3()">Create Character</button>
    </div>

    <div class="btn">
      <br>
      <button @click="showChoice1(), showChoice2(), showChoice3()">Show Origins</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      info: "",
      info2: "",
      info3: "",
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

      this.info = info.data;
      this.origin1 = info.data[0].origin;
      this.origin2 = info.data[1].origin;
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
      this.origin3 = info.data[0].origin;
      this.origin4 = info.data[1].origin;
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

      this.info3 = info.data;
      this.origin5 = info.data[0].origin;
      this.origin6 = info.data[1].origin;
    },
    sendCharacter3() {
      let data = {
        name: "testname",
        origin_primary: this.info3[0].origin,
        origin_secondary: this.info3[1].origin,
        ability_primary: this.info3[0].ability,
        ability_secondary: this.info3[1].ability,
        skill_primary: this.info3[0].skill,
        skill_secondary: this.info3[1].skill,
        bonus_primary: this.info3[0].bonus,
        bonus_secondary: this.info3[1].bonus,
        ac: this.info3[0].ac + this.info3[1].ac,
        fort: this.info3[0].fort + this.info3[1].fort,
        ref: this.info3[0].ref + this.info3[1].ref,
        will: this.info3[0].will + this.info3[1].will,
        defense_primary: this.info3[0].defense,
        defense_secondary: this.info3[1].defense,
        lvl_1_primary: this.info3[0].lvl_1,
        lvl_1_secondary: this.info3[1].lvl_1,
        lvl_2_or_6_primary: this.info3[0].lvl_2_or_6,
        lvl_2_or_6_secondary: this.info3[1].lvl_2_or_6,
        novice_primary: this.info3[0].novice,
        novice_secondary: this.info3[1].novice,
        utility_primary: this.info3[0].utility,
        utility_secondary: this.info3[1].utility,
        expert_primary: this.info3[0].expert,
        expert_secondary: this.info3[1].expert,
        random_skill: "5"
      };

      let uri = "http://0.0.0.0:8000/api/character/";
      axios.post(uri, data).then(response => {
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
.hello {
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
