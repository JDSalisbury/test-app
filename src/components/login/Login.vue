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
import axios from "axios";

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
      let url = "http://0.0.0.0:8000/api-auth/login/";
      let data = { email: this.user.email, password: this.user.password };
      //   var csrftoken = getCookie("csrftoken");

      //   var headers = new Headers();
      //   headers.append("X-CSRFToken", csrftoken);
      axios.post(url, data).then(response => {
        console.log(response);
      });
    }
  }
};
</script>