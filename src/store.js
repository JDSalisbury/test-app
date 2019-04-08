import Vue from "vue";
import Vuex from "vuex";
import Character from "./modules/character";
import User from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Character,
    User
  }
});
