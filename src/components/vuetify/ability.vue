<template>
  <v-text-field
    :label="label"
    readonly
    persistent-hint="true"
    type="number"
    v-model="vModel"
    :hint="abilityMod(Number(vModel))"
  ></v-text-field>
</template>

<script>
import { abilityMod } from "../../config/config.js";
export default {
  props: ["label", "vModel"],
  methods: {
    abilityMod
  }
};
</script>