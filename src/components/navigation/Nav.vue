<template>
  <v-parallax height="100" dark :src="require('../../assets/vector.jpg')">
    <div id="nav">
      <v-toolbar color="white" dense>
        <v-tabs show-arrows fixed-tabs grow>
          <v-tab>
            <router-link to="/home">Home</router-link>
          </v-tab>
          <v-tab>
            <router-link to="/characters">Characters</router-link>
          </v-tab>
          <v-tab>
            <router-link to="/create">Create</router-link>
          </v-tab>
          <v-tab>
            <router-link to="/about">About</router-link>
          </v-tab>
          <v-tab>
            <router-link v-on:click.native="logout" to="/">Logout</router-link>
          </v-tab>
        </v-tabs>
      </v-toolbar>
    </div>
  </v-parallax>
</template>

<script>
import { logout } from "./nav.js";

export default {
  methods: {
    logout
  }
};
</script>
