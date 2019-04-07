import Vue from "vue";
import Vuex from "vuex";
import Character from "./modules/character";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Character
  }
});
// export default new Vuex.Store({
//   state: {},
//   mutations: {},
//   actions: {}
// });
