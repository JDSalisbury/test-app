<template>
  <v-card-title>
    <v-img v-if="img !== null" :src="img" max-height="200px" contain alt="pic"></v-img>
    <v-img
      v-else
      max-height="200px"
      contain
      alt="Vue logo"
      :src="require('../../../assets/dogo.png')"
    ></v-img>
  </v-card-title>
</template>

<script>
export default {
  props: ["img"]
};
</script>
