<template>
  <div id="nav">
    <router-link to="/home">Home</router-link>|
    <router-link to="/create">Create</router-link>|
    <router-link to="/about">About</router-link>|
    <router-link v-on:click.native="logout" to="/">Logout</router-link>
  </div>
</template>

<script>
import { logout } from "./nav.js";

export default {
  methods: {
    logout
  }
};
</script>