import axios from "axios";
function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
const csrftoken = readCookie("csrftoken");

const state = {
  userKey: []
};

const getters = { getKey: state => state.userKey };

const actions = {
  async login({ commit }, data) {
    let url = "http://localhost:8000/rest-auth/login/";
    let headers = {
      "X-CSRFToken": csrftoken,
      "Content-Type": "application/json"
    };

    axios.post(url, data, headers).then(response => {
      commit("setUserKey", response.data);
    });
  }
};

const mutations = {
  setUserKey: (state, key) => (state.userKey = key)
};

export default {
  state,
  getters,
  actions,
  mutations
};
