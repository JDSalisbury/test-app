<template>
  <v-card-title>
    <v-card color="light-blue darken-3" class="white--text pa-2">
      <h4>Skills</h4>
      <span v-if="char.skill1 !== ''">{{ capString(char.skill1) }}</span>
      <span v-if="char.skill1_mod !== 0">{{ " " }}{{ char.skill1_mod }}</span>
      <br />
      <span v-if="char.skill2 !== ''">{{ capString(char.skill2) }}</span>
      <span v-if="char.skill2_mod !== 0">{{ " " }}{{ char.skill2_mod }}</span>
      <br />
      <span v-if="char.skill3 !== ''">{{ capString(char.skill3) }}</span>
      <span v-if="char.skill3_mod !== 0">{{ " " }}{{ char.skill3_mod }}</span>
    </v-card>
  </v-card-title>
</template>

<script>
import { capString } from "../../../config/config.js";
export default {
  props: ["char"],
  components: {},
  methods: {
    capString
  }
};
</script>