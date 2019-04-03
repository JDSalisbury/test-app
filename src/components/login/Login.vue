<<template>
  <!-- @submit handles any form of submission. -->
  <!-- .prevent keeps the event from bubbling around and doing anything else. -->
  <form @submit.prevent="handleSubmit()">
    <label>
      Email:
      <input type="email" v-model="user.email"/>
    </label>

    <label>
      Password:
      <input type="password" v-model="user.password"/>
    </label>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
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

var csrftoken = readCookie("csrftoken");
import axios from "axios";
import VueRouter from "vue-router";
import Router from "../../router.js";

export default {
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      let url = "http://0.0.0.0:8000/rest-auth/login/";
      let data = {
        username: "",
        email: this.user.email,
        password: this.user.password
      };
      let headers = {
        "X-CSRFToken": csrftoken,
        "Content-Type": "application/json"
      };

      axios.post(url, data, headers).then(response => {
        // console.log(response);
        if (response.statusText === "OK") {
          this.$router.push("/home");
        }
      });
    }
  }
};
</script>
