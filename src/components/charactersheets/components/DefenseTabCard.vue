<template>
  <v-card-text>
    <div class="defenses">
      <textarea v-if="def && def.length > 8" cols="50" readonly v-model="def"></textarea>
      <v-divider light></v-divider>

      <textarea v-if="defTwo && defTwo.length > 8" cols="50" readonly v-model="defTwo"></textarea>
      <v-divider light></v-divider>

      <textarea v-if="defAb !== ''" cols="50" readonly v-model="defAb"></textarea>
      <v-divider light></v-divider>

      <textarea v-if="defAbTwo !== ''" cols="50" readonly v-model="defAbTwo"></textarea>
    </div>
  </v-card-text>
</template>

<script>
export default {
  props: ["def", "defTwo", "defAb", "defAbTwo"]
};
</script>
