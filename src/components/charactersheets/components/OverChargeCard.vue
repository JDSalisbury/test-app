<template>
  <v-card-title>
    <v-card color="light-blue darken-3" class="white--text pa-2">
      <h4>OverCharge</h4>
      <span v-if="char.overcharge_bonus1 !== ''">{{
        capString(char.overcharge_bonus1)
      }}</span>
      <span v-if="char.overcharge_bonus1 !== ''">
        {{ " "
        }}{{ setOverChargeMod(char.overcharge_bonus1, char.overcharge_bonus2) }}
      </span>
      <br />
      <span v-if="char.overcharge_bonus2 !== ''">{{
        capString(char.overcharge_bonus2)
      }}</span>
      <span v-if="char.overcharge_bonus2 !== ''">
        {{ " "
        }}{{ setOverChargeMod(char.overcharge_bonus1, char.overcharge_bonus2) }}
      </span>
    </v-card>
  </v-card-title>
</template>

<script>
import { capString, setOverChargeMod } from "../../../config/config.js";
export default {
  props: ["char"],
  components: {},
  methods: {
    capString,
    setOverChargeMod
  }
};
</script>
