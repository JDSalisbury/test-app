import axios from "axios";

const state = {
  character: [],
  characters: []
};

const getters = {
  allCharacters: state => state.characters,
  oneCharacter: state => state.character
};

const actions = {
  async fetchCharacters({ commit }, key) {
    let config = {
      headers: {
        Accept: "application/json",
        authorization: "token " + key
      }
    };
    await axios
      .get("http://0.0.0.0:8000/api/character/", config)
      .then(response => {
        console.log(response);
        commit("setCharacters", response.data);
      });
  },
  async fetchCharacter({ commit }, info) {
    let config = {
      headers: {
        Accept: "application/json",
        authorization: "token " + info.key
      }
    };

    await axios
      .get(`http://0.0.0.0:8000/api/character/${info.id}/`, config)
      .then(response => {
        console.log(response);
        commit("setCharacter", response.data);
      });
  },
  async deleteCharacter({ commit }, info) {
    let config = {
      headers: {
        Accept: "application/json",
        authorization: "token " + info.key
      }
    };
    await axios.delete(`http://0.0.0.0:8000/api/character/${info.id}/`, config);
    commit("removeCharacter", info.id);
  }
};

const mutations = {
  setCharacter: (state, character) => (state.character = character),
  setCharacters: (state, characters) => (state.characters = characters),
  removeCharacter: (state, id) =>
    (state.characters = state.characters.filter(
      characters => characters.id !== id
    ))
};

export default {
  state,
  getters,
  actions,
  mutations
};
