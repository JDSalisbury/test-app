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
        password: ""
      }
    };
  },
  computed: mapGetters(["getKey"]),

  methods: {
    ...mapActions(["login"]),
    handleSubmit() {
      let data = {
        username: "",
        email: this.user.email,
        password: this.user.password
      };
      this.login(data);
      if (this.getKey.key !== "") {
        this.$router.push("/home");
      }
    }
  }
};
</script>
