import axios from "axios";
import router from "../router";

// import { stat } from "fs";
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
  userKey: [],
  error: ""
};

const getters = {
  getKey: state => state.userKey,
  getError: state => state.error
};

const actions = {
  async login({ commit }, data) {
    let url = "http://localhost:8000/rest-auth/login/";
    let headers = {
      "X-CSRFToken": csrftoken,
      "Content-Type": "application/json"
    };

    axios
      .post(url, data, headers)
      .then(response => {
        commit("setUserKey", response.data);
        router.push("/home");
      })
      .catch(error => {
        if (error) {
          alert(error ? error.response.request.response : "");
        }
        commit("API_DATA_FAILURE", error.response);
      });
  }
};

const mutations = {
  setUserKey: (state, key) => (state.userKey = key),
  API_DATA_FAILURE: (state, error) => (state.error = error)
};

export default {
  state,
  getters,
  actions,
  mutations
};
