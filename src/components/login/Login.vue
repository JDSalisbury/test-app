<template>
  <v-form @submit.prevent="handleSubmit">
    <v-container>
      <v-layout justify-center row wrap>
        <v-flex xs6 sm4>
          <v-text-field
            type="email"
            v-model="user.email"
            :rules="emailRules"
            name="input-10-1"
            counter
            label="E-mail"
            required
          ></v-text-field>
        </v-flex>

        <v-flex xs6 sm4>
          <v-text-field
            v-model="user.password"
            :append-icon="show1 ? 'visibility' : 'visibility_off'"
            :type="show1 ? 'text' : 'password'"
            :rules="[rules.required, rules.min]"
            name="pass"
            label="Password"
            hint="Keep it secret, keep it safe..."
            counter
            @click:append="show1 = !show1"
            required
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-btn type="submit">submit</v-btn>
    </v-container>
  </v-form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      show1: false,
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 4 || "Min 4 characters"
      },
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
      this.$emit("loggedIn", true);
      this.login(data);
    }
  }
};
</script>
