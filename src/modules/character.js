import axios from "axios";
import { Token } from "../config/config";

const state = {
  characters: []
};

const getters = {
  allCharacters: state => state.characters
};

const actions = {
  async fetchCharacters({ commit }) {
    let config = {
      headers: {
        Accept: "application/json",
        authorization: "token " + Token
      }
    };
    await axios
      .get("http://0.0.0.0:8000/api/character/", config)
      .then(response => {
        console.log(response);
        commit("setCharacters", response.data);
      });
  }
};

const mutations = {
  setCharacters: (state, characters) => (state.characters = characters)
};

export default {
  state,
  getters,
  actions,
  mutations
};
