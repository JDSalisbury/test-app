<template>
  <form @submit.prevent="handleSubmit()">
    <label>
      Email:
      <input type="email" v-model="user.email" />
    </label>

    <label>
      Password:
      <input type="password" v-model="user.password" />
    </label>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
        error: ""
      }
    };
  },
  computed: {
    ...mapGetters(["getKey", "getError"])
  },
  watch: {
    getError() {
      this.user.error = this.getError;
    }
  },
  methods: {
    ...mapActions(["login"]),
    handleSubmit() {
      let data = {
        username: "",
        email: this.user.email,
        password: this.user.password
      };
      this.login(data);
    }
  }
};
</script>
