import axios from "axios";

export async function logout() {
  let url = "http://0.0.0.0:8000/rest-auth/logout/";
  await axios.post(url).then(response => {
    console.log(response);
  });
}
