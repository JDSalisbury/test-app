<template>
  <div class="hello">
    <h1>{{ info }}</h1>
    <button @click="showOrigin()">Show Origins</button>
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
      info: ""
    };
  },
  methods: {
    async showOrigin() {
      let config = {
        headers: {
          Accept: "application/json"
        }
      };
      const info = await axios.get(
        "http://0.0.0.0:8000/api/quickChar/",
        config
      );

      this.info = info.data;
      console.log(info.data);
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
</style>
