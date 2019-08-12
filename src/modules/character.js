import axios from "axios";

const state = {
  character: [],
  characters: [],
  updateSuccess: {
    status: false
  }
};

const getters = {
  allCharacters: state => state.characters,
  char: state => state.character,
  editStatus: state => state.updateSuccess
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
      .get("http://localhost:8000/api/gammacharactersheet/", config)
      .then(response => {
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
      .get(`http://localhost:8000/api/gammacharactersheet/${info.id}/`, config)
      .then(response => {
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
    await axios.delete(
      `http://localhost:8000/api/gammacharactersheet/${info.id}/`,
      config
    );
    commit("removeCharacter", info.id);
  },
  async updateCharacter({ commit }, info) {
    commit("updateSuccess", { status: false, id: false });

    let callBack;
    let config = {
      headers: {
        Accept: "application/json",
        authorization: "token " + info.key
      }
    };
    await axios
      .put(
        `http://localhost:8000/api/gammacharactersheet/${info.id}/`,
        info.data,
        config
      )
      .then(response => {
        callBack = response;
        commit("editCharacter", response.data);
        const status = {
          id: response.data.id,
          status: true
        };
        commit("updateSuccess", status);
        setTimeout(function() {
          commit("updateSuccess", { status: false, id: false });
        }, 2000);
      });
    return callBack;
  },
  async addInventory({ commit }, info) {
    let callBack;
    let config = {
      headers: {
        Accept: "application/json",
        authorization: "token " + info.key
      }
    };
    await axios
      .post(`http://localhost:8000/api/inventoryitem/`, info.data, config)
      .then(response => {
        callBack = response;
        commit("addToInventory", response.data);
      });
    return callBack;
  },
  async deleteInventory({ commit }, info) {
    let config = {
      headers: {
        Accept: "application/json",
        authorization: "token " + info.key
      }
    };
    await axios.delete(
      `http://localhost:8000/api/inventoryitem/${info.id}/`,
      config
    );
    commit("removeFromInventory", info.id);
  },
  async updateInventory({ commit }, info) {
    commit("updateSuccess", { status: false, id: 0 });

    let callBack;
    let config = {
      headers: {
        Accept: "application/json",
        authorization: "token " + info.key
      }
    };
    await axios
      .put(
        `http://localhost:8000/api/inventoryitem/${info.id}/`,
        info.data,
        config
      )
      .then(response => {
        callBack = response;
        commit("editInventoryItem", response.data);
        const status = {
          id: response.data.id,
          status: true
        };
        commit("updateSuccess", status);
        setTimeout(function() {
          commit("updateSuccess", { status: false, id: 0 });
        }, 2000);
      });
    return callBack;
  }
};

const mutations = {
  setCharacter: (state, character) => (state.character = character),
  setCharacters: (state, characters) => (state.characters = characters),
  removeCharacter: (state, id) =>
    (state.characters = state.characters.filter(
      characters => characters.id !== id
    )),
  editCharacter: (state, character) => (state.character = character),
  addToInventory: (state, item) => state.character.inventory_items.push(item),
  removeFromInventory: (state, id) =>
    (state.character.inventory_items = state.character.inventory_items.filter(
      items => items.id !== id
    )),
  editInventoryItem: (state, item) =>
    state.character.inventory_items.map(i => (i = i.id === item.id ? item : i)),
  updateSuccess: (state, data) => (state.updateSuccess = data)
};

export default {
  state,
  getters,
  actions,
  mutations
};
