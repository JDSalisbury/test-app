import axios from "axios";

export async function logout() {
  let url = "http://localhost:8000/rest-auth/logout/";
  await axios.post(url).then(response => {
    this.$emit("showNavBar", false);
    console.log(response.data.detail);
  });
}
