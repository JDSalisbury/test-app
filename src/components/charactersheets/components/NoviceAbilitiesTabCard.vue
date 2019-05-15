<template>
  <v-card-text>
    <div>
      <textarea rows="5" cols="50" readonly v-model="novOne"></textarea>
      <v-divider light></v-divider>
      <textarea rows="5" cols="50" readonly v-model="novTwo"></textarea>
    </div>
  </v-card-text>
</template>

<script>
export default {
  props: ["novOne", "novTwo"]
};
</script>