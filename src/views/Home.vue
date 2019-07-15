<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/familiar.png" />
    <p>Home page</p>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  created() {
    this.$emit("showNavBar", true);
  },
  components: {}
};
</script>
